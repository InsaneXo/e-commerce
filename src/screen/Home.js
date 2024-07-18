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
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Card from "../components/Card";
import HotItem from "../components/HotItem";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import CircleItems from "../components/CircleItems";

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

const circleProductData = [
  {
    id: "1",
    name: "Ear Ring",
    image: require("../../assets/images/item002.jpg"),
  },
  {
    id: "2",
    name: "Necklace",
    image: require("../../assets/images/item004.jpg"),
  },
  {
    id: "3",
    name: "Ring",
    image: require("../../assets/images/item001.jpg"),
  },
  {
    id: "4",
    name: "Chain",
    image: require("../../assets/images/white-gold-chain.jpeg"),
  },
  {
    id: "5",
    name: "Bracelet",
    image: require("../../assets/images/bracelet.jpg"),
  },
];

const screenWidth = Dimensions.get("window").width;

const renderDotIndicator = () => {
  return data.map((dot, index) => {
    return (
      <View
        key={index}
        style={{
          backgroundColor: "red",
          height: 10,
          width: 10,
          borderRadius: 5,
        }}
      ></View>
    );
  });
};

const handleScroll = (event) => {
  // Get the scroll Position
  const scrollPosition = Math.floor(event.nativeEvent.contentOffset.x);
  console.log({ scrollPosition });

  // Get the index of current active item
  const index = Math.floor(scrollPosition / screenWidth);
  console.log({ index });
};

const Home = () => {
  const wishList = useSelector((store) => store.wishlist);
  const navigation = useNavigation();

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 25,
          paddingHorizontal: 10,
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          borderBottomWidth: 0.2,
          borderColor: "gray",
        }}
      >
        <Text
          style={{ textAlign: "center", fontSize: 20, fontFamily: "WorkSans" }}
        >
          Sundaram
        </Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <MaterialIcons name="support-agent" size={24} color="black" />
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
        <View
          style={{
            flexDirection: "row",
            marginVertical: 4,

            paddingVertical: 10,
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
                price={item.price}
                image={item.image}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            marginVertical: 10,
            alignItems: "center",
          }}
        ></View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={data}
          renderItem={({ item }) => (
            <Card
              name={item.name}
              price={item.price}
              image={item.image}
              screenWidth={screenWidth}
            />
          )}
          keyExtractor={(item) => item.id}
          pagingEnabled={true}
          onScroll={handleScroll}
        />
        {/* <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
            marginVertical: 10,
          }}
        >
          {renderDotIndicator()}
        </View> */}

        <View style={{ gap: 4, marginBottom: 20 }}>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "WorkSans",
              textAlign: "center",
            }}
          >
            Top Collection
          </Text>
          <Text style={{ fontFamily: "WorkSans", textAlign: "center" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
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
            style={{
              fontSize: 30,
              fontFamily: "WorkSans",
              textAlign: "center",
            }}
          >
            New Collection
          </Text>
          <Text style={{ fontFamily: "WorkSans", textAlign: "center" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
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
    </>
  );
};

export default Home;
