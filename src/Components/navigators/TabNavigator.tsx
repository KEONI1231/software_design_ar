// navigators/TabNavigator.tsx

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "../../screens/BottomTabScreens/MainScreen";
import SettingsScreen from "../../screens/BottomTabScreens/RankingScreen";
import SubjectSelectScreen from "../../screens/BottomTabScreens/SubjectSelectScreen";
import LevelScreen from "../../screens/BottomTabScreens/LevelScreen";
import MyPageScreen from "../../screens/BottomTabScreens/MypageScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import RankingScreen from "../../screens/BottomTabScreens/RankingScreen";

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
        tabBarStyle: { backgroundColor: "white", borderTopColor: "grey", borderTopWidth: 0.5 },
        headerStyle: {
          borderBottomColor: "grey",
          backgroundColor: "white",
          borderBottomWidth: 0.5,

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
      <Tab.Screen name="LevelScreen" component={LevelScreen} options={{
        title: "레벨",
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name={focused ? "diamond" : "diamond-outline"} color={PrimaryColor} size={32} />
        )
      }} />
      <Tab.Screen name="RankingScreen" component={RankingScreen} options={{
        title: "랭킹",
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name={focused ? "star" : "star-outline"} color={PrimaryColor} size={32} />
        )
      }} />
      <Tab.Screen name="MyPageScreen" component={MyPageScreen} options={{
        title: "마이페이지",
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons name={focused ? "person" : "person-outline"} color={PrimaryColor} size={32} />
        )
      }}></Tab.Screen>
    </Tab.Navigator>
  );
}

export default TabNavigator;
