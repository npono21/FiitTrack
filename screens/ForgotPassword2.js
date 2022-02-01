import React from "react";

import { View, Text, Button, TextInput } from "react-native";

import LottieView from "lottie-react-native";

import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const ForgotPassword2 = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <View style={{ marginTop: 100 }}>
        <LottieView
          source={require("../assets/79767-email.json")}
          autoPlay
          loop
          style={{ height: 175, alignSelf: "center" }}
        />
      </View>
      <View style={{ alignSelf: "center", alignItems: "center" }}>
        <Text
          style={{
            fontFamily: "System",
            fontSize: 35,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Check your mail
        </Text>
        <View style={{ marginTop: 15, alignItems: "center" }}>
          <Text
            style={{
              fontFamily: "System",
              fontSize: 20,
              color: "white",
            }}
          >
            We have sent instructions to reset
          </Text>
          <Text
            style={{
              fontFamily: "System",
              fontSize: 20,
              color: "white",
            }}
          >
            your password to your email
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "navy",
            padding: 5,
            width: 200,
            borderRadius: 15,
            marginTop: 50,
          }}
        >
          <Button title="Open Email App" color="white" />
        </View>
        <View style={{ marginTop: 150 }}>
          <Text
            style={{
              fontFamily: "System",
              fontSize: 15,
              color: "white",
            }}
          >
            Did not receive an email? Check your spam filter,
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "System",
                fontSize: 16,
                color: "white",
              }}
            >
              or
            </Text>
            <Button
              title="try another email address"
              color="blue"
              onPress={() => navigation.navigate("ForgotPassword1")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default ForgotPassword2;
