import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = ({ image, name }) => {
  return (
    <View>
      <View
        style={{
          height: 200,
          width: 350,
          borderRadius: 10,
          marginRight: 10,
          overflow: "hidden",
        }}
      >
        <Image
          source={image}
          style={{ height: "100%", width: "100%", position: "absolute" }}
        />
        <View style={{width:"50%", marginLeft:10, marginVertical:"auto", gap:5}}>
          <Text style={{fontFamily: "WorkSans", fontSize:29, color: "#777777"}}>Mood Of the Earth</Text>
          <Text style={{fontFamily: "WorkSans", color:"#222222", fontSize:22}}>Trending Product</Text>
          <Text style={{fontFamily: "WorkSans"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
