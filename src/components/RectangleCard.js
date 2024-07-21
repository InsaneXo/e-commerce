import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RectangleCard = () => {
  return (
    <View
      style={{
        backgroundColor: "#F9F4EE",
        height: 135,
        flexDirection: "row",
        gap: 10,
        padding: 10,
        borderRadius: 10,
        marginBottom: 5,
      }}
    >
      <View
        style={{ backgroundColor: "black", width: 160, borderRadius: 10 }}
      ></View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontFamily: "WorkSans", fontSize: 19 }}>
          Wedding Rings
        </Text>
        <Text style={{ fontFamily: "WorkSans", fontSize: 15 }}>Gold</Text>
      </View>
    </View>
  );
};

export default RectangleCard;

const styles = StyleSheet.create({});
