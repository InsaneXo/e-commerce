import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = ({ name, price, image }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        height: 200,
        width: 210,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
        overflow: "hidden",
      }}
    >
      <View style={{ gap: 10 }}>
        <View>
          <Image
            source={image}
            style={{ objectFit: "fill", flex: 1 }}
          />
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default Card;
