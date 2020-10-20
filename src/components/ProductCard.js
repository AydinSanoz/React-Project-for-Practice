import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View } from 'react-native';

// {
//     "id": 0,
//     "title": "İstanbul",
//     "imgURL": "https://m.media-amazon.com/images/I/51uguxa9nYL._AC._SR360,460.jpg",
//     "price": "₺134,77",
//     "inStock": true
// },

const ProductCard = (props) =>{
    return(
        <View style = {styles.mainContainer}>
            <View style = {styles.imageContainer}>
                <Image
                    style = {styles.image}
                    source = {{uri : props.product.imgURL}}
                />
            </View>
            <View style = {styles.textContainer}>
                <Text>{props.product.title}</Text>
                <Text>{props.product.price}</Text>
            </View>
        </View>
    )
}

export default ProductCard;

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
    },
    imageContainer:{
        flex:1,
        margin:10,
        padding :10,
        
        

    },
    image:{
        height: Dimensions.get('window').height* 0.20,
        resizeMode : 'contain', 
    },
    textContainer :{
        flex:1,
        alignItems:'center',
        margin:10,
        padding:10,

    },
})