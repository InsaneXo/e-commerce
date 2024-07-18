import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import WishlistItem from "../components/WishlistItem";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Wishlist = () => {
  const wishlist = useSelector((store) => store.wishlist);
  const navigation = useNavigation();
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
          Wishlist
        </Text>
      </View>
      {wishlist.length === 0 ? (
        <View
          style={{
            flex: 1,
            backgroundColor: "#FFFFFF",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <AntDesign name="heart" size={100} color="red" />
          <Text style={{ fontSize: 40, fontFamily: "WorkSans" }}>
            Your wishlist is empty
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
            <Text style={{ fontFamily: "WorkSans" }}>Add Now</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView
          style={{ flex: 1, backgroundColor: "#FFFFFF", paddingHorizontal: 10 }}
        >
          {wishlist.map((item, index) => (
            <WishlistItem
              key={index}
              id={item.id}
              currentPrice={item.currentPrice}
              previousPrice={item.previousPrice}
              name={item.name}
              image={item.image}
              quantity={item.quantity}
            />
          ))}
        </ScrollView>
      )}
    </>
  );
};

export default Wishlist;

const styles = StyleSheet.create({});
