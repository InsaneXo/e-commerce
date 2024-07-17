import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import CatagoryItem from "../components/CatagoryItem";

const Catagory = () => {
  const data = [
    {
      name: "Ear Rings",
      image: require("../../assets/images/ear-ring.jpg"),
    },
    {
      name: "Jewels",
      image: require("../../assets/images/gold-chain.jpg"),
    },
    {
      name: "Nacklace",
      image: require("../../assets/images/Necklace.jpg"),
    },
    {
      name: "Rings",
      image: require("../../assets/images/ring.jpg"),
    },
  ];
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#FFFFFF", paddingHorizontal: 10 }}
    >
      <Text style={{ textAlign: "center", fontSize: 20, marginVertical: 15 }}>
        Catagory
      </Text>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          marginVertical: 10,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            position: "relative",
            flex: 1,
          }}
        >
          <TextInput
            placeholder="Search your product "
            style={{
              backgroundColor: "#F9F4EE",
              flex: 1,
              padding: 14,
              paddingRight: 35,
              borderRadius: 10,
              fontFamily:"WorkSans"
            }}
          />
          <View style={{ position: "absolute", right: 10 }}>
            <AntDesign name="search1" size={24} color="black" />
          </View>
        </View>
      </View>
      {data.map((item, index) => (
        <CatagoryItem key={index} name={item.name} image={item.image} />
      ))}
    </ScrollView>
  );
};

export default Catagory;

const styles = StyleSheet.create({});
