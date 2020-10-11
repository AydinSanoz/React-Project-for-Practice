import React from 'react';
import { Text, View,Image,StyleSheet, ImageBackground, Dimensions} from 'react-native';
// {
//     id: 0,
//     text: "Best Prime Day 2020 Alexa",
//     imageUrl:
//         'https://cnet4.cbsistatic.com/img/7bnQrNgv4FtUTWdPZYO29fufx-A=/1200x630/2019/11/20/0aff1d1e-92fc-4b88-aee5-850c550e09a6/cnet-black-friday-best-buy-echo-show-5.jpg',
// }

const MyNewsBanner = ({bannerData}) =>{
    return(

        <View style = {styles.container}>
            <ImageBackground
            style = {styles.Image} 
            source = {{uri:bannerData.imageUrl}}>
                <Text style = {styles.Text}>{bannerData.text}</Text>
            </ImageBackground>

        </View>
            

    )
}

export {MyNewsBanner} ;

const styles = StyleSheet.create({
    container:{
        

    },
    Image:{
        
        justifyContent: 'flex-end',
        width : Dimensions.get('window').width * 0.90,
        height: Dimensions.get('window').height * 0.20,
        resizeMode: 'contain',
        
        margin: 10,
        
    },
    Text:{
        position: 'absolute',
        backgroundColor : '#b0bec560',
        color: 'white',
        width : '100%',
        padding: 10,
        textAlign: 'center',
        


    }
})