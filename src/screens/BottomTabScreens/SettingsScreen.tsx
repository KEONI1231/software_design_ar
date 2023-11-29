// screens/HomeScreen.tsx

import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from "../../Components/navigators/types";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

// 1. Stack의 타입을 정의합니다.
type SettingsScreenNavigationProp = StackNavigationProp<RootStackParamList>;

//내가 이동 하고자 하는 스크린

type Props = {
  navigation: SettingsScreenNavigationProp;

};
function SettingsScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Setting Screen</Text>
      <Button title="Go to Intro" onPress={() => navigation.navigate('IntroScreen')} />
    </View>
  );
}

export default SettingsScreen;
