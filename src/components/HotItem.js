import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const HotItem = ({ name, image }) => {
  return (
    <View style={{ width: 183,  }}>
      <View
        style={{ height: 170, backgroundColor: "#BEF264", borderRadius: 20, overflow: "hidden" }}
      >
        <Image source={image} style={{width:"100%", height:"100%"}} />
      </View>
      <Text style={{ color: "white", textAlign: "center" }}>{name}</Text>
    </View>
  );
};

export default HotItem;

const styles = StyleSheet.create({});
