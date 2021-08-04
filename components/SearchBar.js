
import React from 'react';
import { View,TextInput,StyleSheet } from 'react-native';



const SearchBar = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.serachInput} placeholder='Search here' />
        </View>
    );
}

const styles = StyleSheet.create({
container: {
    width:"100%",
    height: 50,
    backgroundColor:'white',
    borderRadius: 8,
    justifyContent:'center'
},
serachInput: {
    width: '100%',
    height:"100%",
    paddingLeft: 8,
    fontSize: 16
}
})

export default SearchBar
