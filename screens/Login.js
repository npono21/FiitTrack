import React, { useEffect } from "react";

import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
} from "react-native";

const Login = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <View style={{ marginTop: 100, marginLeft: 30 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 55,
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
          borderRadius: 25,
          marginTop: 10,
          marginTop: 75,
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
          borderRadius: 25,
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
          borderRadius: 25,
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
        <Button title="Forgot Password?" color="white" />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
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
