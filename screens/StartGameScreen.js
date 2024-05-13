import {
  Alert,
  Dimensions,
  StyleSheet,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../component/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constans/color";
import Title from "../component/ui/Title";
import Card from "../component/ui/Card";
import InstructionText from "../component/ui/instructionText";

const StartGameScreen = ({ pickedNumberHandler }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();
  const marginTopDistance = height < 450 ? 30 : 200;
  // ما از مقادیر هیت  ویدس یوزویندودایمیشنی که ایمپورت کردیم میتوانیم به صورت داینامیک در کد هایمان استفاده کنیم در واقع این ارقام به صورت داینامیک است یعنی مثلا هیت به دست آمده فقط در ابتدا محاسبه نمیشود بلکه در چرخش صفحه نیز این عدد تغییر میکند

  const NumberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const choseNumber = parseInt(enteredNumber);
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert(
        " invalid number !",
        "Number has to be number between 1 and 99.",
        [{ text: "okay", onPress: resetInputHandler, style: "cancel" }]
      );
      return;
    }
    pickedNumberHandler(choseNumber);
  };

  return (
    <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
      {/*  ما به صورت آرایه ای از استایل ها توانستیم عددی که از یوزویندو دایمیشن بدست آوردیم در اینجا استفاده کنیم */}
      <Title>Guess my number</Title>
      <Card>
        <InstructionText>enter a number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={NumberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressFunc={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressFunc={confirmInputHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};
// const deviceWidth = Dimensions.get('window').height;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // marginTop: deviceWidth < 380 ? 30 : 100,
    alignItems: "center",
  },
  numberInput: {
    // height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
export default StartGameScreen;
