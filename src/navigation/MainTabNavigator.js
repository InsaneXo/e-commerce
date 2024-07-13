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

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarShowLabel: false, tabBarStyle:{
        backgroundColor: "#272729",
        height:80
      } }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarInactiveTintColor: "white",
          tabBarActiveTintColor: "yellow",
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
          tabBarInactiveTintColor: "white",
          tabBarActiveTintColor: "yellow",
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
        component={PageNotImplmented}
        options={{
          headerShown: false,
          tabBarInactiveTintColor: "white",
          tabBarActiveTintColor: "yellow",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Order List"
        component={PageNotImplmented}
        options={{
          headerShown: false,
          tabBarInactiveTintColor: "white",
          tabBarActiveTintColor: "yellow",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="briefcase-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={PageNotImplmented}
        options={{
          headerShown: false,
          tabBarInactiveTintColor: "white",
          tabBarActiveTintColor: "yellow",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
