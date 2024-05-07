import {  StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../component/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        // مکس لنس تعداد نهایی کاراکتر هایی که میتوانیم در اینپوت بنویسیم را اعمال میکند
        keyboardType="number-pad"
        // کیبورد تایپ به ما این امکان را میدهد که کدام یک از قسمت کیبورد گوشی فعال شود مثلا در این مورد فقط عدد ها فعال میشود در ضمن برای اندروید و ای او اس یکسان است البته گزینه های زیادی برای هر یک در سایت نیتیو وجود دارد
        autoCapitalize="none"
        // مثلا این گزینه که در اینجا اصلا کاربرد ندارد برای این است که حساس به کلمات بزرگ باشه یا نه
        autoCorrect={false}
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    backgroundColor: "#4e0329",
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 8,
    // برای شادو دادن در اندروید از الویشن استفاده میشود
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    // برای شادو دادن در ای او اس از چهار المان بالایی استفاده میشود
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default StartGameScreen;
