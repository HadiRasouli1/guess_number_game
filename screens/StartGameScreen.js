import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../component/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constans/color";

const StartGameScreen = ({ pickedNumberHandler }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const NumberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const choseNumber = parseInt(enteredNumber);
    //  پارس اینت هر چیزی را به اینتیجر تبدیل میکند در واقع برای اطمینان این کار را اینجا انجام دادیم 
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      // ایز نان یعنی چیزی وجود نداشته باشد
      Alert.alert(
        " invalid number !",
        "Number has to be number between 1 and 99.",
        [{ text: "okay", onPress: resetInputHandler , style:'cancel'}]
      );
      return;
    }
    pickedNumberHandler(choseNumber);
  };
  return (
    <View style={styles.inputContainer}>
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
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
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
