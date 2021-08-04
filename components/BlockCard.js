import React from "react";
import { 
    View,
    Image,
    StyleSheet
} from "react-native";
import Subtitle from "./Subtitle";
import Title from "./Title";

const BlockCard = ({style,imageStyle,item}) => {
 
 const {thumbnail, title,desc} = item
    return (
 <View style={[styles.container,style]}>
      <Image style={[styles.image,imageStyle]} source={{uri: thumbnail}} />  
     <View>
         <Title style={styles.contentContainer}>{title}</Title>
         <Subtitle>{desc}</Subtitle>
         </View>  
    </View>
 )
}
export default BlockCard;

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height: 300,
        borderRadius: 8,
        backgroundColor: '#fff'
    },
    image: {
        width:'100%',
        height: 200
    },
    contentContainer:{
        padding: 5
    }
});