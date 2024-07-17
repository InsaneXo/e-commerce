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

const Wishlist = () => {
  const wishlist = useSelector((store) => store.wishlist);
  const navigation = useNavigation();
  return (
    <>
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
          <Text
            style={{ textAlign: "center", fontSize: 20, marginVertical: 15 }}
          >
            Wishlist
          </Text>
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
