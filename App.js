import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };
  let screen = <StartGameScreen pickedNumberHandler={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }
  // اگر یوزر نامبر نبود یا صفر بود استارت گیم نشان به اسکرین میرود در غیر این صورت گیم اسکرین به اسکرین مقدار دهی میشود و در صفحه نشان داده میشود
  // قبل از یاد گرفتن نویگیت کردن در نیتیو ازین روش استفاده میکنیم

  return (
    <LinearGradient style={styles.rootScreen} colors={["#4e0329", "#ddb52f"]}>
      {/* برای استفاده از گرادیانت باید ان را در پروژه نصب کنیم */}
      <ImageBackground
        source={require("./assets/image/Background.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {/* امیج بک گراند در واقع از یک کامپوننت ویو و امیج ساخته شده است و استایل به ویو استایل میدهد و امیج استایل به ایمیج تخصیص داده  میشود و ریسایز مود نیز اندازه عکس را میتواند درست کند که در اینجا کاور است */}
        <StatusBar style="dark" />
        {screen}
        {/* این اسکرین کامپوننت های مورد نظر را نشان میدهد  */}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#ddb52f",
  },
  backgroundImage: {
    opacity: 0.35,
  },
});
