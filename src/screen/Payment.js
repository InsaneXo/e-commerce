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
import { RadioButton } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const Payment = () => {
  const [selectedValue, setSelectedValue] = useState("Cash on Delivery");
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
        <Text style={{ margin: "auto", fontSize: 20, fontFamily: "WorkSans" }}>Payment</Text>
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
            <Text style={{ color: "#3f3f47", fontFamily: "WorkSans" }}>Address</Text>
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
            <Text style={{ color: "#3f3f47", fontFamily: "WorkSans" }}>Order Summary</Text>
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
            <Text style={{ color: "#3f3f47", fontFamily: "WorkSans" }}>Payment</Text>
          </View>
        </View>
        <View
          style={{
            padding: 10,
            backgroundColor: "#F9F4EE",
            borderRadius: 10,
            marginTop: 6,
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
            <Text style={{ fontSize: 20, fontFamily: "WorkSans" }}>Subtotal</Text>
            <Text style={{ fontSize: 20, fontFamily: "WorkSans" }}>₹ {totalMRP}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 20, color: "pink", fontFamily: "WorkSans" }}>Discount</Text>
            <Text style={{ fontSize: 20, color: "pink", fontFamily: "WorkSans" }}>
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
            <Text style={{ fontSize: 20, fontFamily: "WorkSans" }}>Shipping Charge</Text>
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
            <Text style={{ fontSize: 20, color: "red", fontFamily: "WorkSans" }}>Total</Text>
            <Text style={{ fontSize: 20, color: "red", fontFamily: "WorkSans" }}>₹ {finalPayment}</Text>
          </View>
        </View>
        <View style={{ marginVertical: 6 }}>
          <Text style={{ fontSize: 20, fontFamily: "WorkSans" }}>Shipping Details</Text>
        </View>
        <View
          style={{
            padding: 10,
            backgroundColor: "#F9F4EE",
            borderRadius: 10,
            marginTop: 6,
            marginBottom: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 15, fontFamily: "WorkSans" }}>Name :</Text>
            <Text style={{ fontSize: 15, color: "gray", fontFamily: "WorkSans" }}>Bipin Singh</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 15,fontFamily: "WorkSans" }}>Phone No :</Text>
            <Text style={{ fontSize: 15,fontFamily: "WorkSans", color: "gray" }}>1234567890</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 15, fontFamily: "WorkSans" }}>Shipping to :</Text>
            <Text style={{ fontSize: 15, color: "gray", fontFamily: "WorkSans" }} numberOfLines={1}>
              Sec 49, GB Nagar Noida
            </Text>
          </View>
          <View
            style={{
              gap: 10,
              marginBottom: 10,
              borderTopWidth: 0.6,
              paddingTop: 10,
            }}
          >
            <Text style={{ fontSize: 15, fontFamily: "WorkSans" }}>Total Items to be delivered</Text>
            {cart.map((item, index) => (
              <View key={index}>
                <View style={{ flexDirection: "row", gap: 3 }}>
                  <Text style={{fontFamily: "WorkSans"}}>Item Name :</Text>
                  <Text style={{ fontSize: 15, color: "gray", fontFamily: "WorkSans" }}>
                    {item.name}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", gap: 3 }}>
                  <Text style={{fontFamily: "WorkSans"}}>Price :</Text>
                  <Text style={{ fontSize: 15, color: "gray", fontFamily: "WorkSans" }}>₹ {item.currentPrice}</Text>
                </View>
                <View style={{ flexDirection: "row", gap: 3 }}>
                  <Text style={{fontFamily: "WorkSans"}}>Quantity :</Text>
                  <Text style={{ fontSize: 15, color: "gray", fontFamily: "WorkSans" }}>{item.quantity}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View style={{ marginVertical: 6 }}>
          <Text style={{ fontSize: 20, fontFamily: "WorkSans" }}>Choose Payment Method</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <RadioButton.Android
              value="Cash on Delivery"
              status={
                selectedValue === "Cash on Delivery" ? "checked" : "unchecked"
              }
              onPress={() => setSelectedValue("Cash on Delivery")}
              color="#3f3f47"
            />
            <Text style={{ fontSize: 20, fontFamily: "WorkSans" }}>Cash on Delivery</Text>
          </View>
          <MaterialCommunityIcons
            name="cash-multiple"
            size={24}
            color="#3f3f47"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton.Android
              value="Card Payment"
              status={
                selectedValue === "Card Payment" ? "checked" : "unchecked"
              }
              onPress={() => setSelectedValue("Card Payment")}
              color="#3f3f47"
            />
            <Text style={{ fontSize: 20, fontFamily: "WorkSans" }}>Card Payment</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 2 }}>
            <FontAwesome name="cc-visa" size={24} color="#3f3f47" />
            <FontAwesome name="cc-mastercard" size={24} color="#3f3f47" />
            <FontAwesome name="cc-paypal" size={24} color="#3f3f47" />
          </View>
        </View>
        {selectedValue === "Card Payment" && (
          <View style={{ gap: 10 }}>
            <TextInput
              placeholder="Name on card (Required)*"
              style={{
                backgroundColor: "#F9F4EE",
                padding: 15,
                borderRadius: 10,
                fontFamily: "WorkSans"
              }}
            />
            <TextInput
              placeholder="Card Number (Required)*"
              style={{
                backgroundColor: "#F9F4EE",
                padding: 15,
                borderRadius: 10,
                fontFamily: "WorkSans"
              }}
            />
            <View style={{ flexDirection: "row", gap: 10 }}>
              <TextInput
                placeholder="Expire Date (Required)*"
                style={{
                  backgroundColor: "#F9F4EE",
                  padding: 15,
                  borderRadius: 10,
                  flex: 1,
                  fontFamily: "WorkSans"
                }}
              />
              <TextInput
                placeholder="CVV (Required)*"
                style={{
                  backgroundColor: "#F9F4EE",
                  padding: 15,
                  borderRadius: 10,
                  flex: 1,
                  fontFamily: "WorkSans"
                }}
              />
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
            >
              <Ionicons name="checkmark-circle" size={24} color="#3f3f47" />
              <Text style={{fontFamily: "WorkSans"}}>Save this card for future purchases</Text>
            </View>
          </View>
        )}
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
      >
        <Text
          style={{ color: "white", fontFamily: "WorkSans" }}
        >{`Place Your Order (${totalItem})`}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({});
