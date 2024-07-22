import { StyleSheet, Text, View } from "react-native";
import React from "react";
import VerticalBox from "../components/VerticalBox";

const Layout1 = ({ data, layoutTitle, layoutSubTitle  }) => {
  return (
    <>
      <View
        style={{
          gap: 4,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontFamily: "WorkSans",
          }}
        >
          {layoutTitle}
        </Text>
        <Text
          style={{
            fontFamily: "WorkSans",
            color: "gray",
            marginBottom: 10,
          }}
        >
          {layoutSubTitle}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 10,
        }}
      >
        {data.map((item, index) => (
          <VerticalBox
            key={index}
            title={item.title}
            subtitle={item.subTitle}
            image={item.image}
            products={item.products}
          />
        ))}
      </View>
    </>
  );
};

export default Layout1;

const styles = StyleSheet.create({});
