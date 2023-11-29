// screens/HomeScreen.tsx

import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// 1. Stack의 타입을 정의합니다.
type RootStackParamList = {
  IntroScreen : undefined
};

// 2. HomeScreen에서 사용할 navigatiors prop의 타입을 지정합니다.
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

function HomeScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Intro" onPress={() => navigation.navigate('IntroScreen')} />
    </View>
  );
}

export default HomeScreen;
