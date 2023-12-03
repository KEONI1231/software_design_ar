import React from "react";
import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Components/navigators/types";
import { useNavigation } from "@react-navigation/native";
import Image = Animated.Image;


const PrimaryColor = "#309582";
const SemiBlack = "#262626";

type MathSubjectScreenNavigationProp = StackNavigationProp<
  RootStackParamList
>;

function SubjectSelectScreen() {
  const navigation = useNavigation<MathSubjectScreenNavigationProp>();
  return (
    <View style={styles.safeAreaStyle}>

      <View style={styles.imgView}>
        <Image
          style={styles.imgStyle}
          source={require("../../../assets/Splash.png")}
        />
      </View>

      <View style={styles.containerView}>
        <View style={styles.containerInnerView}>
          <Text style={styles.titleText}>사칙연산</Text>
          <TouchableOpacity
            style={styles.btnStyle}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("MathSubjectScreen")}>
            <Text style={styles.btnTextStyle}>시작하기</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.contentText}>제한시간안에 사칙연산을 풀어보세요!</Text>
        <Text style={styles.contentText}>카메라로 숫자를 찾아보세요.</Text>
        <Text style={styles.contentText}>사칙연산의 세상으로 Jump!</Text>
      </View>

      <View style={{ ...styles.containerView, marginTop: 20 }}>
        <View style={styles.containerInnerView}>
          <Text style={styles.titleText}>영단어</Text>
          <TouchableOpacity
            style={styles.btnStyle}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("MathSubjectScreen")}>
            <Text style={styles.btnTextStyle}>시작하기</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.contentText}>제한시간안에 영단어 스펠링을 맞춰보세요!</Text>
        <Text style={styles.contentText}>카메라로 알파벳을 찾아보세요.</Text>
        <Text style={styles.contentText}>영단어 세상으로 Jump!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center"
  },
  imgView: {
    //alignItems: "center",

  },
  imgStyle: {
    borderRadius: Dimensions.get("window").width * 0.15, // 둥근 모양을 위한 값, 값은 조절 가능
    width: 350, // 이미지 너비, 값은 조절 가능
    //height: Dimensions.get("window").width * 0.8, // 이미지 높이, 값은 조절 가능
    resizeMode: "contain", // 이미지가 너비와 높이에 맞게 조절되도록
    //overflow: "hidden", // 이미지가 부모 컨테이너를 벗어나지 않도록
    alignItems: "center",
    justifyContent: "center"

  },
  containerView: {
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16,
    width: Dimensions.get("window").width - 24,
    borderRadius: 12,
    height: 132,
    marginTop: -10,
    //marginBottom: 32,
    backgroundColor: "white",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 1
  },
  containerInnerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 0
  },

  titleText: {
    color: PrimaryColor,
    fontWeight: "bold",
    fontSize: 20
  },
  contentText: {
    color: "grey",
    fontSize: 14
  },
  btnStyle: {
    justifyContent: "center",
    height: 36,
    backgroundColor: PrimaryColor,
    borderRadius: 12,
    width: 100,
    alignItems: "center"
  },
  btnTextStyle: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
    alignItems: "center"


  }
});
export default SubjectSelectScreen;
