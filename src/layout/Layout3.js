import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import HotItem from "../components/HotItem";
import { useNavigation } from "@react-navigation/native";
import Products from "../screen/Products";

const Layout3 = ({ data, name }) => {
  const navigation = useNavigation();
  const payload = {
    name: name,
    products: data,
  };
  return (
    <View>
      <View
        style={{
          gap: 4,
          marginTop: 10,
          flexDirection: "row",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 25,
              fontFamily: "WorkSans",
            }}
          >
            Features Products
          </Text>
          <Text
            style={{
              fontFamily: "WorkSans",
              color: "gray",
              marginBottom: 10,
            }}
          >
            Exclusives Collection
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Products", payload)}
        >
          <Text
            style={{
              fontFamily: "WorkSans",
              fontSize: 15,
              color: "red",
            }}
          >
            View All
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.map((item, index) => (
            <HotItem
              key={index}
              id={item.id}
              name={item.name}
              previousPrice={item.previousPrice}
              currentPrice={item.currentPrice}
              image={item.image}
              quantity={item.quantity}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Layout3;

const styles = StyleSheet.create({});
