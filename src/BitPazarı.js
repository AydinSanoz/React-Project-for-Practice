import React,{useState, useEffect} from 'react';
import react, { FlatList } from 'react-native';
import { SafeAreaView, Text, View } from 'react-native';

import  productData from './product_data.json';
import ProductCard from './components/ProductCard';
import SearchBar from './components/SearchBar';
import Header from './components/Header';



const BitPazarı= () => {

    
    const [displayData, setDisplayData] = useState([]);
    const [inputVal, setInputVal] = useState('')

    useEffect(() => {
        setDisplayData(productData)
        const filteredData = productData.filter(item=>{
            return (item.title.toLowerCase().includes(inputVal.toLowerCase())
                
            )
        })
        setDisplayData(filteredData)
    
    }, [inputVal])
    
    const renderItem = ({item}) => <ProductCard product = {item}/>
    
    
    

    return(
        <SafeAreaView>
            <View>
                <Header/>
                
                <SearchBar searchVal = {(val)=>setInputVal(val)} />
            </View>
            <FlatList
                data = {displayData}
                renderItem = {renderItem}
                keyExtractor ={(item, index) => index.toString()}
                numColumns = {2}
                ListHeaderComponent = ''
            >
                
            </FlatList>



        </SafeAreaView>
    )
}

export default BitPazarı;