import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Address = () => {
    const navigation = useNavigation()
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
        <TouchableOpacity style={{ position: "absolute", left: 6 }} onPress={()=> navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ margin: "auto", fontSize: 20 }}>Address Details</Text>
      </View>
      <ScrollView
        style={{
          backgroundColor: "#ffffff",
          flex: 1,
          paddingHorizontal: 10,
          marginBottom: 10,
        }}
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
            style={{ flex: 1, borderWidth: 0.7, alignSelf: "center" }}
          ></View>
          <View style={{ alignItems: "center" }}>
            <Ionicons name="checkmark-circle-outline" size={24} color="black" />
            <Text>Order Summary</Text>
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
          <Text style={{ fontSize: 20 }}>Shipping Information</Text>
        </View>

        <View style={{ gap: 10 }}>
          <TextInput
            placeholder="Full Name (Required)*"
            style={{
              backgroundColor: "#F9F4EE",
              padding: 15,
              borderRadius: 10,
            }}
          />
          <TextInput
            placeholder="Phone number (Required)*"
            style={{
              backgroundColor: "#F9F4EE",
              padding: 15,
              borderRadius: 10,
            }}
          />
          <TextInput
            placeholder="Address (Required)*"
            style={{
              backgroundColor: "#F9F4EE",
              padding: 15,
              borderRadius: 10,
            }}
          />
          <View style={{ flexDirection: "row", gap: 10 }}>
            <TextInput
              placeholder="State (Required)*"
              style={{
                backgroundColor: "#F9F4EE",
                padding: 15,
                borderRadius: 10,
                flex: 1,
              }}
            />
            <TextInput
              placeholder="PinCode (Required)*"
              style={{
                backgroundColor: "#F9F4EE",
                padding: 15,
                borderRadius: 10,
                flex: 1,
              }}
            />
          </View>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <TextInput
              placeholder="City (Required)*"
              style={{
                backgroundColor: "#F9F4EE",
                padding: 15,
                borderRadius: 10,
                flex: 1,
              }}
            />
            <TextInput
              placeholder="Country/Region (Required)*"
              style={{
                backgroundColor: "#F9F4EE",
                padding: 15,
                borderRadius: 10,
                flex: 1,
              }}
            />
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
          marginHorizontal:10
        }}
        onPress={()=> navigation.navigate("OrderSummary")}
      >
        <Text style={{ color: "white" }}>Procced</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Address;

const styles = StyleSheet.create({});
