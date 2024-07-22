import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const VerticalBox = ({ title, subtitle, image, products }) => {
  const navigation = useNavigation();
  const payload={
    name: title,
    products: products
  }
  return (
    <>
      <TouchableOpacity
        style={{
          backgroundColor: "#F9F4EE",
          height: 450,
          width: 190,
          overflow: "hidden",
          borderRadius: 6,
        }}
        onPress={()=> navigation.navigate("Products", payload)}
      >
        <Image
          source={image}
          style={{ height: "100%", width: "100%", borderRadius: 6 }}
        />
        <View style={{ position: "absolute", bottom: 10, left: 5 }}>
          <Text
            style={{
              fontFamily: "WorkSans",
              fontSize: 20,
              color: "white",
            }}
          >
            {title}
          </Text>
          <Text style={{ fontFamily: "WorkSans", color: "white" }}>
            {subtitle}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default VerticalBox;

const styles = StyleSheet.create({});
