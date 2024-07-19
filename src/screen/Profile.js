import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Profile = () => {
  const data = [
    {
      icon: <AntDesign name="user" size={24} />,
      name: "Personal Info",
    },
    {
      icon: <FontAwesome5 name="bell" size={24} />,
      name: "Notifications",
    },
    {
      icon: <Feather name="briefcase" size={24} />,
      name: "My Orders",
    },
    {
      icon: <AntDesign name="hearto" size={24} />,
      name: "Favoutires",
    },
  ];

  const data2 = [
    {
      icon: <FontAwesome6 name="location-dot" size={24} />,
      name: "My Address",
    },
    {
      icon: <MaterialIcons name="payment" size={24} />,
      name: "Payment Method",
    },
    {
      icon: <Entypo name="lock" size={24} />,
      name: "Change Password",
    },
    {
      icon: <AntDesign name="questioncircleo" size={24} />,
      name: "Help & Support",
    },
  ];
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#FFFFFF", paddingHorizontal: 10 }}
    >
      <Text style={{ textAlign: "center", color: "white", marginVertical: 15 }}>
        Profile
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 7 }}>
          <View
            style={{
              height: 80,
              width: 80,
              borderRadius: 50,
              backgroundColor: "#F9F4EE",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="user" size={24} color="black" />
          </View>
          <View style={{ gap: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              Bipin Singh
            </Text>
            <Text>vsinghvipin333@gmail.com</Text>
          </View>
        </View>
        <FontAwesome5 name="bell" size={24} color="white" />
      </View>
      <View style={{ borderRadius: 10, overflow: "hidden", marginBottom: 10 }}>
        {data.map((item, index) => (
          <View
            key={index}
            style={{
              backgroundColor: "#F9F4EE",
              paddingHorizontal: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                paddingVertical: 25,
                alignItems: "center",
              }}
            >
              {item.icon}
              <Text style={{ fontSize: 17 }}>{item.name}</Text>
            </View>
            <AntDesign name="right" size={24} color="black" />
          </View>
        ))}
      </View>
      <View style={{ borderRadius: 10, overflow: "hidden" }}>
        {data2.map((item, index) => (
          <View
            key={index}
            style={{
              backgroundColor: "#F9F4EE",
              paddingHorizontal: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                paddingVertical: 25,
                alignItems: "center",
              }}
            >
              {item.icon}
              <Text style={{ fontSize: 17 }}>{item.name}</Text>
            </View>
            <AntDesign name="right" size={24} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
