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

const Payment = () => {
  const [selectedValue, setSelectedValue] = useState("Cash on Delivery");
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
      <TouchableOpacity
        style={{
          backgroundColor: "#ffffff",
          height: 60,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 5,
        }}
        onPress={() => navigation.goBack()}
      >
        <View style={{ position: "absolute", left: 6 }}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </View>
        <Text style={{ margin: "auto", fontSize: 20 }}>Payment</Text>
      </TouchableOpacity>
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
            style={{
              flex: 1,
              borderWidth: 0.7,
              alignSelf: "center",
              borderColor: "#3f3f47",
            }}
          ></View>
          <View style={{ alignItems: "center" }}>
            <Ionicons name="checkmark-circle" size={24} color="#3f3f47" />
            <Text style={{ color: "#3f3f47" }}>Payment</Text>
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
        <View style={{ marginVertical: 6 }}>
          <Text style={{ fontSize: 20 }}>Choose Payment Method</Text>
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
            <Text style={{ fontSize: 20 }}>Cash on Delivery</Text>
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
            <Text style={{ fontSize: 20 }}>Card Payment</Text>
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
              }}
            />
            <TextInput
              placeholder="Card Number (Required)*"
              style={{
                backgroundColor: "#F9F4EE",
                padding: 15,
                borderRadius: 10,
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
                }}
              />
              <TextInput
                placeholder="CVV (Required)*"
                style={{
                  backgroundColor: "#F9F4EE",
                  padding: 15,
                  borderRadius: 10,
                  flex: 1,
                }}
              />
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
            >
              <Ionicons name="checkmark-circle" size={24} color="#3f3f47" />
              <Text>Save this card for future purchases</Text>
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
        <Text style={{ color: "white" }}>Place Your Order</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({});
