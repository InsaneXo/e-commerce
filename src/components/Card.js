import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = ({ image, name }) => {
  return (
    <View>
      <View
        style={{
          height: 200,
          width: 220,
          borderRadius: 30,
          marginRight: 10,
          overflow: "hidden",
        }}
      >
        <ImageBackground source={image} style={{ flex:1 }} />
      </View>
      <Text style={{ textAlign: "center" }}>{name}</Text>
    </View>
  );
};

export default Card;
