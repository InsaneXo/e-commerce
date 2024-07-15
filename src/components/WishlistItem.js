import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { wishListAction } from "../redux/addToWishlist";
import { addToCartAction } from "../redux/addToCartSlice";

const WishlistItem = ({ id, name, previousPrice, currentPrice, image }) => {
  const cart = useSelector((store) => store.addToCart);
  const isIsCart = cart.some((item) => item.id === id);

  const dispatch = useDispatch();

  const addToCart = () => {
    const payload = {
      id,
      name,
      previousPrice,
      currentPrice,
      image,
    };
    dispatch(addToCartAction.addToCart(payload));
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
              <Text style={{ }}>Added</Text>
            </TouchableOpacity>
          ) : (
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
                backgroundColor: "#3f3f47",
              }}
              onPress={addToCart}
            >
              <Text style={{ color: "white" }}>Add to cart</Text>
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
