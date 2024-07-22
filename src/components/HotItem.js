import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { cartSliceAction, wishListAction } from "../redux/features";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HotItem = ({
  id,
  name,
  image,
  previousPrice,
  currentPrice,
  quantity,
}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const wishlistItems = useSelector((state) => state.wishlist);
  const navigation = useNavigation();

  // Search in the store and check id. If present return true otherwise false
  const isInCart = cartItems.some((item) => item.id === id);
  const isInWishList = wishlistItems.some((item) => item.id === id);

  const payload = {
    id: id,
    name: name,
    image: image,
    previousPrice: previousPrice,
    currentPrice: currentPrice,
    quantity,
  };

  const addToCartHandler = () => {
    const payload = {
      id,
      name,
      image,
      previousPrice,
      currentPrice,
      quantity,
    };
    dispatch(cartSliceAction.addToCart(payload));
  };

  const deleteFromCart = () => {
    dispatch(cartSliceAction.deleteFromCart(id));
  };

  const addToWishlistHandler = () => {
    const payload = {
      id,
      name,
      image,
      previousPrice,
      currentPrice,
      quantity,
    };
    dispatch(wishListAction.addToWishlist(payload));
  };

  const deleteFromWishlist = () => {
    dispatch(wishListAction.deleteFromWishlist(id));
  };

  return (
    <View style={{width: 188, borderRadius: 6, padding:6,  }}>
      <TouchableOpacity
        style={{
          height: 200,
          backgroundColor: "#BEF264",
          borderRadius: 6,
          overflow: "hidden",
        }}
        onPress={() => navigation.navigate("ProductDetails", payload)}
      >
        <Image source={image} style={{ width: "100%", height: "100%" }} />
        {isInWishList ? (
          <TouchableOpacity
            style={{
              height: 30,
              width: 30,
              position: "absolute",
              right: 8,
              top: 6,
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={deleteFromWishlist}
          >
            <AntDesign name="heart" size={18} color="red" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              height: 30,
              width: 30,
              position: "absolute",
              right: 8,
              top: 6,
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={addToWishlistHandler}
          >
            <AntDesign name="hearto" size={18} color="black" />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
      <View style={{ paddingVertical: 10 }}>
        <Text
          style={{ fontSize: 17, fontFamily: "WorkSans", textAlign: "center" }}
          numberOfLines={1}
        >
          {name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Text
            style={{
              color: "red",
              fontSize: 23,
              fontFamily: "WorkSans",
              textAlign: "center",
            }}
          >
            ₹ {currentPrice}
          </Text>
          <Text
            style={{
              textDecorationLine: "line-through",
              color: "pink",
              fontSize: 17,
              fontFamily: "WorkSans",
              textAlign: "center",
            }}
          >
            {previousPrice}
          </Text>
        </View>

        {isInCart ? (
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
            }}
            onPress={deleteFromCart}
          >
            <MaterialIcons name="remove-shopping-cart" size={24} color="red" />
            <Text style={{ color: "red", fontFamily: "WorkSans" }}>
              Remove From Cart
            </Text>
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
            }}
            onPress={addToCartHandler}
          >
            <MaterialIcons name="add-shopping-cart" size={24} color="black" />
            <Text style={{ fontFamily: "WorkSans" }}>Add to Cart</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default HotItem;

const styles = StyleSheet.create({});
