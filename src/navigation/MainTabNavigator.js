import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/Home";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Catagory from "../screen/Catagory";
import PageNotImplmented from "../screen/PageNotImplmented";
import Cart from "../screen/Cart";
import Profile from "../screen/Profile";
import { useSelector } from "react-redux";
import Wishlist from "../screen/Wishlist";

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  
  const items = useSelector((store) => store.cart);
  const wishlistItem = useSelector((store)=> store.wishlist)

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#F9F4EE",
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarInactiveTintColor: "#524C42",
          tabBarActiveTintColor: "black",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Catagory"
        component={Catagory}
        options={{
          headerShown: false,
          tabBarInactiveTintColor: "#524C42",
          tabBarActiveTintColor: "black",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="dashboard-customize"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          tabBarInactiveTintColor: "#524C42",
          tabBarActiveTintColor: "black",
          tabBarIcon: ({ color, size }) => (
            <View style={{ position: "relative" }}>
              {items.length === 0 ? null : (
                <View
                  style={{
                    position: "absolute",
                    right: -4,
                    top: -15,
                    backgroundColor: "red",
                    height: 16,
                    width: 15,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white" }}>{items.length}</Text>
                </View>
              )}

              <FontAwesome5 name="shopping-cart" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          headerShown: false,
          tabBarInactiveTintColor: "#524C42",
          tabBarActiveTintColor: "black",
          tabBarIcon: ({ color, size }) => (
            <View style={{ position: "relative" }}>
              {wishlistItem.length === 0 ? null : (
                <View
                  style={{
                    position: "absolute",
                    right: -4,
                    top: -15,
                    backgroundColor: "red",
                    height: 16,
                    width: 15,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white" }}>{wishlistItem.length}</Text>
                </View>
              )}

              <AntDesign name="heart" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarInactiveTintColor: "#524C42",
          tabBarActiveTintColor: "black",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
