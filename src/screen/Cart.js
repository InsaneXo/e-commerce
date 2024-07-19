import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import CartItems from "../components/CartItems";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Cart = () => {
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
        <Text style={{ margin: "auto", fontSize: 20, fontFamily: "WorkSans" }}>
          Cart
        </Text>
      </View>
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
        <ScrollView
          style={{ flex: 1, backgroundColor: "#FFFFFF", paddingHorizontal: 10 }}
        >
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
            <Text
              style={{ fontSize: 20, marginBottom: 10, fontFamily: "WorkSans" }}
            >
              Your Promo Code
            </Text>
            <View style={{ flexDirection: "row", gap: 10, marginBottom: 10 }}>
              <TextInput
                placeholder="Enter Code"
                style={{
                  backgroundColor: "#ffffff",
                  padding: 10,
                  borderRadius: 10,
                  flex: 1,
                  fontFamily: "WorkSans",
                }}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: "#3f3f47",
                  paddingVertical: 10,
                  paddingHorizontal: 26,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white", fontFamily: "WorkSans" }}>
                  Apply
                </Text>
              </TouchableOpacity>
            </View>
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
                style={{ fontSize: 20, color: "pink", fontFamily: "WorkSans" }}
              >
                Discount
              </Text>
              <Text
                style={{ fontSize: 20, color: "pink", fontFamily: "WorkSans" }}
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
              <Text style={{ fontSize: 20, fontFamily: "WorkSans" }}>Free</Text>
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
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 20,
                borderRadius: 50,
                backgroundColor: "#3f3f47",
              }}
              onPress={() => navigation.navigate("Address")}
            >
              <Text
                style={{ color: "white", fontFamily: "WorkSans" }}
              >{`Checkout (${totalItem})`}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({});
