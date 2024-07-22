import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const RectangleCard = ({ name, subTitle, image, products }) => {
  const navigation = useNavigation()
  const payload = {
    name: name,
    products: products
  }
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#F9F4EE",
        height: 135,
        flexDirection: "row",
        gap: 10,
        padding: 10,
        borderRadius: 10,
        marginBottom: 5,
      }}
      onPress={()=> navigation.navigate("Products", payload)}
    >
      <View
        style={{
          backgroundColor: "white",
          width: 160,
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <Image source={image} style={{ width: "100%", height: "100%" }} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontFamily: "WorkSans", fontSize: 19 }}>{name}</Text>
        <Text style={{ fontFamily: "WorkSans", fontSize: 15 }}>{subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RectangleCard;

const styles = StyleSheet.create({});
