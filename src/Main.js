import Axios from "axios";
import React, { useEffect,useState } from "react";
import { SafeAreaView, View, Text,FlatList } from "react-native";
import MapView from "react-native-maps";


import { City, RestaurantDetail, SearchBar } from "./components";

let originalList =[]
const Main = (props) => {
  const[cityList,setCityList] = useState([])

  const fetchData = async()=>{
  const {data} = await Axios.get('https://opentable.herokuapp.com/api/cities',
  );

  setCityList(data.cities)
  originalList = [...data.cities]
  }

  const searchText = (value)=>{
    const filteredList = originalList.filter(item => {
      const userText = value.toUpperCase();
      const cityName = item.toUpperCase();
      return cityName.indexOf(userText) > -1;
    })
    setCityList(filteredList)
    }

  const citySelect =(city) => {

  }

  useEffect(()=> {fetchData()},[])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <View style = {{position:'absolute'}}>
          <SearchBar onSearchText = {searchText} />
          <FlatList
          horizontal
          showsHorizontalScrollIndicator ={false}
          keyExtractor ={(_,index) => index.toString()}
          data = {cityList}
          renderItem={({item}) => <City CityName = {item} onselect = {()=> citySelect(item)}/>} 
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Main;
