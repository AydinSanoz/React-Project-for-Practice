import React, { useState } from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {

    const [todos, setTodos] = useState([]);

      const pressHandler =(key) => {
          setTodos((prevTodos)=>{
              return prevTodos.filter(todo=>todo.key !=key)
          })
      }

      const submitHandler = (text) => {
          setTodos((prevTodos) => {
              return[
                  {text:text, 
                  key:Math.random().toString()},
                  ...prevTodos
              ] 

          })

        }
                

    return (   
      
        <View style ={styles.container}>
        <Header todosLength={todos.length}/>
     
            <View style={styles.content}>
             <AddTodo submitHandler={submitHandler}/>
                <View style={styles.list}>
                    <FlatList 
                        data={todos}
                        renderItem={({item}) => (<TodoItem item={item} pressHandler={pressHandler} />)}
                    
                    
                    
                    />


                </View>
            </View>

        </View> 
    )

  
}

   
const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    content:{
        padding:40,
    },
    list:{
        marginTop:20,

       
    }
})