import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import CartItems from "../components/CartItems";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";

const OrderSummary = () => {
  const cart = useSelector((store) => store.cart);
  const navigation = useNavigation();

  let totalItem = cart.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  cart.forEach((item) => {
    totalMRP += item.previousPrice * item.quantity;
    totalDiscount += (item.previousPrice - item.currentPrice) * item.quantity;
  });

  let finalPayment = totalMRP - totalDiscount;

  return (
    <>
      {cart.length === 0 ? (
        <View
          style={{
            flex: 1,
            backgroundColor: "#FFFFFF",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <MaterialIcons name="add-shopping-cart" size={100} color="black" />
          <Text style={{ fontSize: 40, fontFamily: "WorkSans" }}>
            Your cart is empty
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#F9F4EE",
              paddingVertical: 20,
              paddingHorizontal: 30,
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={{ fontFamily: "WorkSans" }}>Shop Now</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
          <View
            style={{
              backgroundColor: "#ffffff",
              height: 60,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 5,
            }}
          >
            <TouchableOpacity
              style={{ position: "absolute", left: 6 }}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text
              style={{ margin: "auto", fontSize: 20, fontFamily: "WorkSans" }}
            >
              Order Summary
            </Text>
          </View>
          <ScrollView
            style={{
              backgroundColor: "#ffffff",
              flex: 1,
              paddingHorizontal: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "baseline",
                justifyContent: "space-between",
                paddingHorizontal: 15,
                paddingVertical: 10,
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Ionicons name="checkmark-circle" size={24} color="#3f3f47" />
                <Text style={{ color: "#3f3f47", fontFamily: "WorkSans" }}>
                  Address
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  borderWidth: 0.7,
                  alignSelf: "center",
                  borderColor: "#3f3f47",
                }}
              ></View>
              <View style={{ alignItems: "center" }}>
                <Ionicons name="checkmark-circle" size={24} color="#3f3f47" />
                <Text style={{ color: "#3f3f47", fontFamily: "WorkSans" }}>
                  Order Summary
                </Text>
              </View>
              <View
                style={{ flex: 1, borderWidth: 0.7, alignSelf: "center" }}
              ></View>
              <View style={{ alignItems: "center" }}>
                <Ionicons
                  name="checkmark-circle-outline"
                  size={24}
                  color="black"
                />
                <Text style={{ fontFamily: "WorkSans" }}>Payment</Text>
              </View>
            </View>
            <View style={{ marginVertical: 20 }}>
              <Text style={{ fontSize: 20 }}>Order Information</Text>
            </View>
            {cart.map((item, index) => (
              <CartItems
                key={index}
                id={item.id}
                currentPrice={item.currentPrice}
                previousPrice={item.previousPrice}
                name={item.name}
                image={item.image}
              />
            ))}
            <View
              style={{
                padding: 10,
                backgroundColor: "#F9F4EE",
                borderRadius: 10,
                marginTop: 30,
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <Text style={{ fontSize: 20, fontFamily: "WorkSans" }}>
                  Subtotal
                </Text>
                <Text style={{ fontSize: 20, fontFamily: "WorkSans" }}>
                  ₹ {totalMRP}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "pink",
                    fontFamily: "WorkSans",
                  }}
                >
                  Discount
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: "pink",
                    fontFamily: "WorkSans",
                  }}
                >
                  - ₹ {totalDiscount}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 10,
                  borderBottomWidth: 0.9,
                  borderBottomColor: "black",
                  paddingBottom: 25,
                }}
              >
                <Text style={{ fontSize: 20, fontFamily: "WorkSans" }}>
                  Shipping Charge
                </Text>
                <Text style={{ fontSize: 20, fontFamily: "WorkSans" }}>
                  Free
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{ fontSize: 20, color: "red", fontFamily: "WorkSans" }}
                >
                  Total
                </Text>
                <Text
                  style={{ fontSize: 20, color: "red", fontFamily: "WorkSans" }}
                >
                  ₹ {finalPayment}
                </Text>
              </View>
            </View>
          </ScrollView>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 20,
              borderRadius: 50,
              backgroundColor: "#3f3f47",
              marginVertical: 20,
              marginHorizontal: 10,
            }}
            onPress={() => navigation.navigate("Payment")}
          >
            <Text
              style={{ color: "white", fontFamily: "WorkSans" }}
            >{`Proceed To Checkout (${totalItem})`}</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({});
