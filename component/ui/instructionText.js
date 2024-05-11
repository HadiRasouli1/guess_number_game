import { StyleSheet, Text } from "react-native";
import Colors from "../../constans/color";

const InstructionText=({children ,style})=>{
  return(
    <Text style={[styles.instructionText, style]}>
        {children}</Text>
        // توانستیم با استفاده از پراپس این کامپوننت استایل های متفاوتی که برای هر صفحه مجزا را میخواهیم به ایم پیاده کنیم از اسم استایل نیز برای راحتی استفاده در آن کامپوننت مورد نظر  استفاده کردیم و اینکه میبینیم که میتوانیم برای استایل از ارایه ای از استایل ها در نظر بگیریم که اولویت انهاهم با توجه به قرار گیری انها مشخص میشود
  );
}
export default InstructionText;
const styles=StyleSheet.create({
    
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
})