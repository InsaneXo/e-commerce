import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import CartItems from "../components/CartItems";
import { useNavigation } from "@react-navigation/native";

const OrderSummary = () => {
  const navigation = useNavigation();

  return (
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
        <TouchableOpacity style={{ position: "absolute", left: 6 }}onPress={()=> navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ margin: "auto", fontSize: 20 }}>Order Summary</Text>
      </View>
      <ScrollView
        style={{ backgroundColor: "#ffffff", flex: 1, paddingHorizontal: 10 }}
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
            <Text style={{ color: "#3f3f47" }}>Address</Text>
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
            <Text style={{ color: "#3f3f47" }}>Order Summary</Text>
          </View>
          <View
            style={{ flex: 1, borderWidth: 0.7, alignSelf: "center" }}
          ></View>
          <View style={{ alignItems: "center" }}>
            <Ionicons name="checkmark-circle-outline" size={24} color="black" />
            <Text>Payment</Text>
          </View>
        </View>
        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 20 }}>Order Information</Text>
        </View>
        <CartItems
          name={"Necklace"}
          currentPrice={10000}
          previousPrice={100000}
        />
        <CartItems
          name={"Necklace"}
          currentPrice={10000}
          previousPrice={100000}
        />
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
            <Text style={{ fontSize: 20 }}>Subtotal</Text>
            <Text style={{ fontSize: 20 }}>₹ 1000</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 20, color: "pink" }}>Discount</Text>
            <Text style={{ fontSize: 20, color: "pink" }}>- ₹ 100</Text>
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
            <Text style={{ fontSize: 20 }}>Shipping Charge</Text>
            <Text style={{ fontSize: 20 }}>Free</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 20, color: "red" }}>Total</Text>
            <Text style={{ fontSize: 20, color: "red" }}>₹ 1000</Text>
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
        <Text style={{ color: "white" }}>Proceed To Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({});
