import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
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
    <ScrollView style={styles.screen}>
      {/* برای استفاده از کامپوننت پایینی به شکل بهینه در صورت نیاز باید داخل این کامپوننت قرار بدهیم تا حالت اسکرول نیز داشته باشد */}
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        {/* این کامپوننت به ما این امکان را میدهد اگر کیبورد باز شد و فضای کافی برای دیده شدن اینپوت نبود خود به خود کامپوننت ها به بالا هدایت شوند فقط باید بهیویر این را به یک حالتی تنظیم کنیم که یکی از بهترین حالت ها پوزیشن است در ضمن فلکسش را یک میکنیم تا کل صفحه را پوشش دهد */}
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
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
                <PrimaryButton onPressFunc={resetInputHandler}>
                  Reset
                </PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPressFunc={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
// const deviceWidth = Dimensions.get('window').height;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
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
