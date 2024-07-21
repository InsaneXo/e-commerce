import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HotItem from "../components/HotItem";

const Layout3 = () => {
  return (
    <View>
      <View
        style={{
          gap: 4,
          marginTop: 10,
          flexDirection: "row",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 25,
              fontFamily: "WorkSans",
            }}
          >
            Features Products
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
        <Text
          style={{
            fontFamily: "WorkSans",
            fontSize: 15,
            color: "red",
          }}
        >
          View All
        </Text>
      </View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <HotItem name={"Hello"} previousPrice={1000} currentPrice={1000} />
        <HotItem name={"Hello"} previousPrice={1000} currentPrice={1000} />
        <HotItem name={"Hello"} previousPrice={1000} currentPrice={1000} />
        <HotItem name={"Hello"} previousPrice={1000} currentPrice={1000} />
      </View>
    </View>
  );
};

export default Layout3;

const styles = StyleSheet.create({});
