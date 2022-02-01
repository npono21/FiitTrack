import React from "react";

import { View, Text, Button, TextInput } from "react-native";

import LottieView from "lottie-react-native";

import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const ResetPassword = ({ navigation }) => {
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
            onPress={() => navigation.navigate("ForgotPassword1")}
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
          Create New Password
        </Text>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 20, fontFamily: "System", color: "white" }}>
            Your new password must be different from previous used passwords.
          </Text>
        </View>
        <View style={{ marginTop: 25, marginBottom: 2 }}>
          <Text style={{ fontFamily: "System", fontSize: 15, color: "grey" }}>
            Password
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
            placeholderTextColor={"lightgrey"}
            secureTextEntry={true}
          />
        </View>
        <View style={{ marginTop: 2 }}>
          <Text style={{ fontFamily: "System", fontSize: 15, color: "grey" }}>
            Must be atleast 8 characters
          </Text>
        </View>
        <View style={{ marginTop: 15, marginBottom: 2 }}>
          <Text style={{ fontFamily: "System", fontSize: 15, color: "grey" }}>
            Confirm Password
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
            placeholderTextColor={"lightgrey"}
            secureTextEntry={true}
          />
        </View>
        <View style={{ marginTop: 2 }}>
          <Text style={{ fontFamily: "System", fontSize: 15, color: "grey" }}>
            Both passwords must match.
          </Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            width: 300,
            width: "93%",
            height: 50,
            borderRadius: 15,
            marginTop: 30,
            backgroundColor: "navy",
          }}
        >
          <Button title="Reset Password" color="white" />
        </View>
      </View>
    </View>
  );
};
export default ResetPassword;
