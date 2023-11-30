/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";

import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/Components/navigators/AppNavigator";

function App(): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500); //스플래시 활성화 시간
  });
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );

}


export default App;
