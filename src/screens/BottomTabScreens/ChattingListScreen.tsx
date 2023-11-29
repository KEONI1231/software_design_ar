import React from 'react'
import { Button, StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Components/navigators/types";
import { useNavigation } from "@react-navigation/native";



type IntroScreenNavigationProp = StackNavigationProp<
  RootStackParamList
>;

function ChattingListScreen() {
  const navigation = useNavigation<IntroScreenNavigationProp>()
  return (
    <View style={styles.safeAreaStyle}>
      <Text>
        채팅 목록 페이지
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
export default ChattingListScreen;
