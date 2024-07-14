import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const CartItems = ({ catagory, name, price, image }) => {
  const [value, setValue] = useState(1);
  return (
    <View
      style={{
        height: 180,
        backgroundColor: "#272729",
        borderRadius: 17,
        flexDirection: "row",
        gap: 10,
        padding: 15,
        marginBottom: 10,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          width: 150,
          overflow: "hidden",
          borderRadius: 10,
        }}
      >
        <Image
          source={image}
          style={{ objectFit: "fill", width: "100%", height: "100%" }}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "space-around" }}>
        <View>
          <Text style={{ color: "white" }}>{catagory}</Text>
          <Text style={{ color: "white", fontSize: 20 }}>{name}</Text>
          <Text style={{ color: "red", fontSize: 20 }}>{price}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#3f3f47",
            width: 90,
            height: 45,
            borderRadius: 10,
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <Text
            style={{ color: "white", fontSize: 20 }}
            onPress={() => setValue((prevVal) => prevVal - 1)}
          >
            -
          </Text>
          <Text style={{ color: "white", fontSize: 20 }}>
            {value < 1 ? "1" : value}
          </Text>
          <Text
            style={{ color: "white", fontSize: 20 }}
            onPress={() => setValue((prevVal) => prevVal + 1)}
          >
            +
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CartItems;

const styles = StyleSheet.create({});
