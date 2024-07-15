import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../redux/addToCartSlice";
import { wishListAction } from "../redux/addToWishlist";

const HotItem = ({ id, name, image, previousPrice, currentPrice }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.addToCart);
  const wishlistItems = useSelector((state) => state.wishlist);

  const isInCart = cartItems.some((item) => item.id === id);
  const isInWishList = wishlistItems.some((item) => item.id === id);

  const addToCartHandler = () => {
    const payload = {
      id,
      name,
      image,
      previousPrice,
      currentPrice,
    };
    dispatch(addToCartAction.addToCart(payload));
  };
  const deleteFromCart = () => {
    dispatch(addToCartAction.deleteFromCart(id));
  };

  const addToWishlistHandler = () => {
    const payload = {
      id,
      name,
      image,
      previousPrice,
      currentPrice,
    };
    dispatch(wishListAction.addToWishlist(payload));
  };

  const deleteFromWishlist = () => {
    dispatch(wishListAction.deleteFromWishlist(id));
  };

  return (
    <View style={{ width: 183 }}>
      <View
        style={{
          height: 170,
          width: 183,
          backgroundColor: "#BEF264",
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <Image source={image} style={{ width: "100%", height: "100%" }} />
        {isInWishList ? (
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              backgroundColor: "#F9F4EE",
              position: "absolute",
              right: 8,
              top: 6,
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={deleteFromWishlist}
          >
            <AntDesign name="heart" size={24} color="red" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              backgroundColor: "#F9F4EE",
              position: "absolute",
              right: 8,
              top: 6,
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={addToWishlistHandler}
          >
            <AntDesign name="hearto" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>
      <View>
        <Text style={{ fontSize: 17 }} numberOfLines={1}>
          {name}
        </Text>
        <Text style={{ textDecorationLine: "line-through", color: "pink" }}>
          {previousPrice}
        </Text>
        <Text style={{ color: "red" }}>{currentPrice}</Text>
        {isInCart ? (
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "red",
              height: 40,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 10,
            }}
            onPress={deleteFromCart}
          >
            <Text style={{ color: "white" }}>Remove From Cart</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "#F9F4EE",
              height: 40,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 10,
            }}
            onPress={addToCartHandler}
          >
            <Text>Add to Cart</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default HotItem;

const styles = StyleSheet.create({});
