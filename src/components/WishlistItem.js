import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { cartSliceAction, wishListAction } from "../redux/features";
import { MaterialIcons } from "@expo/vector-icons";

const WishlistItem = ({
  id,
  name,
  previousPrice,
  currentPrice,
  image,
  quantity,
}) => {
  const cart = useSelector((store) => store.cart);

  const index = cart.findIndex((item) => item.id === id);

  // Search in the store and check id. If present return true otherwise false
  const isIsCart = cart.some((item) => item.id === id);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    const payload = {
      id,
      name,
      previousPrice,
      currentPrice,
      image,
      quantity,
    };
    dispatch(cartSliceAction.addToCart(payload));
  };

  const deleteFromWislist = () => {
    dispatch(wishListAction.deleteFromWishlist(id));
  };
  return (
    <View
      style={{
        height: 180,
        backgroundColor: "#F9F4EE",
        borderRadius: 17,
        flexDirection: "row",
        gap: 10,
        padding: 15,
        marginBottom: 10,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          width: 150,
          overflow: "hidden",
          borderRadius: 10,
        }}
      >
        <Image
          source={image}
          style={{ objectFit: "fill", width: "100%", height: "100%" }}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "space-around" }}>
        <View>
          <Text style={{ fontSize: 20 }}>{name}</Text>
          <Text
            style={{
              color: "pink",
              fontSize: 20,
              textDecorationLine: "line-through",
            }}
          >
            {previousPrice}
          </Text>
          <Text style={{ color: "red", fontSize: 20 }}>{currentPrice}</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
          }}
        >
          {isIsCart ? (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                flex: 1,
                height: 45,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 10,
                backgroundColor: "#DDDDDD",
              }}
            >
              <Text>Added</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: "row",
                paddingVertical: 10,
                gap: 3,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 10,
                backgroundColor: "#3f3f47",
              }}
              onPress={addToCartHandler}
            >
              <MaterialIcons name="add-shopping-cart" size={24} color="white" />
              <Text style={{ color: "white" }}>Add to Cart</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={deleteFromWislist}>
            <AntDesign name="delete" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default WishlistItem;

const styles = StyleSheet.create({});
