import { StyleSheet, Text, View } from "react-native";
import Title from "../component/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../component/game/NumberContainer";

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};
// عددی تصادفی بین صفر و یک تولید میکند به صورتی که عدد انتخاب شده کاربر در اولین اقدام در استارت اسکرین نیست

const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currntGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currntGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        {/* +
        - */}
      </View>
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
});
