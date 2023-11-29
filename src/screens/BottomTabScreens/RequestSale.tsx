import React from 'react'
import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Components/navigators/types";

type IntroScreenNavigatorProp = StackNavigationProp<RootStackParamList>
function RequestSaleScreen() {
  const navigation = useNavigation<IntroScreenNavigatorProp>()

  return (
    <View>
      <Text>asdfasdf</Text>
      <Button title = "Go to intro" onPress = {()=>{
        navigation.navigate('IntroScreen')
      }}></Button>

      <Button title = "디테일 스크린" onPress = {()=>{
        navigation.navigate('DetailsScreen')
      }}></Button>
    </View>
  )
}

const styles  = StyleSheet.create({
  safeAreaStyle : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center"
  }
})
export default RequestSaleScreen;
