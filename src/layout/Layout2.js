import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RectangleCard from "../components/RectangleCard";

const Layout2 = () => {
  return (
    <>
      <View
        style={{
          gap: 4,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontFamily: "WorkSans",
          }}
        >
          Shop by Occasion
        </Text>
        <Text
          style={{
            fontFamily: "WorkSans",
            color: "gray",
            marginBottom: 10,
          }}
        >
          Exclusives Collection
        </Text>
      </View>
      <RectangleCard />
      <RectangleCard />
    </>
  );
};

export default Layout2;

const styles = StyleSheet.create({});
