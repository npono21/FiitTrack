import styled from "styled-components";

import React from "react";

import { StyleSheet } from "react-native";

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  RecyclerViewBackedScrollViewComponent,
  EdgeInsetsPropType,
} from "react-native";

// colors
export const Colors = {
  primary: "#ffffff",
  secondary: "#E5E7EB",
  tertiary: "#1F2937",
  darkLight: "#9CA3AF",
  brand: "#6D28D9",
  green: "#10B981",
  red: red,
};

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const TitleBox = styled.View``;

const styledRectangle = StyleSheet.create({
  rectangle: {
    height: 35,
    width: 130,
    backgroundColor: "#515151",
    position: "absolute",
    marginTop: 100,
    marginLeft: 0,
    //left: "10%",
    opacity: 0.5,
  },
});
