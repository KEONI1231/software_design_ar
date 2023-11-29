import React from 'react'
import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Components/navigators/types";

type IntroScreenNavigatorProp = StackNavigationProp<RootStackParamList>
function NotificationScreen() {

  const navigation = useNavigation<IntroScreenNavigatorProp>();
  return (
    <View style={styles.safeAreaStyle}>
      <Text>
        테스트 알림 페이지
      </Text>
      <Button title="Go to Intro" onPress={() => navigation.navigate('IntroScreen')} />
    </View>
  )
}

const styles = StyleSheet.create({
  safeAreaStyle : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center"
  }
})
export default NotificationScreen;
