import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  Button,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Card from "../components/Card";
import HotItem from "../components/HotItem";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import CircleItems from "../components/CircleItems";
import Layout1 from "../layout/Layout1";
import Layout2 from "../layout/Layout2";
import Layout3 from "../layout/Layout3";

const data = [
  {
    id: "1",
    name: "All Jewellery",
    image: require("../../assets/images/1.jpg"),
  },
  {
    id: "2",
    name: "All Jewellery",
    image: require("../../assets/images/2.jpg"),
  },
  {
    id: "3",
    name: "All Jewellery",
    image: require("../../assets/images/3.jpg"),
  },
  {
    id: "4",
    name: "All Jewellery",
    image: require("../../assets/images/4.jpg"),
  },
];

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
  {
    id: "5",
    name: "Elegant jhumka White & Gray",
    previousPrice: 1000,
    currentPrice: 799,
    image: require("../../assets/images/8.jpg"),
    quantity: 1,
  },
  {
    id: "6",
    name: "Emrald CZ Necklace Set with Big Pendant ",
    previousPrice: 3000,
    currentPrice: 2499,
    image: require("../../assets/images/16.jpg"),
    quantity: 1,
  },
  {
    id: "7",
    name: "White Gold Chain",
    previousPrice: 1000,
    currentPrice: 799,
    image: require("../../assets/images/white-gold-chain.jpeg"),
    quantity: 1,
  },
  {
    id: "8",
    name: "Diamond Ring",
    previousPrice: 1000,
    currentPrice: 799,
    image: require("../../assets/images/item001.jpg"),
    quantity: 1,
  },
];

const circleProductData = [
  {
    id: "1",
    name: "Earring",
    circleImage: require("../../assets/images/item002.jpg"),
    products: [
      {
        id: "1",
        name: "Elegant jhumka White & Gray",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item002.jpg"),
        quantity: 1,
      },
      {
        id: "2",
        name: "Elegant jhumka White & Gray ",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item002.jpg"),
        quantity: 1,
      },
      {
        id: "3",
        name: "Elegant jhumka White & Gray ",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item002.jpg"),
        quantity: 1,
      },
      {
        id: "4",
        name: "Elegant jhumka White & Gray ",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item002.jpg"),
        quantity: 1,
      },
      {
        id: "5",
        name: "Elegant jhumka White & Gray ",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item002.jpg"),
        quantity: 1,
      },
      {
        id: "6",
        name: "Elegant jhumka White & Gray ",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item002.jpg"),
        quantity: 1,
      },
    ],
  },
  {
    id: "2",
    name: "Necklaces",
    circleImage: require("../../assets/images/item004.jpg"),
    products: [
      {
        id: "1",
        name: "Emrald CZ Necklace Set with Big Pendant ",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item004.jpg"),
        quantity: 1,
      },
      {
        id: "2",
        name: "Emrald CZ Necklace Set with Big Pendant ",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item004.jpg"),
        quantity: 1,
      },
      {
        id: "3",
        name: "Emrald CZ Necklace Set with Big Pendant ",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item004.jpg"),
        quantity: 1,
      },
      {
        id: "4",
        name: "Emrald CZ Necklace Set with Big Pendant ",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item004.jpg"),
        quantity: 1,
      },
      {
        id: "5",
        name: "Emrald CZ Necklace Set with Big Pendant ",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item004.jpg"),
        quantity: 1,
      },
      {
        id: "6",
        name: "Emrald CZ Necklace Set with Big Pendant ",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item004.jpg"),
        quantity: 1,
      },
    ],
  },
  {
    id: "3",
    name: "Rings",
    circleImage: require("../../assets/images/item001.jpg"),
    products: [
      {
        id: "1",
        name: "Diamond Ring",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item001.jpg"),
        quantity: 1,
      },
      {
        id: "2",
        name: "Diamond Ring",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item001.jpg"),
        quantity: 1,
      },
      {
        id: "3",
        name: "Diamond Ring",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item001.jpg"),
        quantity: 1,
      },
      {
        id: "4",
        name: "Diamond Ring",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item001.jpg"),
        quantity: 1,
      },
      {
        id: "5",
        name: "Diamond Ring",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item001.jpg"),
        quantity: 1,
      },
      {
        id: "6",
        name: "Diamond Ring",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/item001.jpg"),
        quantity: 1,
      },
    ],
  },
  {
    id: "4",
    name: "Chains",
    circleImage: require("../../assets/images/white-gold-chain.jpeg"),
    products: [
      {
        id: "1",
        name: "White Gold Chain",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/white-gold-chain.jpeg"),
        quantity: 1,
      },
      {
        id: "2",
        name: "White Gold Chain",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/white-gold-chain.jpeg"),
        quantity: 1,
      },
      {
        id: "3",
        name: "White Gold Chain",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/white-gold-chain.jpeg"),
        quantity: 1,
      },
      {
        id: "4",
        name: "White Gold Chain",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/white-gold-chain.jpeg"),
        quantity: 1,
      },
      {
        id: "5",
        name: "White Gold Chain",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/white-gold-chain.jpeg"),
        quantity: 1,
      },
      {
        id: "6",
        name: "White Gold Chain",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/white-gold-chain.jpeg"),
        quantity: 1,
      },
    ],
  },
  {
    id: "5",
    name: "Bracelet",
    circleImage: require("../../assets/images/bracelet.jpg"),
    products: [
      {
        id: "1",
        name: "Silver Bracelet",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/bracelet.jpg"),
        quantity: 1,
      },
      {
        id: "2",
        name: "Silver Bracelet",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/bracelet.jpg"),
        quantity: 1,
      },
      {
        id: "3",
        name: "Silver Bracelet",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/bracelet.jpg"),
        quantity: 1,
      },
      {
        id: "4",
        name: "Silver Bracelet",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/bracelet.jpg"),
        quantity: 1,
      },
      {
        id: "5",
        name: "Silver Bracelet",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/bracelet.jpg"),
        quantity: 1,
      },
      {
        id: "6",
        name: "Silver Bracelet",
        previousPrice: 3000,
        currentPrice: 2499,
        image: require("../../assets/images/bracelet.jpg"),
        quantity: 1,
      },
    ],
  },
];

