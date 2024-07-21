import { StyleSheet, Text, View } from "react-native";
import React from "react";
import VerticalBox from "../components/VerticalBox";

const Layout1 = () => {
  return (
    <>
      <View
        style={{
          gap: 4,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontFamily: "WorkSans",
          }}
        >
          Top Collection
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
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 10,
        }}
      >
        <VerticalBox />
        <VerticalBox />
        <VerticalBox />
        <VerticalBox />
      </View>
    </>
  );
};

export default Layout1;

const styles = StyleSheet.create({});
