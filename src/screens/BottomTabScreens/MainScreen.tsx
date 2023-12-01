// screens/HomeScreen.tsx

import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import  Ionicons  from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
Ionicons.loadFont();
MaterialIcon.loadFont();
// 1. Stack의 타입을 정의합니다.
type RootStackParamList = {
  IntroScreen : undefined
};

// 2. HomeScreen에서 사용할 navigatiors prop의 타입을 지정합니다.
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

function MainScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, backgroundColor : 'white',justifyContent: 'center', alignItems: 'center' }}>
      <Text>Main Screen</Text>
      <Ionicons name={"bag-outline"} size = {32} color = "black"></Ionicons>
      <MaterialIcon name={"file-edit-outline"} size = {32} color = "black"></MaterialIcon>
      <Button title="Go to Intro" onPress={() => navigation.navigate('IntroScreen')} />
    </View>
  );
}

export default MainScreen;
