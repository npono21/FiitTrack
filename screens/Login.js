import React, { useEffect } from "react";

import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackBase,
  Keyboard,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <View style={{ marginTop: 100, marginLeft: 30 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 70,
            fontFamily: "System",
            color: "white",
          }}
        >
          FiitTrack
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          alignSelf: "center",
          width: 300,
          padding: 15,
          borderRadius: 15,
          marginTop: 10,
          marginTop: 100,
        }}
      >
        <TextInput
          style={{
            fontSize: 17,
            textAlign: "left",
            color: "black",
            fontFamily: "System",
          }}
          placeholder="Email"
          placeholderTextColor={"lightgrey"}
        />
      </View>
      <View
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          alignSelf: "center",
          width: 300,
          padding: 15,
          borderRadius: 15,
          marginTop: 17,
        }}
      >
        <TextInput
          style={{
            fontSize: 17,
            textAlign: "left",
            color: "black",
            fontFamily: "System",
          }}
          placeholder="Password"
          placeholderTextColor={"lightgrey"}
        />
      </View>
      <View
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          alignContent: "center",
          alignSelf: "center",
          width: 300,
          height: 50,
          borderRadius: 15,
          marginTop: 17,
          backgroundColor: "navy",
        }}
      >
        <Button
          title="Sign In"
          onPress={() => navigation.navigate("Workouts")}
          color="white"
        />
      </View>
      <View></View>
      <View>
        <Button
          title="Forgot Password?"
          color="white"
          onPress={() => navigation.navigate("ForgotPassword1")}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          backgroundColor: "white",
          width: 225,
          alignSelf: "center",
          borderRadius: 5,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <AntDesign name="apple1" size={20} color="black" />
        <Button title="Sign in with Apple" color="black"></Button>
      </View>
      <View
        style={{
          justifyContent: "center",
          backgroundColor: "white",
          width: 225,
          alignSelf: "center",
          borderRadius: 5,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <View style={{ marginRight: 15 }}>
          <AntDesign name="google" size={20} color="black" />
        </View>
        <Button title="Sign in with Google" color="grey"></Button>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 17,
            color: "grey",
            fontFamily: "System",
          }}
        >
          Don't have an account?
        </Text>
        <Button
          title="Sign Up"
          color="lightblue"
          onPress={() => navigation.navigate("Signup")}
        />
      </View>
    </View>
  );
};

export default Login;
