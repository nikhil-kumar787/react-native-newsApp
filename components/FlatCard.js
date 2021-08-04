import React from "react";
import { 
    View,
    Image,
    StyleSheet
} from "react-native";
import Subtitle from "./Subtitle";
import Title from "./Title";

const FlatCard = ({item}) => {
 
 const {thumbnail, title,desc} = item
    return (
 <View style={styles.container}>
      <Image source={{uri: thumbnail}} style={styles.image}/>  
     <View>
         <Title style={styles.contentContainer}>{title}</Title>
         <Subtitle>{desc}</Subtitle>
         </View>  
    </View>
 )
}
export default FlatCard;

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius: 8,
        overflow:'hidden',
        marginBottom: 10,
        height: 80
    },
    image: {
        flex: 0.35,
        height:'100%',

        
    },
    contentContainer:{
        flex: 0.65,
        paddingHorizontal: 5
    }
});