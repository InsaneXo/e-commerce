import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Card from "../components/Card";
import HotItem from "../components/HotItem";

const Home = () => {
  const data = [
    {
      id: "1",
      name: "Ear Rings",
      image: require("../../assets/images/1.jpg"),
    },
    {
      id: "2",
      name: "Wedding Rings",
      image: require("../../assets/images/2.jpg"),
    },
    {
      id: "3",
      name: "Gold Chain",
      image: require("../../assets/images/3.jpg"),
    },
    {
      id: "4",
      name: "Bracelet",
      image: require("../../assets/images/4.jpg"),
    },
  ];

  const productData = [
    {
      id: "1",
      name: "Elegant jhumka White & Gray",
      previousPrice: 1000,
      currentPrice: 799,
      image: require("../../assets/images/8.jpg"),
      quantity: 1,
    },
    {
      id: "2",
      name: "Emrald CZ Necklace Set with Big Pendant ",
      previousPrice: 3000,
      currentPrice: 2499,
      image: require("../../assets/images/16.jpg"),
      quantity: 1,
    },
    {
      id: "3",
      name: "White Gold Chain",
      previousPrice: 1000,
      currentPrice: 799,
      image: require("../../assets/images/white-gold-chain.jpeg"),
      quantity: 1,
    },
    {
      id: "4",
      name: "Diamond Ring",
      previousPrice: 1000,
      currentPrice: 799,
      image: require("../../assets/images/item001.jpg"),
      quantity: 1,
    },
    
  ];

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#FFFFFF", paddingHorizontal: 10 }}
    >
      <View
        style={{
          paddingVertical: 10,
          marginTop: 10,
        }}
      >
        <Text
          style={{ textAlign: "center", fontSize: 20, fontFamily: "WorkSans" }}
        >
          Sundaram
        </Text>
      </View>
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
              fontFamily: "WorkSans",
            }}
          />
          <View style={{ position: "absolute", right: 10 }}>
            <AntDesign name="search1" size={24} color="black" />
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 30 }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={data}
          renderItem={({ item }) => (
            <Card name={item.name} price={item.price} image={item.image} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={{ gap: 4, marginBottom: 20 }}>
        <Text
          style={{ fontSize: 30, fontFamily: "WorkSans", textAlign: "center" }}
        >
          Top Collection
        </Text>
        <Text style={{ fontFamily: "WorkSans", textAlign: "center" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",

          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {productData.map((item, index) => (
          <HotItem
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            previousPrice={item.previousPrice}
            currentPrice={item.currentPrice}
            quantity={item.quantity}
          />
        ))}
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#F9F4EE",
          height: 45,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        <Text style={{ fontFamily: "WorkSans" }}>See All</Text>
      </TouchableOpacity>
      <View style={{ gap: 4, marginBottom: 20 }}>
        <Text
          style={{ fontSize: 30, fontFamily: "WorkSans", textAlign: "center" }}
        >
          New Collection
        </Text>
        <Text style={{ fontFamily: "WorkSans", textAlign: "center" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {productData.map((item, index) => (
          <HotItem
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            previousPrice={item.previousPrice}
            currentPrice={item.currentPrice}
          />
        ))}
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#F9F4EE",
          height: 45,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        <Text style={{ fontFamily: "WorkSans" }}>See All</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Home;
