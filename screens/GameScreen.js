import { Alert, StyleSheet, View } from "react-native";
import Title from "../component/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../component/game/NumberContainer";
import PrimaryButton from "../component/ui/PrimaryButton";
import Card from "../component/ui/Card";
import InstructionText from "../component/ui/instructionText";
import {Ionicons} from "@expo/vector-icons";

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;
const GameScreen = ({ userNumber, gameOverHandler }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currntGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currntGuess === userNumber) {
      gameOverHandler();
    }
  }, [currntGuess, userNumber, gameOverHandler]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currntGuess < userNumber) ||
      (direction === "greater" && currntGuess > userNumber)
    ) {
      Alert.alert("Dont lie!", "you know that this is wrong ...", [
        { text: "sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currntGuess;
    } else {
      minBoundary = currntGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currntGuess
    );
    setCurrentGuess(newRndNumber);
  };
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currntGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.InstructionText}>
          {/* در واقع این استایل یک پراپسی است که به این کامپوننت ارسال میکنیم و در انجا در استایلش استفاده میکنیم */}
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressFunc={nextGuessHandler.bind(this, "lower")}>
              {/* <Ionicons name="remove" size={24} color="white" /> */}
              {/* اگر یونآیکون را ایمپورت کنیم میتوانیم از آیکون های اکسپو با نام های مختلفی که در سایت مرجع است در اینجا استفاده کنیم */}
              -
              
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressFunc={nextGuessHandler.bind(this, "greater")}>
              {/* <Ionicons name="add" size={24} color="white" /> */}
              +
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View>{/* Log Rounds */}</View>
    </View>
  );
};
export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 50,
  },
  InstructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
