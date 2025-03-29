import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import Title from "../component/ui/Title";
import Colors from "../constans/color";
import PrimaryButton from "../component/ui/PrimaryButton";

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  const { width, height } = useWindowDimensions();

  let imaeSize = 300;
  if (width < 480) {
    imaeSize = 200;
  }
  if (height < 480) {
    imaeSize = 80;
  }
  const imageStyle = {
    width: imaeSize,
    height: imaeSize,
    borderRadius: imaeSize / 2,
  };

  return (
    <ScrollView style={styles.screen} alwaysBounceVertical={false}>
      <SafeAreaView>
        <View style={styles.rootContainer}>
          <Title>Game Over!</Title>
          <View style={[styles.imageContainer, imageStyle]}>
            <Image
              style={styles.image}
              source={require("../assets/image/success.png")}
            />
          </View>

          <Text style={styles.summaryText}>
            Your phone needed
            <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess
            the number
            <Text style={styles.highlight}>{userNumber}</Text>
          </Text>
          <PrimaryButton onPressFunc={onStartNewGame}>
            Start New Game
          </PrimaryButton>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
export default GameOverScreen;
// const deviceWidth =Dimensions.get("window").width;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // borderRadius: deviceWidth<380 ? 75 : 150,
    // width: deviceWidth<380 ? 150 : 300 ,
    // height: deviceWidth<380 ? 150 : 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontWeight: "100",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  highlight: {
    fontWeight: "bold",
    color: Colors.primary500,
  },
});
