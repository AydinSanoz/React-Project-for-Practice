import React, { useState } from 'react'
import {TextInput, Text,View, Button, StyleSheet} from 'react-native';

export default function AddTodo({submitHandler}) {

    const [text, setText] = useState('');

    const changeHandler = (val)=> {
        setText(val);
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder='new todo..'
                onChangeText={changeHandler}
            /> 
            <View style={styles.btn}>
            <Button onPress={()=> submitHandler(text)} title='add todo' color='coral' />
            </View>  
        </View>
    )
}

const styles =StyleSheet.create ({
    container:{
        marginBottom:30,
        paddingHorizontal:8,
        paddingVertical:6,
        borderWidth:1,
        borderColor:'#ddd',
        borderRadius:10
    },
    input:{
        marginBottom:30,
        paddingHorizontal:8,
        paddingVertical:6,
        borderWidth:1,
        borderColor:'#ddd',
        borderRadius:10
    },
    btn:{
        width:300,
        alignItems:'center',
        
    }
})