import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

const ProductCircleCard = ({ name,image }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          height: 70,
          width: 70,
          backgroundColor: "#BEF264",
          borderRadius: 50,
          overflow: "hidden",
        }}
      >
        <ImageBackground
          source={image}
          style={{ objectFit: "fill", flex: 1 }}
        />
      </View>
      <Text style={{ color: "white" }}>{name}</Text>
    </View>
  );
};

export default ProductCircleCard;
