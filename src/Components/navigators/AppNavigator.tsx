// navigators/AppNavigator.tsx

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import IntroScreen from "../../screens/IntroScreen";
import MainTabNavigator from "./TabNavigator";
import DetailScreen from "../../screens/DetailScreen";
import LoginScreen from "../../screens/AuthScreens/LoginScreen";

const PrimaryColor = "#309582";
const RootStack = createStackNavigator();

function AppNavigator() {
  return (
    <RootStack.Navigator initialRouteName="IntroScreen"
                         screenOptions={{
                           headerBackgroundContainerStyle: {
                             backgroundColor: "white"
                           }
                         }}
    >
      <RootStack.Screen name="IntroScreen" component={IntroScreen} options={{ headerShown: false }} />
      <RootStack.Screen name="MainScreen" component={MainTabNavigator} options={{ headerShown: false }} />
      <RootStack.Screen name="DetailsScreen" component={DetailScreen} options={{ headerShown: false }} />
      <RootStack.Screen name="LoginScreen" component={LoginScreen}
                        options={{
                          headerShown: true,
                          title: "",
                          headerBackTitle: "",
                          headerBackTitleVisible: false, // 뒤로 가기 텍스트 숨기기
                          headerBackTitleStyle: {
                            color: PrimaryColor
                          },
                          headerStyle: {
                            backgroundColor: "transparent", // 헤더 배경색 투명하게 설정
                            borderBottomColor: "grey",
                            borderBottomWidth: 1
                          },
                          headerTintColor: PrimaryColor

                        }} />
    </RootStack.Navigator>
  );
}

export default AppNavigator;
