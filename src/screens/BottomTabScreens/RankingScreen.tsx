// screens/HomeScreen.tsx

import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Dimensions, Animated, ScrollView, ActivityIndicator } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Components/navigators/types";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import Image = Animated.Image;

Ionicons.loadFont();
import Ionicons from "react-native-vector-icons/Ionicons";
// 1. Stack의 타입을 정의합니다.
type SettingsScreenNavigationProp = StackNavigationProp<RootStackParamList>;

//내가 이동 하고자 하는 스크린

type Props = {
  navigation: SettingsScreenNavigationProp;

};

interface RankPoint {
  Name: string;
  Score: number;
  rank: number;
}

interface RankingCardProps {
  rankInfo: RankPoint;
}

const PrimaryColor = "#309582";
const SemiBlack = "#262626";

function RangkingCard({ rankInfo }: RankingCardProps) {

  return (
    <View style={rankInfo.rank == 190 ? {
      ...styles.RankCardViewStyle,
      marginRight: 6,
      borderTopWidth: 1,
      marginBottom: 32

    } : { ...styles.RankCardViewStyle, marginRight: 6 }}>
      {/*<Image*/}
      {/*  style={styles.imgStyle}*/}
      {/*  source={require("../../../assets/Splash.png")}*/}
      {/*/>*/}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ marginRight: 8, fontSize: 20, marginLeft: 14, color: PrimaryColor }}>{rankInfo.rank}</Text>
        <Text style={styles.rankCardTextStyle}>{rankInfo.Name}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={styles.imgStyle1}
          source={rankInfo.rank == 8 || rankInfo.rank == 9 || rankInfo.rank == 10 ? require("../../../assets/Platinum_810x.webp") : rankInfo.rank == 190 ? require("../../../assets/GoldIcon.png") : require("../../../assets/Diamond.webp")}
        />
        <Text style={{ ...styles.rankCardTextStyle, marginRight: 6 }}>{rankInfo.Score}점</Text>
      </View>
    </View>
  );
}

function FirstRankCard({ rankInfo }: RankingCardProps) {
  return (
    <View style={styles.RankCardViewStyle}>
      {/*<Image*/}
      {/*  style={styles.imgStyle}*/}
      {/*  source={require("../../../assets/Splash.png")}*/}
      {/*/>*/}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={styles.imgStyle}
          source={require("../../../assets/GoldRank.png")}
        />
        <Text style={styles.rankCardTextStyle}>{rankInfo.Name}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={styles.imgStyle1}
          source={require("../../../assets/Diamond.webp")}
        />
        <Text style={{ ...styles.rankCardTextStyle, marginRight: 6 }}>{rankInfo.Score}점</Text>
      </View>
    </View>
  );
}

function SecondRankCard({ rankInfo }: RankingCardProps) {
  return (
    <View style={styles.RankCardViewStyle}>
      {/*<Image*/}
      {/*  style={styles.imgStyle}*/}
      {/*  source={require("../../../assets/Splash.png")}*/}
      {/*/>*/}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={styles.imgStyle}
          source={require("../../../assets/SilverRank.png")}
        />
        <Text style={styles.rankCardTextStyle}>{rankInfo.Name}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={styles.imgStyle1}
          source={require("../../../assets/Diamond.webp")}
        />
        <Text style={{ ...styles.rankCardTextStyle, marginRight: 6 }}>{rankInfo.Score}점</Text>
      </View>
    </View>
  );
}

function ThirdRankCard({ rankInfo }: RankingCardProps) {
  return (
    <View style={styles.RankCardViewStyle}>
      {/*<Image*/}
      {/*  style={styles.imgStyle}*/}
      {/*  source={require("../../../assets/Splash.png")}*/}
      {/*/>*/}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={styles.imgStyle}
          source={require("../../../assets/BronzeRank.png")}
        />
        <Text style={styles.rankCardTextStyle}>{rankInfo.Name}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={styles.imgStyle1}
          source={require("../../../assets/Diamond.webp")}
        />
        <Text style={{ ...styles.rankCardTextStyle, marginRight: 6 }}>{rankInfo.Score}점</Text>
      </View>
    </View>
  );
}

