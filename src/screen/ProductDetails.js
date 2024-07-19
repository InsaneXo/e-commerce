import {
  DevSettings,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import HotItem from "../components/HotItem";
import { cartSliceAction, wishListAction } from "../redux/features";

const productData = [
  {
    id: "1",
    name: "Elegant jhumka White & Gray",
    previousPrice: 1000,
    currentPrice: 799,
    image: require("../../assets/images/8.jpg"),
    quantity: 1,
  },
  {
    id: "2",
    name: "Emrald CZ Necklace Set with Big Pendant ",
    previousPrice: 3000,
    currentPrice: 2499,
    image: require("../../assets/images/16.jpg"),
    quantity: 1,
  },
  {
    id: "3",
    name: "White Gold Chain",
    previousPrice: 1000,
    currentPrice: 799,
    image: require("../../assets/images/white-gold-chain.jpeg"),
    quantity: 1,
  },
  {
    id: "4",
    name: "Diamond Ring",
    previousPrice: 1000,
    currentPrice: 799,
    image: require("../../assets/images/item001.jpg"),
    quantity: 1,
  },
];

const ProductDetails = (props) => {
  const wishList = useSelector((store) => store.wishlist);
  const cart = useSelector((store) => store.cart);
  const { id, name, image, previousPrice, currentPrice, quantity } =
    props.route.params;
  const [refresh, setRefresh] = useState(0);

  const payload = {
    id: id,
    name: name,
    image: image,
    previousPrice: previousPrice,
    currentPrice: currentPrice,
    quantity: quantity,
  };

  const isInCart = cart.some((item) => item.id === id);
  const isInWishList = wishList.some((item) => item.id === id);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartSliceAction.addToCart(payload));
  };
  const addToWishList = () => {
    dispatch(wishListAction.addToWishlist(payload));
  };

  const deleteFromWishlist = () => {
    dispatch(wishListAction.deleteFromWishlist(payload.id));
  };

  useEffect(() => {
    setRefresh((prevRefresh) => prevRefresh + 1);
  }, [props.route.params]);

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 25,
          paddingHorizontal: 10,
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          borderBottomWidth: 0.2,
          borderColor: "gray",
        }}
      >
        <View style={{ flexDirection: "row", gap: 5 }}>
          <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontFamily: "WorkSans",
            }}
          >
            Product Details
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <AntDesign name="search1" size={24} color="black" />
          <TouchableOpacity onPress={() => navigation.navigate("cart")}>
            <View style={{ position: "relative" }}>
              {cart.length === 0 ? null : (
                <View
                  style={{
                    position: "absolute",
                    right: -6,
                    top: -7,
                    backgroundColor: "red",
                    height: 16,
                    width: 15,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 10,
                  }}
                >
                  <Text style={{ color: "white" }}>{cart.length}</Text>
                </View>
              )}
              <AntDesign name="shoppingcart" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("wishlist")}>
            <View style={{ position: "relative" }}>
              {wishList.length === 0 ? null : (
                <View
                  style={{
                    position: "absolute",
                    right: -6,
                    top: -7,
                    backgroundColor: "red",
                    height: 16,
                    width: 15,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 10,
                  }}
                >
                  <Text style={{ color: "white" }}>{wishList.length}</Text>
                </View>
              )}
              <AntDesign name="hearto" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView key={refresh} style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <View style={{ height: 420 }}>
          <Image source={image} style={{ height: "100%", width: "100%" }} />
        </View>
        <View
          style={{
            paddingHorizontal: 10,
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
            backgroundColor: "#ffffff",
            position: "relative",
            bottom: 20,
            padding: 20,
            flex: 1,
            borderTopColor: "gray",
          }}
        >
          <Text
            style={{ fontSize: 20, fontFamily: "WorkSans", marginBottom: 4 }}
          >
            {name}
          </Text>
          <Text style={{ fontFamily: "WorkSans", marginBottom: 4 }}>
            From Blod Blooms Collection
          </Text>

          <View style={{ flexDirection: "row", gap: 7, alignItems: "center" }}>
            <Text
              style={{ fontSize: 27, fontFamily: "WorkSans", marginBottom: 4 }}
            >
              ₹ {currentPrice}
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "WorkSans",
                marginBottom: 4,
                color: "pink",
                textDecorationLine: "line-through",
              }}
            >
              {previousPrice}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 15,
              fontFamily: "WorkSans",
              marginBottom: 10,
              color: "red",
            }}
          >
            You are saving ₹ {previousPrice - currentPrice}
          </Text>
          <View
            style={{
              backgroundColor: "#F9F4EE",
              borderRadius: 10,
              padding: 10,
            }}
          >
            <Text
              style={{ fontFamily: "WorkSans", fontSize: 20, marginBottom: 10 }}
            >
              Product Details
            </Text>
            <Text
              style={{
                fontFamily: "WorkSans",
                textAlign: "justify",
                color: "gray",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              rhoncus, purus a pharetra tempor, augue lacus blandit sapien, nec
              rutrum ligula dui nec lorem. Donec volutpat, arcu a dignissim
              molestie, libero sem venenatis neque, a maximus ante eros nec
              erat. Sed mollis ligula eros, quis venenatis diam commodo sit
              amet. Pellentesque in hendrerit quam. Sed sit amet pellentesque
              risus. Ut tempus laoreet nulla, in dapibus sem posuere sed. Nunc a
              semper lectus. Suspendisse ultricies augue non libero pharetra
              euismod. risus. Ut tempus laoreet nulla, in dapibus sem posuere
              sed. Nunc a semper lectus. Suspendisse ultricies augue non libero
              pharetra euismod.
            </Text>
            <View style={{ flexDirection: "row", gap: 10, marginTop: 40 }}>
              <Text
                style={{
                  fontFamily: "WorkSans",
                }}
              >
                Product Id:
              </Text>
              <Text
                style={{
                  fontFamily: "WorkSans",
                  textAlign: "justify",
                  color: "gray",
                }}
              >
                20333049
              </Text>
            </View>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Text
                style={{
                  fontFamily: "WorkSans",
                }}
              >
                Dimensions:
              </Text>
              <Text
                style={{
                  fontFamily: "WorkSans",
                  textAlign: "justify",
                  color: "gray",
                }}
              >
                Length - 71.4 mm Width - 24.0 mm
              </Text>
            </View>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Text
                style={{
                  fontFamily: "WorkSans",
                }}
              >
                Net quantity:
              </Text>
              <Text
                style={{
                  fontFamily: "WorkSans",
                  textAlign: "justify",
                  color: "gray",
                }}
              >
                1
              </Text>
            </View>
          </View>
          <View
            style={{
              paddingVertical: 15,
              marginVertical: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontFamily: "WorkSans", fontSize: 20 }}>
              You May Also like{" "}
            </Text>
            <Text
              style={{ fontFamily: "WorkSans", fontSize: 15, color: "red" }}
            >
              View all{" "}
            </Text>
          </View>
          <FlatList
            data={productData}
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{ gap: 10 }}
            keyExtractor={(item) => item.id}
            pagingEnabled={true}
            renderItem={({ item }) => (
              <HotItem
                id={item.id}
                name={item.name}
                image={item.image}
                previousPrice={item.previousPrice}
                currentPrice={item.currentPrice}
                quantity={item.quantity}
              />
            )}
          />
        </View>
      </ScrollView>
      <View
        style={{
          paddingVertical: 25,
          borderColor: "gray",
          borderWidth: 0.2,
          backgroundColor: "#ffffff",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 15,
          gap: 12,
        }}
      >
        {isInWishList ? (
          <TouchableOpacity
            style={{
              padding: 10,
              borderColor: "#F9F4EE",
              borderWidth: 1,
              borderRadius: 10,
            }}
            onPress={deleteFromWishlist}
          >
            <AntDesign name="heart" size={24} color="red" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              padding: 10,
              borderColor: "#F9F4EE",
              borderWidth: 1,
              borderRadius: 10,
            }}
            onPress={addToWishList}
          >
            <AntDesign name="hearto" size={24} color="black" />
          </TouchableOpacity>
        )}

        {isInCart ? (
          <TouchableOpacity
            style={{
              flex: 1,
              padding: 15,
              backgroundColor: "#F9F5EE",
              alignItems: "center",
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate("cart")}
          >
            <Text style={{ fontSize: 20, fontFamily: "WorkSans" }}>
              Go to Cart
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              flex: 1,
              padding: 15,
              backgroundColor: "#3f3f47",
              alignItems: "center",
              borderRadius: 10,
            }}
            onPress={addToCart}
          >
            <Text
              style={{ fontSize: 20, fontFamily: "WorkSans", color: "white" }}
            >
              Add to Cart
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
