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
      image: require("../../assets/images/ear-ring.jpg"),
    },
    {
      id: "2",
      name: "Wedding Rings",
      image: require("../../assets/images/ring.jpg"),
    },
    {
      id: "3",
      name: "Gold Chain",
      image: require("../../assets/images/gold-chain.jpg"),
    },
    {
      id: "4",
      name: "Bracelet",
      image: require("../../assets/images/bracelet.jpg"),
    },
    {
      id: "5",
      name: "Ear Tops",
      image: require("../../assets/images/ear-top.jpg"),
    },
  ];

  const productData = [
    {
      id: "1",
      name: "Elegant jhumka White & Gray",
      previousPrice: 1000,
      currentPrice: 799,
      image: require("../../assets/images/elegantJumka.jpg"),
      quantity: 1,
    },
    {
      id: "2",
      name: "Emrald CZ Necklace Set with Big Pendant",
      previousPrice: 3000,
      currentPrice: 2499,
      image: require("../../assets/images/Necklace.jpg"),
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
    {
      id: "5",
      name: "Ear Rings",
      previousPrice: 1000,
      currentPrice: 799,
      image: require("../../assets/images/item002.jpg"),
      quantity: 1,
    },
    {
      id: "6",
      name: "Flower Tops",
      previousPrice: 1000,
      currentPrice: 799,
      image: require("../../assets/images/item003.jpg"),
      quantity: 1,
    },
    {
      id: "7",
      name: "Necklace",
      previousPrice: 1000,
      currentPrice: 799,
      image: require("../../assets/images/item004.jpg"),
      quantity: 1,
    },
    {
      id: "8",
      name: "Blue Gem Ring",
      previousPrice: 1000,
      currentPrice: 799,
      image: require("../../assets/images/item005.jpg"),
      quantity: 1,
    },
    {
      id: "9",
      name: "Gold earring",
      previousPrice: 1000,
      currentPrice: 799,
      image: require("../../assets/images/gold-earing.jpg"),
      quantity: 1,
    },
  ];

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#FFFFFF", paddingHorizontal: 10 }}
    >
      <View
        style={{
          height: 60,
          paddingVertical: 5,
          marginTop: 10,
        }}
      >
        <Image
          source={require(`../../assets/images/logo-no-background.png`)}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </View>
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
          style={{
            backgroundColor: "#F9F4EE",
            color: "white",
            flex: 1,
            padding: 15,
            borderRadius: 10,
          }}
        />
        <View
          style={{
            height: 45,
            width: 45,
            backgroundColor: "#F9F4EE",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="bars" size={24} color="black" />
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
        <Text style={{ fontSize: 24 }}>Top Collection</Text>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 15 }}>
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
          marginBottom: 30,
        }}
      >
        <Text>See All</Text>
      </TouchableOpacity>
      <View style={{ gap: 4, marginBottom: 20 }}>
        <Text style={{ fontSize: 24 }}>New Collection</Text>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 15 }}>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 15 }}>
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
        <Text>See All</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Home;
