import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions
} from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Components/navigators/types";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Image = Animated.Image;
import { useNavigation } from "@react-navigation/native";
//import {BaseUrl} from '../Consts/EndPoints';

type RootStackNavigatorProp = StackNavigationProp<RootStackParamList>;

const PrimaryColor = "#309582";
const SemiBlack = "#262626";

function IntroScreen() {
  //console.log(BaseUrl);
  const navigation = useNavigation<RootStackNavigatorProp>();
  return (
    <View style={styles.safeAreaStyle}>
      <View>
        <Text style={styles.titleTextStyle}>Jump To!</Text>
        <Text style={styles.subTitleTextStyle}>Math & English</Text>
        <View style={styles.imgView}>
          <Image
            style={styles.imgStyle}
            source={require("../../assets/SplashScreen.png")}
          />
        </View>
        {/*<View style={{ alignItems: "center", marginVertical: 32 }}>*/}
        {/*  <Text style={styles.firstText}>우리 동네 중고 직거래 당근마켓</Text>*/}
        {/*  <Text style={styles.secondText}>*/}
        {/*    당근마켓은 동네 직거래 마켓이에요.*/}
        {/*  </Text>*/}
        {/*  <Text style={styles.secondText}>*/}
        {/*    내 동네를 설정하고 시작해보세요!*/}
        {/*  </Text>*/}
        {/*</View>*/}
      </View>
      <TouchableOpacity
        style={styles.btnStyle}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("LoginScreen")}>
        <Text style={styles.btnTextStyle}>시작하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    justifyContent: "center", // 변경된 부분
    paddingHorizontal: 12
  },
  titleTextStyle: {
    fontSize: 44,
    color: PrimaryColor,
    textAlign: "center",
    fontWeight: "bold"
  },
  subTitleTextStyle: {
    marginTop: 16,
    fontSize: 20,
    color: PrimaryColor,
    textAlign: "center",
    fontWeight: "bold"
  },
  imgView: {
    alignItems: "center",
    marginBottom: 24
  },
  imgStyle: {
    borderRadius: Dimensions.get("window").width * 0.15, // 둥근 모양을 위한 값, 값은 조절 가능
    width: 374, // 이미지 너비, 값은 조절 가능
    //height: Dimensions.get("window").width * 0.8, // 이미지 높이, 값은 조절 가능
    resizeMode: "cover", // 이미지가 너비와 높이에 맞게 조절되도록
    overflow: "hidden", // 이미지가 부모 컨테이너를 벗어나지 않도록
    alignItems: "center",
    justifyContent: "center",

  },
  firstText: {
    fontWeight: "bold",
    fontSize: 24,
    color: Colors.black,
    marginBottom: 12
  },
  secondText: {
    color: SemiBlack,
    fontWeight: "bold",
    fontSize: 20,
    padding: 2
  },

  btnStyle: {
    position : "absolute",
    justifyContent :"center",
    height: 56,
    backgroundColor: PrimaryColor,
    //borderWidth: 1,
    borderRadius: 12,
    borderColor: Colors.black,
    //marginHorizontal: 32,
    alignItems: "center",
    bottom : 44,
    left: 16,
    right : 16,


  },

  btnTextStyle: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: "bold",
    alignItems:"center",


  }
});

export default IntroScreen;
