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
import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Card from "../components/Card";
import ProductCircleCard from "../components/ProductCircleCard";
import HotItem from "../components/HotItem";

const Home = () => {
  const data = [
    {
      id: "1",
      name: "Iphone 14",
      price: "80000",
      image: require("../../assets/images/home products/apple macbook.jpg"),
    },
    {
      id: "2",
      name: "Asus Laptop",
      price: "30000",
      image: require("../../assets/images/home products/apple macbook.jpg"),
    },
    {
      id: "3",
      name: "Apple Mac",
      price: "100000",
      image: require("../../assets/images/home products/apple macbook.jpg"),
    },
    {
      id: "4",
      name: "Addidas Shoes",
      price: "80000",
      image: require("../../assets/images/home products/apple macbook.jpg"),
    },
    {
      id: "5",
      name: "Redmi 8",
      price: "70000",
      image: require("../../assets/images/home products/apple macbook.jpg"),
    },
  ];

  const productData = [
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
      name: "Beauty",
      image: require("../../assets/images/product categories/clothing.jpg"),
    },
    {
      name: "Books",
      image: require("../../assets/images/product categories/books.jpg"),
    },
    {
      name: "Shoes",
      image: require("../../assets/images/product categories/shoes.jpg"),
    },
    {
      name: "Toys",
      image: require("../../assets/images/product categories/toy.jpg"),
    },
    {
      name: "Gym Product",
      image: require("../../assets/images/product categories/clothing.jpg"),
    },
    {
      name: "Mobile",
      image: require("../../assets/images/product categories/clothing.jpg"),
    },
    {
      name: "Mobile Cover",
      image: require("../../assets/images/product categories/clothing.jpg"),
    },
  ];

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
  ];
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#09090B", paddingHorizontal: 10 }}
    >
      <StatusBar backgroundColor={"#09090B"} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 4,
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: "#3A5119",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome6 name="location-dot" size={24} color="white" />
          </View>
          <Text style={{ color: "white" }}>Noida</Text>
        </View>
        <View>
          <FontAwesome5 name="bell" size={24} color="white" />
        </View>
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
          placeholderTextColor={"white"}
          style={{
            backgroundColor: "#272729",
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
            backgroundColor: "#29292C",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="bars" size={24} color="white" />
        </View>
      </View>
      <View style={{ marginBottom: 10 }}>
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
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 25 }}>
            Product Categories
          </Text>
          <Text style={{ color: "white", fontSize: 17, color: "#BEF264" }}>
            See all
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          marginTop: 10,
          flexWrap: "wrap",
        }}
      >
        {productData.map((item, index) => (
          <ProductCircleCard key={index} name={item.name} image={item.image} />
        ))}
      </View>
      <View style={{ marginVertical: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 25 }}>Hot Item</Text>
          <Text style={{ color: "white", fontSize: 17, color: "#BEF264" }}>
            See all
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 15 }}>
        {hotItem.map((item, index) => (
          <HotItem key={index} name={item.name} image={item.image} />
        ))}
      </View>
      <View style={{ marginVertical: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 25 }}>
            Top Rated Product
          </Text>
          <Text style={{ color: "white", fontSize: 17, color: "#BEF264" }}>
            See all
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 15 }}>
        {hotItem.map((item, index) => (
          <HotItem key={index} name={item.name} image={item.image} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;
