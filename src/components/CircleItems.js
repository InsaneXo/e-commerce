import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CircleItems = ({ name, circleImage, products }) => {
  const navigation = useNavigation();
  const payload = {
    name: name,
    products: products,
  };
  return (
    <TouchableOpacity
      style={{ alignItems: "center" }}
      onPress={() => navigation.navigate("Products", payload)}
    >
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: "#F9F4EE",
          borderRadius: 90,
          overflow: "hidden",
          borderColor: "#F9F4EE",
          borderWidth: 10,
          marginBottom:5
        }}
      >
        <Image
          source={circleImage}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </View>
      <Text style={{ fontFamily: "WorkSans", fontSize:17 }}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CircleItems;

const styles = StyleSheet.create({});
