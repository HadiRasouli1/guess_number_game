import { StyleSheet, Text } from "react-native";
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
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    maxWidth:"80%",
  },
});
