import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { Register } from "../screens/register/register";
import { Login } from "../screens/login/login";
import { Home } from "../screens/home/home";
import { Profile } from "../screens/profile/profile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeNav() {
  return (
    <Tab.Navigator
      //screenOptions={{ headerShown: false }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "grey",
      })}
    >
      <Tab.Screen
        name={"Home"}
        component={Home}
        // option={{
        //   tabBarIcon: ({ focused }) => (
        //     <Ionicons
        //       name={focused ? "home" : "home-outline"}
        //       color={focused ? "blue" : "grey"}
        //       size={20}
        //     />
        //   ),
        // }}
      />
      <Tab.Screen
        name={"Profile"}
        component={Profile}
        // option={{
        //   tabBarIcon: ({ focused }) => (
        //     <Ionicons
        //       name={focused ? "person" : "person-outline"}
        //       color={focused ? "blue" : "grey"}
        //       size={30}
        //     />
        //   ),
        // }}
      />
    </Tab.Navigator>
  );
}

function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="HomeScreen" component={HomeNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { Nav };
