// navigators/TabNavigator.tsx

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/BottomTabScreens/HomeScreen';
import SettingsScreen from '../../screens/BottomTabScreens/SettingsScreen';
import ChattingListScreen from "../../screens/BottomTabScreens/ChattingListScreen";
import NotificationScreen from "../../screens/BottomTabScreens/NotificationScreen";
import RequestSaleScreen from "../../screens/BottomTabScreens/RequestSale";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="ChattingListScreen" component={ChattingListScreen} />
      <Tab.Screen name="NotificationScreen" component={NotificationScreen} />
      <Tab.Screen name="SettingScreen" component={SettingsScreen} />
      <Tab.Screen name="RequestSaleScreen" component={RequestSaleScreen}></Tab.Screen>

    </Tab.Navigator>
  );
}
export default TabNavigator
