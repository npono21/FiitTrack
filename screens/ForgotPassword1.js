import React from "react";

import { View, Text, Button, TextInput } from "react-native";

import LottieView from "lottie-react-native";

import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const ForgotPassword1 = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          marginTop: 60,
          justifyContent: "center",
        }}
      >
        <View style={{ left: 190 }}>
          <AntDesign name="questioncircleo" size={25} color="white" />
        </View>

        <View
          style={{ right: 165, flexDirection: "row", alignItems: "center" }}
        >
          <Button
            title="Back"
            color="white"
            onPress={() => navigation.navigate("Login")}
          >
            {"  "}
            Back
          </Button>
        </View>
      </View>
      <View style={{ marginTop: 30, marginLeft: 23, flexDirection: "column" }}>
        <Text
          style={{
            fontFamily: "System",
            fontSize: 30,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Reset Password
        </Text>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 20, fontFamily: "System", color: "white" }}>
            Enter the email associated with your account and we'll send an email
            with instructions to reset your password.
          </Text>
        </View>
        <View style={{ marginTop: 25 }}>
          <Text style={{ fontFamily: "System", fontSize: 15, color: "grey" }}>
            Email Address
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            width: "93%",
            padding: 15,
            borderRadius: 15,
            marginTop: 2,
          }}
        >
          <TextInput
            style={{
              fontSize: 17,
              textAlign: "left",
              color: "black",
              fontFamily: "System",
            }}
            placeholder="Email Address"
            placeholderTextColor={"lightgrey"}
          />
        </View>
        <View
          style={{
            backgroundColor: "white",
            justifyContent: "center",
            width: 300,
            width: "93%",
            height: 50,
            borderRadius: 15,
            marginTop: 15,
            backgroundColor: "navy",
          }}
        >
          <Button title="Send Instructions" color="white" />
        </View>
      </View>
    </View>
  );
};
export default ForgotPassword1;
