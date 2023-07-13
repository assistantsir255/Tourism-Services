import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useLayoutEffect } from "react";
import  FontAwesome  from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
//import Murree from "../assets/murree.jpg";

const ItemCard = ({ dest, title, location ,navigation}:any) => {
  return (
    <View>
    <TouchableOpacity style={styles.mainContainer}
         onPress={()=>{navigation.navigate('DetailScreen')}}
    >
   
      <Image
        style={{ width: 300, height: 150, resizeMode: "cover",  borderRadius: 10,}}
        source = {dest}
        />
    <View style={{flexDirection:"row"}}>
    <FontAwesome name="map-marker" size={20} color="green" style={{marginTop:15,paddingLeft:10}}/>
          <Text style={{ color: "green", fontSize: 20, fontWeight: "bold", padding:10}}>{title}</Text>
          </View>
        </TouchableOpacity>
        </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    width: 300,
    height: 200,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderColor: "gray",
    elevation: 2,
  },
});
