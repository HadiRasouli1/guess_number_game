import { Pressable, StyleSheet, Text, View } from "react-native";

const PrimaryButton = ({ children }) => {
  const PressHandler = () => {
    console.log("Pressed !");
  };
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={PressHandler}
        android_ripple={{ color: "#640233" }}
        // در هنگام پرس در اندروید این رنگ را اعمال کن
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        // در این قسمت گفتیم اگر پرس بود که دو استایل را برایش در نظر بگیر که در واقع این کازر برای ای او اس است اگر پرس نبود یک استایل را نمایش بده
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
    // ویو را خارج از پرسبل قرار دادیم تا هم رادیوس را برای هر دو پلتفرم اعمال کنیم هم هاور درست بشیند به جای خودش در هر دو پلتفرم
  );
};

export default PrimaryButton;
const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
