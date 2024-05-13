import { Platform, StyleSheet, Text } from "react-native";
import Colors from "../../constans/color";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    //  fontFamily:'OpenSans-Bold',
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === 'android' ? 2: 0,
    // خط بالایی به ما این امکان را میدهد که استایل های متفاوت را در پلتفرم های متفاوت پیاده کنیم مثلا خط بالایی میگوید اگر پلتفرم اندروید بود بورد 2 پیکسل باشد در غیر اینصورت 0 در ضمن باید پلتفورم ایمپورت شود در این فایل

    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    // خط بالایی نیز به ما امکان استایل دهی در پلتفرم های متفاوت را میدهید منتها به صورتی سلکتی که در کدام پلتفرم چگونه عمل کند
    borderWidth: 5,
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
  },
});

// اگر در اسم گذاری فایل ها قبل از جی اس دات اندوید یا دات آی او اس قرار بدهیم ان فایل مخصوص برای پلتفرم خاص اجرا میشود و اگر هر دو فایل را در مسیر مشابه داشته باشیم ولی در ایمپورت کردن این فایل ها دات اندروید یا دات ای او اس را نزاریم خود به خود فایل های مورد نظر برای پلتفرم های مشخص شده اجرا میشوند فقط به مسیر ایمپورت شده باید دقت کنیم مثلا تایتل جی اس برای اندروید به یک گونه اجرا میشود برای آی یو اس یک گونه ولی هنگام ایمپورت در صفحات دیگر در ادرس دهی دات اندروید یا دات ای او ای ننوشتیم
