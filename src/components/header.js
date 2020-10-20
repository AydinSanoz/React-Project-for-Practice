import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

const Header = () =>{
    return(
        <View>
            <Text style = {styles.containerHeader}>Bit Pazarı</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    containerHeader:{
        color : 'orange',
        fontSize: 60,
        textAlign:'center',
        fontWeight : 'bold',
    },
})