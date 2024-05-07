import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <StartGameScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
