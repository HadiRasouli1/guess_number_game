import { Dimensions, StyleSheet, View } from "react-native";
import Colors from "../../constans/color";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};
export default Card;
const deviceWidth = Dimensions.get("window").width;
// این دایمنشنی که ایمپورت کردیم و با استفاده از گت ویندو توانستیم ویدس یا ... دستگاه مورد نظر را بدست اوریم و در مقادیر سی اس اس از ان استفاده کنیم حتی به صورت شرطی ولی اشکالی که این دایمیشن دارد این است که به صورت داینامیک نیست و فقط اولین بار به ما یک مقدار میدهد و با چرخش صفحه یا ... عدد همان باقی میماند
const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 36,
    backgroundColor: Colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
