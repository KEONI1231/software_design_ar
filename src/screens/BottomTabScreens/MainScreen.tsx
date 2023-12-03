// screens/HomeScreen.tsx

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Image = Animated.Image;
import { useNavigation } from "@react-navigation/native";
import ProgressBar from "../../Components/Commons/ProgressBar";

Ionicons.loadFont();
MaterialIcon.loadFont();
const PrimaryColor = "#309582";
const SemiBlack = "#262626";


// 1. Stack의 타입을 정의합니다.
type RootStackParamList = {
  LoginScreen: undefined
};

// 2. HomeScreen에서 사용할 navigatiors prop의 타입을 지정합니다.
type IntroScreenNavigationProp = StackNavigationProp<
  RootStackParamList
>;

function FailProblem1() {

  return (
    <View style={{
      ...styles.RankCardViewStyle,
      marginRight: 6,
      borderTopWidth: 1
    }}>
      <Text style={{ marginRight: 8, fontSize: 12, marginLeft: 14, fontWeight: "bold", color: SemiBlack }}>사칙연산</Text>
      <View style={{ flexDirection: "row", alignItems: "center",justifyContent:'space-between' }}>

        <Text style={cardStyles.recStyle}></Text>
        <Text style={cardStyles.textStyle}> X 50 = 1550</Text>
      </View>
      <Text style={{ ...styles.rankCardTextStyle, marginRight: 6 }}>Tier : Gold</Text>
    </View>
  );
}

function FailProblem2() {

  return (
    <View style={{
      ...styles.RankCardViewStyle,
      marginRight: 6,
      marginTop: 0,

    }}>
      <Text style={{ marginRight: 8, fontSize: 12, marginLeft: 14, fontWeight: "bold", color: SemiBlack }}>사칙연산</Text>
      <View style={{ flexDirection: "row", alignItems: "center",justifyContent:'space-between'}}>


        <Text style={cardStyles.textStyle}>22 X 9 = </Text>
        <Text style={{...cardStyles.recStyle, marginLeft : 8}}></Text>
      </View>
      <Text style={{ ...styles.rankCardTextStyle, marginRight: 6 }}>Tier : Gold</Text>
    </View>
  );
}

function FailProblem3() {

  return (
    <View style={{
      ...styles.RankCardViewStyle,
      marginRight: 6,
      marginTop: 0

    }}>
      <Text style={{ marginRight: 8, fontSize: 12, marginLeft: 14, fontWeight: "bold", color: SemiBlack }}>영단어</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={cardStyles.textStyle}>사과 : </Text>
        <Text style={cardStyles.alphbetRec}></Text>
        <Text style={cardStyles.alphbetRec}></Text>
        <Text style={cardStyles.alphbetRec}></Text>
        <Text style={cardStyles.alphbetRec}></Text>
        <Text style={cardStyles.alphbetRec}></Text>

      </View>
      <Text style={{ ...styles.rankCardTextStyle, marginRight: 6,marginLeft:12 }}>Tier : Gold</Text>
    </View>
  );
}

const cardStyles = StyleSheet.create({
  recStyle: {
    borderRadius: 8,
    borderColor: PrimaryColor,
    borderWidth: 2,
    width: 51,
    height: 31,
    marginLeft: 8
  },
  textStyle: {
    fontWeight: "bold",
    marginLeft: 8,
    color: "grey",
    textAlign:'center',
  },
  alphbetRec : {
    borderRadius: 8,
    borderColor: PrimaryColor,
    borderWidth: 2,
    width: 26,
    height: 31,
    marginLeft:4,


  }

});

function RangkingCard() {

  return (
    <View style={ {
      ...styles.RankCardViewStyle,
      //marginRight: 6,
      borderWidth: 1,
      marginBottom : 32

    }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ marginRight: 8, fontSize: 20, marginLeft: 14, color: PrimaryColor }}>190</Text>
        <Text style={styles.rankCardTextStyle}>로블록스 존잼님</Text>
      </View>
      <Text style={{ ...styles.rankCardTextStyle, marginRight: 6 }}>572점</Text>

    </View>
  );
}

function MainScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1초 후에 로딩 상태를 false로 변경
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // 컴포넌트가 언마운트될 때 타이머 제거
    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    // 로딩 인디케이터 표시
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  const namedRanks = [
    { Name: "사칙연산", Score: 96, rank: "Tier" },
    { Name: "사칙연산", Score: 76, rank: 2 },
    { Name: "영어단어", Score: 100, rank: 3 }
  ];
  const navigation = useNavigation<IntroScreenNavigationProp>();
  const number = 1;

  return (
    <ScrollView>
      <View style={styles.safeAreaStyle}>
        <View style={styles.titleViewStyle}>
          <Image
            style={styles.titleImgStyle}
            source={require("../../../assets/GoldMedal.png")}
          />
          <View style={styles.titleInnerViewStyle}>
            <Text style={{...styles.titleTextStyle, marginLeft :0}}>로블록스 존잼님</Text>
            <Text style={styles.subTitleTextStyle}>골드</Text>
          </View>
        </View>
        <View style={styles.containerView}>
          <View style={styles.containerInnerView}>
            <Text style={styles.titleText}>지금까지 푼 사칙연산 문제</Text>
          </View>
          <Text style={{ ...styles.contentText, marginTop: 16 }}>35문제</Text>
          <Text style={styles.contentText}>정답률 : 97%</Text>
        </View>
        <View style={styles.containerView}>
          <View style={styles.containerInnerView}>
            <Text style={styles.titleText}>지금까지 푼 사칙연산 문제</Text>
          </View>
          <Text style={{ ...styles.contentText, marginTop: 16 }}>30문제</Text>
          <Text style={styles.contentText}>정답률 : 94%</Text>
        </View>
        <View style={styles.titleViewStyle}>
          <Text style={{ ...styles.titleTextStyle, marginLeft: 16 }}>내가 실패한 문제</Text>

        </View>
        <FailProblem1></FailProblem1>
        <FailProblem2></FailProblem2>
        <FailProblem3></FailProblem3>

        <View style={styles.titleViewStyle}>
          <Text style={styles.titleTextStyle}>로블록스 존잼님</Text>
        </View>

        <View style={styles.containerViewStyle}>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
            <Text style={styles.containerInnerText}>랭크</Text>
            <TouchableOpacity

              activeOpacity={0.8}>
              <Ionicons name={"help-circle-outline"} size={24} color="grey"></Ionicons>
            </TouchableOpacity>

          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View style={styles.cotainerInnerView}>
              <Text style={styles.tierTextStyle}>실버</Text>
              <Image
                style={styles.imgStyle}
                source={require("../../../assets/GoldIcon.png")}
              />

            </View>
            <View style={{ ...styles.cotainerInnerView, marginBottom: 0 }}>
              <Text style={{ ...styles.tierTextStyle, color: "grey", marginBottom: 0 }}>경험치</Text>

              <Ionicons name={"caret-down-outline"} size={24} color="grey"></Ionicons>
            </View>
            <View style={styles.cotainerInnerView}>
              <Text style={styles.tierTextStyle}>플래티넘</Text>

              <Image
                style={styles.imgStyle}
                source={require("../../../assets/PlaIcon.png")}
              />
            </View>
          </View>
          <ProgressBar totalStep={100} nowStep={50} />
        </View>
  <RangkingCard></RangkingCard>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white"
  },
  titleViewStyle: {
    flexDirection: "row",
    //justifyContent : 'flex-start',
    //alignItems : 'flex-start',
    width: "100%",
    marginTop: 32

  },
  titleInnerViewStyle: {

    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  titleTextStyle: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 16,
  },
  subTitleTextStyle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "grey",
    marginTop: 8

  },
  titleImgStyle: {
    borderRadius: Dimensions.get("window").width * 0.15, // 둥근 모양을 위한 값, 값은 조절 가능
    width: 80, // 이미지 너비, 값은 조절 가능
    height: 80,// 이미지 높이, 값은 조절 가능
    resizeMode: "contain", // 이미지가 너비와 높이에 맞게 조절되도록
    overflow: "hidden", // 이미지가 부모 컨테이너를 벗어나지 않도록
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
    marginTop: 16,
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
  },
  RankCardViewStyle: {
    flexDirection: "row",

    width: Dimensions.get("window").width - 32,
    justifyContent: "space-between",
    borderRadius: 12,
    borderBottomWidth: 1,
    borderColor: "grey",
    alignItems: "center",
    marginTop: 16,
    paddingRight: 8,
    paddingTop: 12,
    paddingBottom: 12
  },
  rankCardTextStyle: {
    fontSize: 14,
    fontWeight: "bold",
    color: SemiBlack
  },
  dotTextStyle: {
    fontSize: 40,
    alignItems: "center",
    margin: 0

  },

  cotainerInnerView: {
    fontSize: 12,
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 8,
    alignItems: "center"

  },
  containerInnerText: {

    fontWeight: "bold",
    marginRight: 8,
    textAlign: "center",
    fontSize: 20


  },
  tierTextStyle: {
    color: "#fa5ca1",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 4

  },
  imgStyle: {
    borderRadius: Dimensions.get("window").width * 0.15, // 둥근 모양을 위한 값, 값은 조절 가능
    width: 30, // 이미지 너비, 값은 조절 가능
    //height: Dimensions.get("window").width * 0.8, // 이미지 높이, 값은 조절 가능
    resizeMode: "contain", // 이미지가 너비와 높이에 맞게 조절되도록
    overflow: "hidden", // 이미지가 부모 컨테이너를 벗어나지 않도록
    alignItems: "center",
    justifyContent: "center"

  },
  containerViewStyle: {
    width: Dimensions.get("window").width - 32,
    height: 140,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#808080",
    marginTop: 16,
    padding: 16

  },

});
export default MainScreen;
