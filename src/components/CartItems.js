import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState, useRef } from "react";

import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { cartSliceAction } from "../redux/features";
import { debounce } from "lodash";

const CartItems = ({ id, name, previousPrice, currentPrice, image }) => {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const index = cart.findIndex((item) => item.id === id);
  const [quantity, setQuantity] = useState(cart[index]?.quantity || 1);

  const handleDeleteFromCart = () => {
    dispatch(cartSliceAction.deleteFromCart(id));
  };

  // This function for debouce if user tap multiple - or +

  const updateQuantityHandler = useRef(
    debounce((quantity) => {
      const payload = { id, quantity };
      dispatch(cartSliceAction.updateFromCart(payload));
    }, 500)
  ).current;

  useEffect(() => {
    updateQuantityHandler(quantity);
    return () => {
      updateQuantityHandler.cancel();
    };
  }, [quantity]);

  useEffect(() => {
    if (cart[index] && cart[index].quantity !== quantity) {
      setQuantity(cart[index].quantity);
    }
  }, [cart]);

  console.log(cart);
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
          <Text style={{ fontSize: 20, fontFamily: "WorkSans" }}>{name}</Text>
          <Text
            style={{
              color: "pink",
              fontSize: 20,
              textDecorationLine: "line-through",
              fontFamily: "WorkSans",
            }}
          >
            ₹ {previousPrice}
          </Text>
          <Text style={{ color: "red", fontSize: 20, fontFamily: "WorkSans" }}>
            ₹ {currentPrice}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: 90,
              height: 45,
              borderRadius: 10,
              alignItems: "center",
              paddingHorizontal: 10,
              backgroundColor: "#3f3f47",
            }}
          >
            {quantity === 1 ? (
              <Text
                style={{ color: "white", fontSize: 20,  }}
                onPress={handleDeleteFromCart}
              >
                -
              </Text>
            ) : (
              <Text
                style={{ color: "white", fontSize: 20 , fontFamily: "WorkSans" }}
                onPress={() => setQuantity((prevVal) => prevVal - 1)}
              >
                -
              </Text>
            )}
            <Text style={{ color: "white", fontSize: 20 }}>
              {quantity < 1 ? "1" : quantity}
            </Text>
            <Text
              style={{ color: "white", fontSize: 20 }}
              onPress={() => setQuantity((prevVal) => prevVal + 1)}
            >
              +
            </Text>
          </View>
          <TouchableOpacity onPress={handleDeleteFromCart}>
            <AntDesign name="delete" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItems;

const styles = StyleSheet.create({});
