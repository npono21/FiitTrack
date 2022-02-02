import React, { useState, setState, useEffect } from "react";

import {
  View,
  Text,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { auth } from "../firebase";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Workouts");
      }
    });
    return unsubscribe;
  }, []);

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "black" }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            alignSelf: "center",
            width: 300,
            padding: 15,
            borderRadius: 15,
            marginTop: 10,
            marginTop: 100,
            flexDirection: "row",
          }}
        >
          <View style={{ paddingRight: 10 }}>
            <AntDesign name="mail" size={20} color="black" />
          </View>
          <TextInput
            style={{
              fontSize: 17,
              textAlign: "left",
              color: "black",
              fontFamily: "System",
              width: 250,
            }}
            placeholder="Email"
            placeholderTextColor={"lightgrey"}
            onChangeText={(text) => setEmail(text)}
            value={email}
            textContentType="emailAddress"
          />
        </View>
        <View
          style={{
            backgroundColor: "white",
            alignSelf: "center",
            width: 300,
            padding: 15,
            borderRadius: 15,
            marginTop: 17,
            flexDirection: "row",
          }}
        >
          <View style={{ paddingRight: 10 }}>
            <AntDesign name="lock" size={20} color="black" />
          </View>
          <TextInput
            style={{
              fontSize: 17,
              textAlign: "left",
              color: "black",
              fontFamily: "System",
              width: 250,
            }}
            placeholder="Password"
            placeholderTextColor={"lightgrey"}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
        </View>
      </TouchableWithoutFeedback>
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
        <Button title="Sign In" onPress={handleLogin} color="white" />
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
    </KeyboardAvoidingView>
  );
};

export default Login;
