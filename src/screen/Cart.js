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

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const navigation = useNavigation();

  let totalItem = cart.length;
  let totalMRP = 0;
  let totalDiscount = 0;


  cart.forEach((item,index) => {
    totalMRP += item.previousPrice * item.quantity
    totalDiscount += (item.previousPrice - item.currentPrice) * item.quantity 

    console.log(item.previousPrice - item.currentPrice);
  });

  let finalPayment = totalMRP - totalDiscount;

  console.log(totalDiscount);

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
          <Text style={{ fontSize: 40 }}>Your cart is empty</Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#F9F4EE",
              paddingVertical: 20,
              paddingHorizontal: 30,
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate("Home")}
          >
            <Text>Shop Now</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView
          style={{ flex: 1, backgroundColor: "#FFFFFF", paddingHorizontal: 10 }}
        >
          <Text
            style={{ textAlign: "center", fontSize: 20, marginVertical: 15 }}
          >
            Cart
          </Text>
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
            <Text style={{ fontSize: 20, marginBottom: 10 }}>
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
                <Text style={{ color: "white" }}>Apply</Text>
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
              <Text style={{ fontSize: 20 }}>Subtotal</Text>
              <Text style={{ fontSize: 20 }}>₹ {totalMRP}</Text>
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
              <Text style={{ fontSize: 20, color: "pink" }}>
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
              <Text style={{ fontSize: 20, color: "red" }}>
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
              onPress={()=> navigation.navigate('Address')}
            >
              <Text
                style={{ color: "white" }}
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
