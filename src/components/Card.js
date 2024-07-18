import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const Card = ({ image, name, screenWidth }) => {
  return (
    <View>
      <View
        style={{
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <Image source={image} style={{ height: 200, width: screenWidth }} />
        <View
          style={{
            width: "50%",
            marginLeft: 10,
            marginVertical: "auto",
            gap: 5,
            position: "absolute",
          }}
        >
          <Text
            style={{ fontFamily: "WorkSans", fontSize: 29, color: "#777777" }}
          >
            Mood Of the Earth
          </Text>
          <Text
            style={{ fontFamily: "WorkSans", color: "#222222", fontSize: 22 }}
          >
            Trending Product
          </Text>
          <Text style={{ fontFamily: "WorkSans" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem{" "}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
