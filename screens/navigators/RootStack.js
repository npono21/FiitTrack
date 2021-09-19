import React from "react";

import { Colors } from "../../components/styles";
const { primary, tertiary } = Colors;

//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Importing screens for Navigation.
import Login from "../Login";
import Signup from "../Signup";
import Workouts from "../Workouts";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTintColor: tertiary,
          headerTransparent: true,
          headerTitle: "",
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
        }}
        initialRouteName="Login"
      >
        <Stack.Screen
          options={{ headerTintColor: primary }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerTintColor: primary }}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          options={{ headerTintColor: primary }}
          name="Workouts"
          component={Workouts}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
