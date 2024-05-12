import { StyleSheet, Text } from "react-native";
import Colors from "../../constans/color";

const Title = ({children}) => {
    return (
        <Text style={styles.title}>{children}</Text>
    );
}

export default Title;

const styles=StyleSheet.create({
    title:{
    //  fontFamily:'OpenSans-Bold',
    // اسمی که در یوز فونت استفاده کردیم را اینجا مینویسیم تا از فونت استفاده کنیم
     fontSize:24,
     fontWeight:"bold",
     color:"white",
     textAlign:"center",
     borderWidth:2,
     borderColor:"white",
     padding:12,
    }
 })