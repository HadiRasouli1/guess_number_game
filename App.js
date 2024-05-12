import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constans/color";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
// اسپلش اسکرین باعث میشود صفحه لود که همراه با لوگوی برنامه است نشان داده شود ما برای استفاده ازین باید آنرا در پروژه خود نصب کنیم و به صورت بالا آنرا در اینجا ایمپورت کنیم
// در این خط کد همیشه اسپلش اسکرین نمایش داده میشود تا زمانی که ما آنرا غیر فعال کنیم
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);
  // const [fontLoaded] = useFonts({
  //   "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  // });
  // ما برای استفاده از فونت های مختلف اکسپو فونت رو در پروژه نصب میکنیم و از هوک مخصوص یوز فونت را در پروژه ایمپورت میکنیم و در این بخش به صورت بالا فونتی که دانلودش کردیم با ادرس دهی شبیه به سورس عکس آنرا با استفاده از یوزفونت استفاده میکنیم

  const [testSplashScreen, setTestSplashScreen] = useState(false);
  setInterval(() => {
    setTestSplashScreen(true);
  }, 1000);
  const LoadingDate = async () => {
    if (testSplashScreen) {
      await SplashScreen.hideAsync();
      // اینجا گفتیم هرموقع تست ترو بود هاید اسینک بشه یعنی صفحه اسپلش اسکرین دیگر نشان داده نشود
    }
  };
  useEffect(() => {
    LoadingDate();
  }, [testSplashScreen]);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };
  const gameOverHandler = (numberOgRounds) => {
    setGameIsOver(true);
    setGuessRounds(numberOgRounds);
  };

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  let screen = <StartGameScreen pickedNumberHandler={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen gameOverHandler={gameOverHandler} userNumber={userNumber} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[Colors.primary700, Colors.accent500]}
    >
      <ImageBackground
        source={require("./assets/image/Background.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <StatusBar style="dark" />
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.35,
  },
});
