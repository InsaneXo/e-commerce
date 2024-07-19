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
          height: 70,
          width: 70,
          backgroundColor: "#F9F4EE",
          borderRadius: 50,
          overflow: "hidden",
          borderBlockColor: "orange",
          borderWidth: 1,
        }}
      >
        <Image
          source={circleImage}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </View>
      <Text style={{ fontFamily: "WorkSans" }}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CircleItems;

const styles = StyleSheet.create({});
