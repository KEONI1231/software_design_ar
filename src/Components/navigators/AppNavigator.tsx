// navigators/AppNavigator.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from '../../screens/IntroScreen';
import MainTabNavigator from './TabNavigator';
import DetailScreen from "../../screens/DetailScreen";
import LoginScreen from "../../screens/AuthScreens/LoginScreen";

const RootStack = createStackNavigator();

function AppNavigator() {
  return (
    <RootStack.Navigator initialRouteName="Intro">
      <RootStack.Screen name="IntroScreen" component={IntroScreen} options={{headerShown : false}} />
      <RootStack.Screen name="MainScreen" component={MainTabNavigator} options={{ headerShown: false }} />
      <RootStack.Screen name="DetailsScreen" component={DetailScreen} options={{ headerShown: false }} />
      <RootStack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
    </RootStack.Navigator>
  );
}
export default AppNavigator;
