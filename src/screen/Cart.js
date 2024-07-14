import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CartItems from "../components/CartItems";

const Cart = () => {
  const data = [
    {
      catagory: "Shoes",
      name: "Addidas Sport Shoes",
      price: "₹ 3000",
      image: require("../../assets/images/home products/addidas shoes.jpg"),
    },
    {
      catagory: "Shoes",
      name: "Nike Air Jodan 1",
      price: "₹ 10000",
      image: require("../../assets/images/home products/nike air jodan 1.jpg"),
    },
    {
      catagory: "Music",
      name: "Guitar",
      price: "₹ 4000",
      image: require("../../assets/images/home products/guitar.jpg"),
    },
    {
      catagory: "Mobile cases",
      name: "Iphone Case",
      price: "₹ 789",
      image: require("../../assets/images/home products/mobile cases.jpg"),
    },
    {
      catagory: "Phones",
      name: "Samsung S22",
      price: "₹ 60000",
      image: require("../../assets/images/home products/samsung s 22.jpg"),
    },
  ];
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#09090B" }}>
      <Text style={{ textAlign: "center", color: "white", marginVertical: 15 }}>
        Cart
      </Text>
      {data.map((item, index) => (
        <CartItems
          key={index}
          catagory={item.catagory}
          name={item.name}
          price={item.price}
          image={item.image}
        />
      ))}
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({});
