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


import HotItem from "../components/HotItem";

const Catagory = () => {
  const hotItem = [
    {
      name: "Clothing",
      image: require("../../assets/images/product categories/clothing.jpg"),
    },
    {
      name: "Eletronics",
      image: require("../../assets/images/product categories/electronic.jpg"),
    },
    {
      name: "Furniture",
      image: require("../../assets/images/product categories/furniture.jpeg"),
    },
    {
      name: "Shoes",
      image: require("../../assets/images/product categories/shoes.jpg"),
    },
    {
      name: "Furniture",
      image: require("../../assets/images/product categories/furniture.jpeg"),
    },
    {
      name: "Shoes",
      image: require("../../assets/images/product categories/shoes.jpg"),
    },
  ];
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#09090B", paddingHorizontal: 10 }}
    >
      <StatusBar backgroundColor={"#09090B"} />
      <Text style={{textAlign: "center", color: "white", marginVertical:15}}>Catagory</Text>
      <View
        style={{
          flexDirection: "row",
          gap: 19,
          marginVertical: 10,
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Search your product"
          placeholderTextColor={"white"}
          style={{
            backgroundColor: "#272729",
            color: "white",
            flex: 1,
            padding: 15,
            borderRadius: 10,
          }}
        />
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 15 }}>
        {hotItem.map((item, index) => (
          <HotItem key={index} name={item.name} image={item.image} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Catagory;

const styles = StyleSheet.create({});
