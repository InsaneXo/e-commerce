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
import Layout1 from "../layout/Layout1";

const Catagory = () => {
  const categoriesItems = [
    {
      title: "Rings",
      subTitle: "Exclusives Collection",
      image: require("../../assets/images/ringBg.jpg"),
      products: [
        {
          id: "1",
          name: "SPARKLE forever Iconic/A Class Act Diamond Ring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/ring.jpg"),
          quantity: 1,
        },
        {
          id: "2",
          name: "SPARKLE forever Iconic/A Class Act Diamond Ring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/ring.jpg"),
          quantity: 1,
        },
        {
          id: "3",
          name: "SPARKLE forever Iconic/A Class Act Diamond Ring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/ring.jpg"),
          quantity: 1,
        },
        {
          id: "4",
          name: "SPARKLE forever Iconic/A Class Act Diamond Ring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/ring.jpg"),
          quantity: 1,
        },
        {
          id: "5",
          name: "SPARKLE forever Iconic/A Class Act Diamond Ring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/ring.jpg"),
          quantity: 1,
        },
        {
          id: "5",
          name: "SPARKLE forever Iconic/A Class Act Diamond Ring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/ring.jpg"),
          quantity: 1,
        },
        {
          id: "6",
          name: "SPARKLE forever Iconic/A Class Act Diamond Ring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/ring.jpg"),
          quantity: 1,
        },
        {
          id: "7",
          name: "SPARKLE forever Iconic/A Class Act Diamond Ring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/ring.jpg"),
          quantity: 1,
        },
      ],
    },
    {
      title: "Earring",
      subTitle: "Exclusives Collection",
      image: require("../../assets/images/earringBg.jpg"),
      products: [
        {
          id: "1",
          name: "SPARKLE forever Iconic/A Class Act Earring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/earring.jpg"),
          quantity: 1,
        },
        {
          id: "2",
          name: "SPARKLE forever Iconic/A Class Act Earring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/earring.jpg"),
          quantity: 1,
        },
        {
          id: Date.now(),
          name: "SPARKLE forever Iconic/A Class Act Earring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/earring.jpg"),
          quantity: 1,
        },
        {
          id: "3",
          name: "SPARKLE forever Iconic/A Class Act Earring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/earring.jpg"),
          quantity: 1,
        },
        {
          id: "4",
          name: "SPARKLE forever Iconic/A Class Act Earring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/earring.jpg"),
          quantity: 1,
        },
        {
          id: "5",
          name: "SPARKLE forever Iconic/A Class Act Earring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/earring.jpg"),
          quantity: 1,
        },
        {
          id: "6",
          name: "SPARKLE forever Iconic/A Class Act Earring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/earring.jpg"),
          quantity: 1,
        },
        {
          id: "7",
          name: "SPARKLE forever Iconic/A Class Act Earring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/earring.jpg"),
          quantity: 1,
        },
      ],
    },
    {
      title: "Necklace Set",
      subTitle: "Exclusives Collection",
      image: require("../../assets/images/NecklaceSetBg.jpg"),
      products: [
        {
          id: "1",
          name: "ZENEME Rhodium Plated Contemporary",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Necklace Set 1.jpg"),
          quantity: 1,
        },
        {
          id: "2",
          name: "ZENEME Rhodium Plated Contemporary",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Necklace Set 2.jpg"),
          quantity: 1,
        },
        {
          id: "3",
          name: "ZENEME Rhodium Plated Contemporary",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Necklace Set 3.jpg"),
          quantity: 1,
        },
        {
          id: "4",
          name: "ZENEME Rhodium Plated Contemporary",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Necklace Set 4.jpg"),
          quantity: 1,
        },
        {
          id: "5",
          name: "ZENEME Rhodium Plated Contemporary",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Necklace Set 5.jpg"),
          quantity: 1,
        },
        {
          id: "6",
          name: "ZENEME Rhodium Plated Contemporary",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Necklace Set 6.jpg"),
          quantity: 1,
        },
        {
          id: "7",
          name: "ZENEME Rhodium Plated Contemporary",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Necklace Set 7.jpg"),
          quantity: 1,
        },
      ],
    },
    {
      title: "Tika & Mathapatti",
      subTitle: "Exclusives Collection",
      image: require("../../assets/images/Tika & MathapattiBG.jpg"),
      products: [
        {
          id: Date.now(),
          name: "SPARKLE forever Iconic/A Class Act Tika & Mathapatti",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Tika & Mathapatti.jpg"),
          quantity: 1,
        },
        {
          id: Date.now(),
          name: "SPARKLE forever Iconic/A Class Act Tika & Mathapatti",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Tika & Mathapatti.jpg"),
          quantity: 1,
        },
        {
          id: Date.now(),
          name: "SPARKLE forever Iconic/A Class Act Tika & Mathapatti",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Tika & Mathapatti.jpg"),
          quantity: 1,
        },
        {
          id: Date.now(),
          name: "SPARKLE forever Iconic/A Class Act Tika & Mathapatti",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Tika & Mathapatti.jpg"),
          quantity: 1,
        },
        {
          id: Date.now(),
          name: "SPARKLE forever Iconic/A Class Act Tika & Mathapatti",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Tika & Mathapatti.jpg"),
          quantity: 1,
        },
        {
          id: Date.now(),
          name: "SPARKLE forever Iconic/A Class Act Tika & Mathapatti",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Tika & Mathapatti.jpg"),
          quantity: 1,
        },
        {
          id: Date.now(),
          name: "SPARKLE forever Iconic/A Class Act Tika & Mathapatti",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Tika & Mathapatti.jpg"),
          quantity: 1,
        },
        {
          id: Date.now(),
          name: "SPARKLE forever Iconic/A Class Act Tika & Mathapatti",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Tika & Mathapatti.jpg"),
          quantity: 1,
        },
      ],
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
              fontFamily: "WorkSans",
            }}
          />
          <View style={{ position: "absolute", right: 10 }}>
            <AntDesign name="search1" size={24} color="black" />
          </View>
        </View>
      </View>
      <Layout1
        data={categoriesItems}
        layoutTitle={"Shop By Categories"}
        layoutSubTitle={"Exclusives Categories"}
      />
    </ScrollView>
  );
};

export default Catagory;

const styles = StyleSheet.create({});
