import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constans/color";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };
  let screen = <StartGameScreen pickedNumberHandler={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
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
        {/* این کامپوننت به ما این اطمینان را میدهد که قسمت بالایی گوشی هایی که سیاه هست و در انجا دوربین و ... قرار دارد المان های ما در زیر ام قرار ندارد */}
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
