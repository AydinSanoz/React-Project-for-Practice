import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

export default function Header({todosLength}) {

     

        return (
            <View style={styles.cont}>
                <View style={styles.header}>
                    <Text style={styles.title}>My Todos</Text>
                </View>
            <Text style={styles.counter}>{todosLength}</Text>
                
            </View>
            
        )
    }


const styles =StyleSheet.create ({
    cont:{
        flexDirection:'row',
    },
    header:{
        flex:1,
        height:80,
        paddingTop:38,
        backgroundColor:'coral',       
    },
    title:{     
        color:'#fff',
        fontSize:20,
        fontWeight:'bold', 
    },
    counter:{
        height:80,
        paddingTop:38,
        color:'#fff',
        fontSize:20,
        fontWeight:'bold', 
        backgroundColor:'coral',      
    }
})
