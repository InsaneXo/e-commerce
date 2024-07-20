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
  Button,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Card from "../components/Card";
import HotItem from "../components/HotItem";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import CircleItems from "../components/CircleItems";
import VerticalBox from "../components/VerticalBox";

const data = [
  {
    id: "1",
    name: "All Jewellery",
    image: require("../../assets/images/1.jpg"),
  },
  {
    id: "2",
    name: "All Jewellery",
    image: require("../../assets/images/2.jpg"),
  },
  {
    id: "3",
    name: "All Jewellery",
    image: require("../../assets/images/3.jpg"),
  },
  {
    id: "4",
    name: "All Jewellery",
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
  {
    id: "5",
    name: "Elegant jhumka White & Gray",
    previousPrice: 1000,
    currentPrice: 799,
    image: require("../../assets/images/8.jpg"),
    quantity: 1,
  },
  {
    id: "6",
    name: "Emrald CZ Necklace Set with Big Pendant ",
    previousPrice: 3000,
    currentPrice: 2499,
    image: require("../../assets/images/16.jpg"),
    quantity: 1,
  },
  {
    id: "7",
    name: "White Gold Chain",
    previousPrice: 1000,
    currentPrice: 799,
    image: require("../../assets/images/white-gold-chain.jpeg"),
    quantity: 1,
  },
  {
    id: "8",
    name: "Diamond Ring",
    previousPrice: 1000,
    currentPrice: 799,
    image: require("../../assets/images/item001.jpg"),
    quantity: 1,
  },
];

const circleProductData = [
  {
    id: "1",
    name: "Earring",
    circleImage: require("../../assets/images/item002.jpg"),
    products: [
      {
        id: "1",
        name: "Elegant jhumka White & Gray",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item002.jpg"),
        quantity: 1,
      },
      {
        id: "2",
        name: "Elegant jhumka White & Gray ",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item002.jpg"),
        quantity: 1,
      },
      {
        id: "3",
        name: "Elegant jhumka White & Gray ",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item002.jpg"),
        quantity: 1,
      },
      {
        id: "4",
        name: "Elegant jhumka White & Gray ",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item002.jpg"),
        quantity: 1,
      },
      {
        id: "5",
        name: "Elegant jhumka White & Gray ",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item002.jpg"),
        quantity: 1,
      },
      {
        id: "6",
        name: "Elegant jhumka White & Gray ",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item002.jpg"),
        quantity: 1,
      },
    ],
  },
  {
    id: "2",
    name: "Necklaces",
    circleImage: require("../../assets/images/item004.jpg"),
    products: [
      {
        id: "1",
        name: "Emrald CZ Necklace Set with Big Pendant ",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item004.jpg"),
        quantity: 1,
      },
      {
        id: "2",
        name: "Emrald CZ Necklace Set with Big Pendant ",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item004.jpg"),
        quantity: 1,
      },
      {
        id: "3",
        name: "Emrald CZ Necklace Set with Big Pendant ",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item004.jpg"),
        quantity: 1,
      },
      {
        id: "4",
        name: "Emrald CZ Necklace Set with Big Pendant ",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item004.jpg"),
        quantity: 1,
      },
      {
        id: "5",
        name: "Emrald CZ Necklace Set with Big Pendant ",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item004.jpg"),
        quantity: 1,
      },
      {
        id: "6",
        name: "Emrald CZ Necklace Set with Big Pendant ",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item004.jpg"),
        quantity: 1,
      },
    ],
  },
  {
    id: "3",
    name: "Rings",
    circleImage: require("../../assets/images/item001.jpg"),
    products: [
      {
        id: "1",
        name: "Diamond Ring",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item001.jpg"),
        quantity: 1,
      },
      {
        id: "2",
        name: "Diamond Ring",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item001.jpg"),
        quantity: 1,
      },
      {
        id: "3",
        name: "Diamond Ring",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item001.jpg"),
        quantity: 1,
      },
      {
        id: "4",
        name: "Diamond Ring",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item001.jpg"),
        quantity: 1,
      },
      {
        id: "5",
        name: "Diamond Ring",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item001.jpg"),
        quantity: 1,
      },
      {
        id: "6",
        name: "Diamond Ring",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item001.jpg"),
        quantity: 1,
      },
    ],
  },
  {
    id: "4",
    name: "Chains",
    circleImage: require("../../assets/images/white-gold-chain.jpeg"),
    products: [
      {
        id: "1",
        name: "White Gold Chain",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/white-gold-chain.jpeg"),
        quantity: 1,
      },
      {
        id: "2",
        name: "White Gold Chain",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/white-gold-chain.jpeg"),
        quantity: 1,
      },
      {
        id: "3",
        name: "White Gold Chain",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/white-gold-chain.jpeg"),
        quantity: 1,
      },
      {
        id: "4",
        name: "White Gold Chain",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/white-gold-chain.jpeg"),
        quantity: 1,
      },
      {
        id: "5",
        name: "White Gold Chain",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/white-gold-chain.jpeg"),
        quantity: 1,
      },
      {
        id: "6",
        name: "White Gold Chain",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/white-gold-chain.jpeg"),
        quantity: 1,
      },
    ],
  },
  {
    id: "5",
    name: "Bracelet",
    circleImage: require("../../assets/images/bracelet.jpg"),
    products: [
      {
        id: "1",
        name: "Silver Bracelet",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/bracelet.jpg"),
        quantity: 1,
      },
      {
        id: "2",
        name: "Silver Bracelet",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/bracelet.jpg"),
        quantity: 1,
      },
      {
        id: "3",
        name: "Silver Bracelet",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/bracelet.jpg"),
        quantity: 1,
      },
      {
        id: "4",
        name: "Silver Bracelet",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/bracelet.jpg"),
        quantity: 1,
      },
      {
        id: "5",
        name: "Silver Bracelet",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/bracelet.jpg"),
        quantity: 1,
      },
      {
        id: "6",
        name: "Silver Bracelet",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/bracelet.jpg"),
        quantity: 1,
      },
    ],
  },
];

const products = {
  earring: [
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
      name: "Elegant jhumka White & Gray",
      previousPrice: 1000,
      currentPrice: 799,
      image: require("../../assets/images/8.jpg"),
      quantity: 1,
    },
    {
      id: "3",
      name: "Elegant jhumka White & Gray",
      previousPrice: 1000,
      currentPrice: 799,
      image: require("../../assets/images/8.jpg"),
      quantity: 1,
    },
    {
      id: "4",
      name: "Elegant jhumka White & Gray",
      previousPrice: 1000,
      currentPrice: 799,
      image: require("../../assets/images/8.jpg"),
      quantity: 1,
    },
  ],
  ring: [
    {
      id: "1",
      name: "Diamond Ring",
      previousPrice: 1000,
      currentPrice: 799,
      image: require("../../assets/images/item001.jpg"),
      quantity: 1,
    },
    {
      id: "2",
      name: "Diamond Ring",
      previousPrice: 1000,
      currentPrice: 799,
      image: require("../../assets/images/item001.jpg"),
      quantity: 1,
    },
    {
      id: "3",
      name: "Diamond Ring",
      previousPrice: 1000,
      currentPrice: 799,
      image: require("../../assets/images/item001.jpg"),
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
  ],
  necklace: [
    {
      id: "1",
      name: "Emrald CZ Necklace Set with Big Pendant ",
      previousPrice: 3000,
      currentPrice: 2499,
      image: require("../../assets/images/16.jpg"),
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
      name: "Emrald CZ Necklace Set with Big Pendant ",
      previousPrice: 3000,
      currentPrice: 2499,
      image: require("../../assets/images/16.jpg"),
      quantity: 1,
    },
    {
      id: "4",
      name: "Emrald CZ Necklace Set with Big Pendant ",
      previousPrice: 3000,
      currentPrice: 2499,
      image: require("../../assets/images/16.jpg"),
      quantity: 1,
    },
  ],
};

const categories = [
  {
    id: "1",
    name: "Earring",
  },
  {
    id: "2",
    name: "Rings",
  },
  {
    id: "3",
    name: "Necklaces",
  },
];

const Home = () => {
  const wishList = useSelector((store) => store.wishlist);
  const navigation = useNavigation();
  const [tab, setTab] = useState("Earring");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / Dimensions.get("window").width);
    setCurrentIndex(index);
  };

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 20,
          paddingHorizontal: 10,
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
        }}
      >
        <Text
          style={{ textAlign: "center", fontSize: 20, fontFamily: "WorkSans" }}
        >
          Sundaram
        </Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <AntDesign name="search1" size={24} color="black" />
          <TouchableOpacity onPress={() => navigation.navigate("wishlist")}>
            <View style={{ position: "relative" }}>
              {wishList.length === 0 ? null : (
                <View
                  style={{
                    position: "absolute",
                    right: -6,
                    top: -7,
                    backgroundColor: "red",
                    height: 16,
                    width: 15,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 10,
                  }}
                >
                  <Text style={{ color: "white" }}>{wishList.length}</Text>
                </View>
              )}
            </View>
            <AntDesign name="hearto" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <View style={{ position: "relative" }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={data}
            pagingEnabled
            snapToAlignment="start"
            renderItem={({ item }) => (
              <Card
                name={item.name}
                price={item.price}
                image={item.image}
                productData={productData}
              />
            )}
            keyExtractor={(item) => item.id}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            decelerationRate={"normal"}
            bounces={false}
          />
          <View
            style={{
              flexDirection: "row",
              gap: 3,
              marginVertical: 10,
              position: "absolute",
              bottom: 0,
              left: "50%",
              right: "50%",
              transform: [{ translateX: -35 }, { translateY: -2 }],
            }}
          >
            {data.map((_, index) => {
              return (
                <View
                  key={index}
                  style={{
                    backgroundColor:
                      currentIndex === index ? "#3f3f47" : "#F9F4EE",
                    height: 10,
                    width: currentIndex === index ? 30 : 10,
                    borderRadius: 5,
                  }}
                ></View>
              );
            })}
          </View>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 35,
            }}
          >
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              contentContainerStyle={{ gap: 25 }}
              data={circleProductData}
              renderItem={({ item }) => (
                <CircleItems
                  name={item.name}
                  circleImage={item.circleImage}
                  products={item.products}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 10,

              alignItems: "center",
            }}
          ></View>
          <View
            style={{
              gap: 4,
              flexDirection: "row",
              marginTop: 15,
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
          </View>
          <Text
            style={{
              fontFamily: "WorkSans",
              color: "gray",
            }}
          >
            Exclusives Collection
          </Text>
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
          <View
            style={{
              gap: 4,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontFamily: "WorkSans",
                textAlign: "center",
              }}
            >
              Shop Our Exclusives
            </Text>
            <Text
              style={{
                fontFamily: "WorkSans",
                textAlign: "center",
                fontSize: 15,
                color: "red",
              }}
            >
              View All
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "WorkSans",
              color: "gray",
            }}
          >
            22 Exclusives Products
          </Text>
          <View>
            <FlatList
              data={categories}
              showsHorizontalScrollIndicator={false}
              horizontal
              contentContainerStyle={{ gap: 10 }}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => setTab(item.name)}
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 30,
                    borderRadius: 20,
                    backgroundColor: tab === item.name ? "#3f3f47" : "#F9F4EE",
                    marginVertical: 10,
                  }}
                >
                  <Text
                    style={{
                      color: tab === item.name ? "white" : "black",
                      fontFamily: "WorkSans",
                    }}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
            />
            {tab === "Earring" && (
              <FlatList
                data={products.earring}
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={{ gap: 10 }}
                keyExtractor={(item) => item.id}
                pagingEnabled={true}
                renderItem={({ item }) => (
                  <HotItem
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    previousPrice={item.previousPrice}
                    currentPrice={item.currentPrice}
                    quantity={item.quantity}
                  />
                )}
              />
            )}
            {tab === "Rings" && (
              <FlatList
                data={products.ring}
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={{ gap: 10 }}
                keyExtractor={(item) => item.id}
                pagingEnabled={true}
                renderItem={({ item }) => (
                  <HotItem
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    previousPrice={item.previousPrice}
                    currentPrice={item.currentPrice}
                    quantity={item.quantity}
                  />
                )}
              />
            )}
            {tab === "Necklaces" && (
              <FlatList
                data={products.necklace}
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={{ gap: 10 }}
                keyExtractor={(item) => item.id}
                pagingEnabled={true}
                renderItem={({ item }) => (
                  <HotItem
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    previousPrice={item.previousPrice}
                    currentPrice={item.currentPrice}
                    quantity={item.quantity}
                  />
                )}
              />
            )}
          </View>
          <View
            style={{
              gap: 4,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontFamily: "WorkSans",
                textAlign: "center",
              }}
            >
              New Collection
            </Text>
            <Text
              style={{
                fontFamily: "WorkSans",
                textAlign: "center",
                fontSize: 15,
                color: "red",
              }}
            >
              View All
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "WorkSans",
              textAlign: "center",
              marginVertical: 10,
              color: "gray",
            }}
          >
            22 New Products
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {productData.slice(0, 4).map((item, index) => (
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
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