const homePageData = {
  carouselSliderItems: [
    {
      id: "1",
      title: "All Jewellery",
      subTitle: "Trending Product",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      image: require("../../assets/images/slider1.jpg"),
    },
    {
      id: "2",
      title: "All Jewellery",
      subTitle: "All Jewellery",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      image: require("../../assets/images/slider2.jpg"),
    },
    {
      id: "3",
      title: "All Jewellery",
      subTitle: "Trending Product",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      image: require("../../assets/images/slider3.jpg"),
    },
    {
      id: "4",
      title: "All Jewellery",
      subTitle: "Trending Product",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      image: require("../../assets/images/slider4.jpg"),
    },
  ],
  categoriesItems: [
    {
      id: "1",
      title: "Necklaces Set",
      image: require("../../assets/images/NecklaceSet.jpg"),
      products: [
        {
          id: "1",
          name: "ZENEME Rhodium Plated Contemporary",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Necklace Set 1.jpg"),
          quantity: 1,
        },
        {
          id: "2",
          name: "ZENEME Rhodium Plated Contemporary",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Necklace Set 2.jpg"),
          quantity: 1,
        },
        {
          id: "3",
          name: "ZENEME Rhodium Plated Contemporary",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Necklace Set 3.jpg"),
          quantity: 1,
        },
        {
          id: "4",
          name: "ZENEME Rhodium Plated Contemporary",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Necklace Set 4.jpg"),
          quantity: 1,
        },
        {
          id: "5",
          name: "ZENEME Rhodium Plated Contemporary",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Necklace Set 5.jpg"),
          quantity: 1,
        },
        {
          id: "6",
          name: "ZENEME Rhodium Plated Contemporary",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Necklace Set 6.jpg"),
          quantity: 1,
        },
        {
          id: "7",
          name: "ZENEME Rhodium Plated Contemporary",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Necklace Set 7.jpg"),
          quantity: 1,
        },
        {
          id: "8",
          name: "ZENEME Rhodium Plated Contemporary",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Necklace Set 8.jpg"),
          quantity: 1,
        },
      ],
    },
    {
      id: "2",
      title: "Rings",
      image: require("../../assets/images/ring.jpg"),
      products: [
        {
          id: "1",
          name: "SPARKLE forever Iconic/A Class Act Diamond Ring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/ring.jpg"),
          quantity: 1,
        },
        {
          id: "2",
          name: "SPARKLE forever Iconic/A Class Act Diamond Ring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/ring.jpg"),
          quantity: 1,
        },
        {
          id: "3",
          name: "SPARKLE forever Iconic/A Class Act Diamond Ring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/ring.jpg"),
          quantity: 1,
        },
        {
          id: "4",
          name: "SPARKLE forever Iconic/A Class Act Diamond Ring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/ring.jpg"),
          quantity: 1,
        },
        {
          id: "5",
          name: "SPARKLE forever Iconic/A Class Act Diamond Ring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/ring.jpg"),
          quantity: 1,
        },
        {
          id: "6",
          name: "SPARKLE forever Iconic/A Class Act Diamond Ring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/ring.jpg"),
          quantity: 1,
        },
        {
          id: "7",
          name: "SPARKLE forever Iconic/A Class Act Diamond Ring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/ring.jpg"),
          quantity: 1,
        },
        {
          id: "8",
          name: "SPARKLE forever Iconic/A Class Act Diamond Ring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/ring.jpg"),
          quantity: 1,
        },
      ],
    },
    {
      id: "3",
      title: "Earring",
      image: require("../../assets/images/earring.jpg"),
      products: [
        {
          id: "1",
          name: "SPARKLE forever Iconic/A Class Act Earring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/earring.jpg"),
          quantity: 1,
        },
        {
          id: "2",
          name: "SPARKLE forever Iconic/A Class Act Earring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/earring.jpg"),
          quantity: 1,
        },
        {
          id: "3",
          name: "SPARKLE forever Iconic/A Class Act Earring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/earring.jpg"),
          quantity: 1,
        },
        {
          id: "4",
          name: "SPARKLE forever Iconic/A Class Act Earring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/earring.jpg"),
          quantity: 1,
        },
        {
          id: "5",
          name: "SPARKLE forever Iconic/A Class Act Earring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/earring.jpg"),
          quantity: 1,
        },
        {
          id: "6",
          name: "SPARKLE forever Iconic/A Class Act Earring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/earring.jpg"),
          quantity: 1,
        },
        {
          id: "7",
          name: "SPARKLE forever Iconic/A Class Act Earring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/earring.jpg"),
          quantity: 1,
        },
        {
          id: "8",
          name: "SPARKLE forever Iconic/A Class Act Earring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/earring.jpg"),
          quantity: 1,
        },
      ],
    },
    {
      id: "4",
      title: "Chain Pendant",
      image: require("../../assets/images/chainPendant.jpeg"),
      products: [
        {
          id: "1",
          name: "SPARKLE forever Iconic/A Class Act Chain Pendant",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/chainPendant.jpeg"),
          quantity: 1,
        },
        {
          id: "2",
          name: "SPARKLE forever Iconic/A Class Act Chain Pendant",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/chainPendant.jpeg"),
          quantity: 1,
        },
        {
          id: "3",
          name: "SPARKLE forever Iconic/A Class Act Chain Pendant",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/chainPendant.jpeg"),
          quantity: 1,
        },
        {
          id: "4",
          name: "SPARKLE forever Iconic/A Class Act Chain Pendant",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/chainPendant.jpeg"),
          quantity: 1,
        },
        {
          id: "5",
          name: "SPARKLE forever Iconic/A Class Act Chain Pendant",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/chainPendant.jpeg"),
          quantity: 1,
        },
        {
          id: "6",
          name: "SPARKLE forever Iconic/A Class Act Chain Pendant",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/chainPendant.jpeg"),
          quantity: 1,
        },
        {
          id: "7",
          name: "SPARKLE forever Iconic/A Class Act Chain Pendant",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/chainPendant.jpeg"),
          quantity: 1,
        },
        {
          id: "8",
          name: "SPARKLE forever Iconic/A Class Act Chain Pendant",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/chainPendant.jpeg"),
          quantity: 1,
        },
      ],
    },
    {
      id: "5",
      title: "Bracelets",
      image: require("../../assets/images/Bracelets.jpg"),
      products: [
        {
          id: "1",
          name: "SPARKLE forever Iconic/A Class Act Bracelets",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Bracelets.jpg"),
          quantity: 1,
        },
        {
          id: "2",
          name: "SPARKLE forever Iconic/A Class Act Bracelets",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Bracelets.jpg"),
          quantity: 1,
        },
        {
          id: "3",
          name: "SPARKLE forever Iconic/A Class Act Bracelets",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Bracelets.jpg"),
          quantity: 1,
        },
        {
          id: "4",
          name: "SPARKLE forever Iconic/A Class Act Bracelets",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Bracelets.jpg"),
          quantity: 1,
        },
        {
          id: "5",
          name: "SPARKLE forever Iconic/A Class Act Bracelets",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Bracelets.jpg"),
          quantity: 1,
        },
        {
          id: "6",
          name: "SPARKLE forever Iconic/A Class Act Bracelets",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Bracelets.jpg"),
          quantity: 1,
        },
        {
          id: "7",
          name: "SPARKLE forever Iconic/A Class Act Bracelets",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Bracelets.jpg"),
          quantity: 1,
        },
        {
          id: "8",
          name: "SPARKLE forever Iconic/A Class Act Bracelets",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Bracelets.jpg"),
          quantity: 1,
        },
      ],
    },
    {
      id: "6",
      title: "Bangles",
      image: require("../../assets/images/Bangles.jpg"),
      products: [
        {
          id: "1",
          name: "SPARKLE forever Iconic/A Class Act Bangles",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Bangles.jpg"),
          quantity: 1,
        },
        {
          id: "2",
          name: "SPARKLE forever Iconic/A Class Act Bangles",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Bangles.jpg"),
          quantity: 1,
        },
        {
          id: "3",
          name: "SPARKLE forever Iconic/A Class Act Bangles",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Bangles.jpg"),
          quantity: 1,
        },
        {
          id: "4",
          name: "SPARKLE forever Iconic/A Class Act Bangles",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Bangles.jpg"),
          quantity: 1,
        },
        {
          id: "5",
          name: "SPARKLE forever Iconic/A Class Act Bangles",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Bangles.jpg"),
          quantity: 1,
        },
        {
          id: "6",
          name: "SPARKLE forever Iconic/A Class Act Bangles",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Bangles.jpg"),
          quantity: 1,
        },
        {
          id: "7",
          name: "SPARKLE forever Iconic/A Class Act Bangles",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Bangles.jpg"),
          quantity: 1,
        },
        {
          id: "8",
          name: "SPARKLE forever Iconic/A Class Act Bangles",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Bangles.jpg"),
          quantity: 1,
        },
      ],
    },
    {
      id: "7",
      title: "Tika & Mathapatti",
      image: require("../../assets/images/Tika & Mathapatti.jpg"),
      products: [
        {
          id: "1",
          name: "SPARKLE forever Iconic/A Class Act Tika & Mathapatti",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Tika & Mathapatti.jpg"),
          quantity: 1,
        },
        {
          id: "2",
          name: "SPARKLE forever Iconic/A Class Act Tika & Mathapatti",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Tika & Mathapatti.jpg"),
          quantity: 1,
        },
        {
          id: "3",
          name: "SPARKLE forever Iconic/A Class Act Tika & Mathapatti",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Tika & Mathapatti.jpg"),
          quantity: 1,
        },
        {
          id: "4",
          name: "SPARKLE forever Iconic/A Class Act Tika & Mathapatti",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Tika & Mathapatti.jpg"),
          quantity: 1,
        },
        {
          id: "5",
          name: "SPARKLE forever Iconic/A Class Act Tika & Mathapatti",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Tika & Mathapatti.jpg"),
          quantity: 1,
        },
        {
          id: "6",
          name: "SPARKLE forever Iconic/A Class Act Tika & Mathapatti",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Tika & Mathapatti.jpg"),
          quantity: 1,
        },
        {
          id: "7",
          name: "SPARKLE forever Iconic/A Class Act Tika & Mathapatti",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Tika & Mathapatti.jpg"),
          quantity: 1,
        },
        {
          id: "8",
          name: "SPARKLE forever Iconic/A Class Act Tika & Mathapatti",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Tika & Mathapatti.jpg"),
          quantity: 1,
        },
      ],
    },
    {
      id: "8",
      title: "Belts",
      image: require("../../assets/images/Belts.jpg"),
      products: [
        {
          id: "1",
          name: "SPARKLE forever Iconic/A Class Act Belts",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Belts.jpg"),
          quantity: 1,
        },
        {
          id: "2",
          name: "SPARKLE forever Iconic/A Class Act Belts",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Belts.jpg"),
          quantity: 1,
        },
        {
          id: "3",
          name: "SPARKLE forever Iconic/A Class Act Belts",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Belts.jpg"),
          quantity: 1,
        },
        {
          id: "4",
          name: "SPARKLE forever Iconic/A Class Act Belts",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Belts.jpg"),
          quantity: 1,
        },
        {
          id: "5",
          name: "SPARKLE forever Iconic/A Class Act Belts",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Belts.jpg"),
          quantity: 1,
        },
        {
          id: "6",
          name: "SPARKLE forever Iconic/A Class Act Belts",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Belts.jpg"),
          quantity: 1,
        },
        {
          id: "7",
          name: "SPARKLE forever Iconic/A Class Act Belts",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Belts.jpg"),
          quantity: 1,
        },
        {
          id: "8",
          name: "SPARKLE forever Iconic/A Class Act Belts",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Belts.jpg"),
          quantity: 1,
        },
      ],
    },
  ],
  topCollection: [
    {
      title: "Rings",
      subTitle: "Exclusives Collection",
      image: require("../../assets/images/ringBg.jpg"),
      products: [
        {
          id: "1",
          name: "SPARKLE forever Iconic/A Class Act Diamond Ring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/ring.jpg"),
          quantity: 1,
        },
        {
          id: "2",
          name: "SPARKLE forever Iconic/A Class Act Diamond Ring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/ring.jpg"),
          quantity: 1,
        },
        {
          id: "3",
          name: "SPARKLE forever Iconic/A Class Act Diamond Ring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/ring.jpg"),
          quantity: 1,
        },
        {
          id: "4",
          name: "SPARKLE forever Iconic/A Class Act Diamond Ring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/ring.jpg"),
          quantity: 1,
        },
        {
          id: "5",
          name: "SPARKLE forever Iconic/A Class Act Diamond Ring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/ring.jpg"),
          quantity: 1,
        },
        {
          id: "5",
          name: "SPARKLE forever Iconic/A Class Act Diamond Ring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/ring.jpg"),
          quantity: 1,
        },
        {
          id: "6",
          name: "SPARKLE forever Iconic/A Class Act Diamond Ring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/ring.jpg"),
          quantity: 1,
        },
        {
          id: "7",
          name: "SPARKLE forever Iconic/A Class Act Diamond Ring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/ring.jpg"),
          quantity: 1,
        },
      ],
    },
    {
      title: "Earring",
      subTitle: "Exclusives Collection",
      image: require("../../assets/images/earringBg.jpg"),
      products: [
        {
          id: "1",
          name: "SPARKLE forever Iconic/A Class Act Earring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/earring.jpg"),
          quantity: 1,
        },
        {
          id: "2",
          name: "SPARKLE forever Iconic/A Class Act Earring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/earring.jpg"),
          quantity: 1,
        },
        {
          id: Date.now(),
          name: "SPARKLE forever Iconic/A Class Act Earring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/earring.jpg"),
          quantity: 1,
        },
        {
          id: "3",
          name: "SPARKLE forever Iconic/A Class Act Earring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/earring.jpg"),
          quantity: 1,
        },
        {
          id: "4",
          name: "SPARKLE forever Iconic/A Class Act Earring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/earring.jpg"),
          quantity: 1,
        },
        {
          id: "5",
          name: "SPARKLE forever Iconic/A Class Act Earring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/earring.jpg"),
          quantity: 1,
        },
        {
          id: "6",
          name: "SPARKLE forever Iconic/A Class Act Earring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/earring.jpg"),
          quantity: 1,
        },
        {
          id: "7",
          name: "SPARKLE forever Iconic/A Class Act Earring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/earring.jpg"),
          quantity: 1,
        },
      ],
    },
    {
      title: "Necklace Set",
      subTitle: "Exclusives Collection",
      image: require("../../assets/images/NecklaceSetBg.jpg"),
      products: [
        {
          id: "1",
          name: "ZENEME Rhodium Plated Contemporary",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Necklace Set 1.jpg"),
          quantity: 1,
        },
        {
          id: "2",
          name: "ZENEME Rhodium Plated Contemporary",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Necklace Set 2.jpg"),
          quantity: 1,
        },
        {
          id: "3",
          name: "ZENEME Rhodium Plated Contemporary",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Necklace Set 3.jpg"),
          quantity: 1,
        },
        {
          id: "4",
          name: "ZENEME Rhodium Plated Contemporary",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Necklace Set 4.jpg"),
          quantity: 1,
        },
        {
          id: "5",
          name: "ZENEME Rhodium Plated Contemporary",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Necklace Set 5.jpg"),
          quantity: 1,
        },
        {
          id: "6",
          name: "ZENEME Rhodium Plated Contemporary",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Necklace Set 6.jpg"),
          quantity: 1,
        },
        {
          id: "7",
          name: "ZENEME Rhodium Plated Contemporary",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Necklace Set 7.jpg"),
          quantity: 1,
        },
      ],
    },
    {
      title: "Tika & Mathapatti",
      subTitle: "Exclusives Collection",
      image: require("../../assets/images/Tika & MathapattiBG.jpg"),
      products: [
        {
          id: Date.now(),
          name: "SPARKLE forever Iconic/A Class Act Tika & Mathapatti",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Tika & Mathapatti.jpg"),
          quantity: 1,
        },
        {
          id: Date.now(),
          name: "SPARKLE forever Iconic/A Class Act Tika & Mathapatti",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Tika & Mathapatti.jpg"),
          quantity: 1,
        },
        {
          id: Date.now(),
          name: "SPARKLE forever Iconic/A Class Act Tika & Mathapatti",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Tika & Mathapatti.jpg"),
          quantity: 1,
        },
        {
          id: Date.now(),
          name: "SPARKLE forever Iconic/A Class Act Tika & Mathapatti",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Tika & Mathapatti.jpg"),
          quantity: 1,
        },
        {
          id: Date.now(),
          name: "SPARKLE forever Iconic/A Class Act Tika & Mathapatti",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Tika & Mathapatti.jpg"),
          quantity: 1,
        },
        {
          id: Date.now(),
          name: "SPARKLE forever Iconic/A Class Act Tika & Mathapatti",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Tika & Mathapatti.jpg"),
          quantity: 1,
        },
        {
          id: Date.now(),
          name: "SPARKLE forever Iconic/A Class Act Tika & Mathapatti",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Tika & Mathapatti.jpg"),
          quantity: 1,
        },
        {
          id: Date.now(),
          name: "SPARKLE forever Iconic/A Class Act Tika & Mathapatti",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/Tika & Mathapatti.jpg"),
          quantity: 1,
        },
      ],
    },
  ],
  shopByOccasion: [
    {
      name: "Wedding Collection",
      subTitle: "Exclusives Collection",
      image: require("../../assets/images/weddingCollection.jpg"),
      products: [
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
        {
          id: "5",
          name: "Elegant jhumka White & Gray",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/8.jpg"),
          quantity: 1,
        },
        {
          id: "6",
          name: "Emrald CZ Necklace Set with Big Pendant ",
          previousPrice: 3000,
          currentPrice: 2499,
          image: require("../../assets/images/16.jpg"),
          quantity: 1,
        },
        {
          id: "7",
          name: "White Gold Chain",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/white-gold-chain.jpeg"),
          quantity: 1,
        },
        {
          id: "8",
          name: "Diamond Ring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/item001.jpg"),
          quantity: 1,
        },
      ],
    },
    {
      name: "Reception Collection",
      subTitle: "Exclusives Collection",
      image: require("../../assets/images/receptionBg.jpg"),
      products: [
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
        {
          id: "5",
          name: "Elegant jhumka White & Gray",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/8.jpg"),
          quantity: 1,
        },
        {
          id: "6",
          name: "Emrald CZ Necklace Set with Big Pendant ",
          previousPrice: 3000,
          currentPrice: 2499,
          image: require("../../assets/images/16.jpg"),
          quantity: 1,
        },
        {
          id: "7",
          name: "White Gold Chain",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/white-gold-chain.jpeg"),
          quantity: 1,
        },
        {
          id: "8",
          name: "Diamond Ring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/item001.jpg"),
          quantity: 1,
        },
      ],
    },
    {
      name: "Engagement Collection",
      subTitle: "Exclusives Collection",
      image: require("../../assets/images/engagementBg.jpg"),
      products: [
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
        {
          id: "5",
          name: "Elegant jhumka White & Gray",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/8.jpg"),
          quantity: 1,
        },
        {
          id: "6",
          name: "Emrald CZ Necklace Set with Big Pendant ",
          previousPrice: 3000,
          currentPrice: 2499,
          image: require("../../assets/images/16.jpg"),
          quantity: 1,
        },
        {
          id: "7",
          name: "White Gold Chain",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/white-gold-chain.jpeg"),
          quantity: 1,
        },
        {
          id: "8",
          name: "Diamond Ring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/item001.jpg"),
          quantity: 1,
        },
      ],
    },
    {
      name: "Party Collection",
      subTitle: "Exclusives Collection",
      image: require("../../assets/images/partyBG.jpg"),
      products: [
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
        {
          id: "5",
          name: "Elegant jhumka White & Gray",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/8.jpg"),
          quantity: 1,
        },
        {
          id: "6",
          name: "Emrald CZ Necklace Set with Big Pendant ",
          previousPrice: 3000,
          currentPrice: 2499,
          image: require("../../assets/images/16.jpg"),
          quantity: 1,
        },
        {
          id: "7",
          name: "White Gold Chain",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/white-gold-chain.jpeg"),
          quantity: 1,
        },
        {
          id: "8",
          name: "Diamond Ring",
          previousPrice: 1000,
          currentPrice: 799,
          image: require("../../assets/images/item001.jpg"),
          quantity: 1,
        },
      ],
    },
  ],
  featuresProduct: [
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
    {
      id: "5",
      name: "Elegant jhumka White & Gray",
      previousPrice: 1000,
      currentPrice: 799,
      image: require("../../assets/images/8.jpg"),
      quantity: 1,
    },
    {
      id: "6",
      name: "Emrald CZ Necklace Set with Big Pendant ",
      previousPrice: 3000,
      currentPrice: 2499,
      image: require("../../assets/images/16.jpg"),
      quantity: 1,
    },
    {
      id: "7",
      name: "White Gold Chain",
      previousPrice: 1000,
      currentPrice: 799,
      image: require("../../assets/images/white-gold-chain.jpeg"),
      quantity: 1,
    },
    {
      id: "8",
      name: "Diamond Ring",
      previousPrice: 1000,
      currentPrice: 799,
      image: require("../../assets/images/item001.jpg"),
      quantity: 1,
    },
  ],
};

