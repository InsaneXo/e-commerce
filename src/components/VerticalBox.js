import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const VerticalBox = () => {
  return (
    <>
      <View
        style={{
          backgroundColor: "#F9F4EE",
          height: 450,
          width: 190,
          overflow: "hidden",
          borderColor: "#F9F4EE",
          borderWidth: 6,
          borderRadius: 6,
        }}
      >
        <Image
          source={require("../../assets/images/ringBg.jpg")}
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
            Gold Earring
          </Text>
          <Text style={{ fontFamily: "WorkSans" }}>
            Exclusives Gold Collection
          </Text>
        </View>
      </View>
    </>
  );
};

export default VerticalBox;

const styles = StyleSheet.create({});
