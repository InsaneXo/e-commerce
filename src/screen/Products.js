import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import HotItem from "../components/HotItem";

const Products = (props) => {
  const wishList = useSelector((store) => store.wishlist);
  const cart = useSelector((store)=> store.cart)
  const navigation = useNavigation();
  const { name, products } = props.route.params;

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
        <View style={{ flexDirection: "row", gap: 5 }}>
          <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontFamily: "WorkSans",
            }}
          >
            {name} ({products.length})
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <AntDesign name="search1" size={24} color="black" />
          <TouchableOpacity onPress={() => navigation.navigate("cart")}>
            <View style={{ position: "relative" }}>
              {cart.length === 0 ? null : (
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
                  <Text style={{ color: "white" }}>{cart.length}</Text>
                </View>
              )}
              <AntDesign name="shoppingcart" size={24} color="black" />
            </View>
          </TouchableOpacity>
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
              <AntDesign name="hearto" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      

      <ScrollView
        style={{ flex: 1, backgroundColor: "#FFFFFF", paddingHorizontal: 10 }}
      >
        <View style={{ marginVertical: 10 }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "WorkSans",
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontFamily: "WorkSans",
              color: "gray",
            }}
          >
            {products.length} products found
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap:5
          }}
        >
          {products.map((item, index) => (
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
      </ScrollView>
    </>
  );
};

export default Products;

const styles = StyleSheet.create({});
