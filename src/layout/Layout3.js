import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HotItem from "../components/HotItem";

const Layout3 = ({ data }) => {
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
        <Text
          style={{
            fontFamily: "WorkSans",
            fontSize: 15,
            color: "red",
          }}
        >
          View All
        </Text>
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
