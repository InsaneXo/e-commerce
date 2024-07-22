import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";



const Card = ({ image, name,  productData }) => {
  const screenWidth = Dimensions.get("window").width;
  const payload = {
    name: name,
    products: productData,
  };
  const navigation = useNavigation();
  return (
    <View
      style={{
        overflow: "hidden",
      }}
      onPress={() => navigation.navigate("Products", payload)}
    >
      <Image source={image} style={{ height: 550, width: screenWidth }} />
      <View
        style={{
          width: "50%",
          marginLeft: 10,
          marginVertical: "auto",
          gap: 5,
          position: "absolute",
          bottom:50
        }}
      >
        <Text
          style={{ fontFamily: "WorkSans", fontSize: 29, color: "white" }}
        >
          Mood Of the Earth
        </Text>
        <Text
          style={{ fontFamily: "WorkSans", color: "white", fontSize: 22, }}
        >
          Trending Product
        </Text>
        <Text style={{ fontFamily: "WorkSans", color: "white" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem{" "}
        </Text>
        <TouchableOpacity style={{padding:20, borderColor:"white", borderWidth:1, marginTop:20}} onPress={() => navigation.navigate("Products", payload)}>
          <Text style={{ fontFamily: "WorkSans", textAlign:"center", color:"white" }}>Shop Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