const Home = () => {
  const wishList = useSelector((store) => store.wishlist);
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / Dimensions.get("window").width);
    setCurrentIndex(index);
  };

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 20,
          paddingHorizontal: 10,
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
        }}
      >
        <Text
          style={{ textAlign: "center", fontSize: 20, fontFamily: "WorkSans" }}
        >
          Sundaram
        </Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <AntDesign name="search1" size={24} color="black" />
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
            </View>
            <AntDesign name="hearto" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <View style={{ position: "relative" }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={homePageData.carouselSliderItems}
            pagingEnabled
            snapToAlignment="start"
            renderItem={({ item }) => (
              <Card
                name={item.title}
                price={item.price}
                image={item.image}
                productData={productData}
              />
            )}
            keyExtractor={(item) => item.id}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            decelerationRate={"normal"}
            bounces={false}
          />
          <View
            style={{
              flexDirection: "row",
              gap: 3,
              marginVertical: 10,
              position: "absolute",
              bottom: 0,
              right: 10,
            }}
          >
            {data.map((_, index) => {
              return (
                <View
                  key={index}
                  style={{
                    backgroundColor:
                      currentIndex === index ? "#3f3f47" : "#F9F4EE",
                    height: 10,
                    width: currentIndex === index ? 60 : 20,
                    borderRadius: 5,
                  }}
                ></View>
              );
            })}
          </View>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <View
            style={{
              flexDirection: "row",
              marginVertical: 35,
            }}
          >
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              contentContainerStyle={{ gap: 25 }}
              data={homePageData.categoriesItems}
              renderItem={({ item }) => (
                <CircleItems
                  name={item.title}
                  circleImage={item.image}
                  products={item.products}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
          <Layout1
            data={homePageData.topCollection}
            layoutTitle={"Top Collection"}
            layoutSubTitle={"Exclusive Collection"}
          />
          <Layout2 data={homePageData.shopByOccasion} />
          <Layout3 data={homePageData.featuresProduct} />
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
