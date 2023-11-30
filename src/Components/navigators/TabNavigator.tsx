// navigators/TabNavigator.tsx

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "../../screens/BottomTabScreens/MainScreen";
import SettingsScreen from "../../screens/BottomTabScreens/SettingsScreen";
import SubjectSelectScreen from "../../screens/BottomTabScreens/SubjectSelectScreen";
import NotificationScreen from "../../screens/BottomTabScreens/NotificationScreen";
import RequestSaleScreen from "../../screens/BottomTabScreens/RequestSale";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();


function TabNavigator() {
  const PrimaryColor = "#309582";
  Ionicons.loadFont();
  MaterialIcon.loadFont();

  return (
    <Tab.Navigator screenOptions={
      {
        tabBarInactiveTintColor: PrimaryColor,
        tabBarActiveTintColor: PrimaryColor,
        tabBarStyle: { backgroundColor: "transparent", borderTopColor: "grey", borderTopWidth: 0.5 },
        headerStyle: {
          borderBottomColor: "grey",
          backgroundColor: "transparent",
          borderBottomWidth: 0.5
        }
      }
    }>
      <Tab.Screen name="MainScreen" component={MainScreen} options={{
        title: "홈",
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name={focused ? "home" : "home-outline"} color={PrimaryColor} size={32} />
        )
      }} />
      <Tab.Screen name="SubjectSelectScreen" component={SubjectSelectScreen} options={{
        title: "문제",
        tabBarIcon: ({ focused, color, size }) => (
          <MaterialIcon name={focused ? "file-edit" : "file-edit-outline"} color={PrimaryColor} size={32} />
        )
      }} />
      <Tab.Screen name="NotificationScreen" component={NotificationScreen} options={{
        title: "레벨",
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name={focused ? "diamond" : "diamond-outline"} color={PrimaryColor} size={32} />
        )
      }} />
      <Tab.Screen name="SettingScreen" component={SettingsScreen} options={{
        title: "랭킹",
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name={focused ? "star" : "star-outline"} color={PrimaryColor} size={32} />
        )
      }} />
      <Tab.Screen name="RequestSaleScreen" component={RequestSaleScreen} options={{
        title: "마이페이지",
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name={focused ? "person" : "person-outline"} color={PrimaryColor} size={32} />
        )
      }}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default TabNavigator;