function RankingScreen() {
  const navigation = useNavigation<SettingsScreenNavigationProp>();
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
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  const namedRanks = [
    { Name: "토끼부리미", Score: 999, rank: 1 },
    { Name: "달님", Score: 996, rank: 2 },
    { Name: "우주하마", Score: 980, rank: 3 }
  ];
  const exampleRanks = [
    { Name: "목도림돔아뱀", Score: 959, rank: 1 },
    { Name: "해적왕", Score: 943, rank: 2 },
    { Name: "공주별", Score: 881, rank: 3 },
    { Name: "료이키텐카이", Score: 860, rank: 4 },
    { Name: "닌자거북이등껍질", Score: 840, rank: 5 },
    { Name: "이웃집또털어", Score: 821, rank: 6 },
    { Name: "우주로간개미핥기", Score: 810, rank: 7 },
    { Name: "할부로애틋하게", Score: 807, rank: 8 },
    { Name: "생갈치1호의행방불명", Score: 803, rank: 9 },
    { Name: "카드값줘체리", Score: 801, rank: 10 }

  ];
  const myRank = [
    { Name: "로블록스 꿀잼", Score: 572, rank: 190 }

  ];
  return (
    <ScrollView>
      <View style={{ ...styles.safeAreaStyle }}>
        <FirstRankCard rankInfo={namedRanks[0]}></FirstRankCard>
        <SecondRankCard rankInfo={namedRanks[1]}></SecondRankCard>
        <ThirdRankCard rankInfo={namedRanks[2]}></ThirdRankCard>
        {exampleRanks.map((rankInfo, index) => (
          <RangkingCard key={index} rankInfo={rankInfo} />
        ))}
        {/*<View>*/}
        {/*  <Text style={styles.dotTextStyle}>.</Text>*/}
        {/*  <Text style={styles.dotTextStyle}>.</Text>*/}
        {/*  <Text style={styles.dotTextStyle}>.</Text>*/}
        {/*</View>*/}
        <View style={{ marginTop: 32, marginBottom: 32 }}>
          <Ionicons name={"ellipsis-vertical"} size={40} color={PrimaryColor}></Ionicons>
        </View>
        <RangkingCard rankInfo={myRank[0]}></RangkingCard>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center"
  },

  RankCardViewStyle: {
    flexDirection: "row",
    width: Dimensions.get("window").width - 24,
    justifyContent: "space-between",
    borderRadius: 12,
    borderBottomWidth: 1,
    borderColor: "grey",
    alignItems: "center",

    paddingRight: 8,
    paddingTop: 12,
    paddingBottom: 12
  },

  imgStyle: {

    //borderRadius: Dimensions.get("window").width * 0.15, // 둥근 모양을 위한 값, 값은 조절 가능
    width: 30, // 이미지 너비, 값은 조절 가능
    height: 30, // 이미지 너비, 값은 조절 가능
    //height: Dimensions.get("window").width * 0.8, // 이미지 높이, 값은 조절 가능
    resizeMode: "contain", // 이미지가 너비와 높이에 맞게 조절되도록
    //overflow: "hidden", // 이미지가 부모 컨테이너를 벗어나지 않도록
    alignItems: "center",

    justifyContent: "flex-start",
    marginLeft: 4

  },
  imgStyle1: {

    marginRight: 8,
    //borderRadius: Dimensions.get("window").width * 0.15, // 둥근 모양을 위한 값, 값은 조절 가능
    width: 30, // 이미지 너비, 값은 조절 가능
    height: 30, // 이미지 너비, 값은 조절 가능
    //height: Dimensions.get("window").width * 0.8, // 이미지 높이, 값은 조절 가능
    resizeMode: "contain", // 이미지가 너비와 높이에 맞게 조절되도록
    //overflow: "hidden", // 이미지가 부모 컨테이너를 벗어나지 않도록
    alignItems: "center",

    justifyContent: "flex-start",
    marginLeft: 4

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

  }
});

export default RankingScreen;
