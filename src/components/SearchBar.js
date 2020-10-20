import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const SearchBar = (props) =>{

    const [searchValue, setSearchValue] = useState('');
    
    
    const updateSearchBar = (val) =>{
        setSearchValue(val)
        props.searchVal(val)
    } 
        

    return(
        <View>
            <TextInput
                style = {styles.searchBar}
                placeHolder = 'Search for ...'
                onChangeText = {updateSearchBar}
            />
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
    searchBar:{
        backgroundColor :'#dcdc',
        margin:5,
        padding: 15,
        borderRadius : 8,

    },
})

