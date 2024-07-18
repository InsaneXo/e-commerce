import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const CircleItems = ({name, image}) => {
  return (
    <View style={{alignItems:"center", }}>
      <View
        style={{
          height: 70,
          width: 70,
          backgroundColor: "#F9F4EE",
          borderRadius: 50,
          overflow:"hidden",
          borderBlockColor:"orange",
          borderWidth:1
        }}
      >
        <Image source={image} style={{height:"100%", width:"100%", objectFit:"cover"}}/>
      </View>
      <Text style={{fontFamily: "WorkSans"}}>{name}</Text>
    </View>
  );
};

export default CircleItems;

const styles = StyleSheet.create({});
