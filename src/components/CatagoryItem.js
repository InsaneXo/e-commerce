import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";


const CatagoryItem = ({ name, image }) => {
  return (
    <View
      style={{
        height: 200,
        flex: 1,
        borderRadius: 30,
        overflow: "hidden",
        backgroundColor: "#F9F4EE",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        position: "relative",
        marginBottom:10
      }}
    >
      <Image
        source={image}
        style={{ width: "100%", height: "100%", position: "absolute" }}
      />
      <Text style={{ fontSize: 40, color: "white", marginRight: 20 }}>
        {name}
      </Text>
    </View>
  );
};

export default CatagoryItem;

const styles = StyleSheet.create({});
