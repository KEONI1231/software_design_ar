import React, { useRef } from "react";
import { Button, Dimensions, StyleSheet, Text, View, Animated, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Components/navigators/types";
import ProgressBar from "../../Components/Commons/ProgressBar";
import Image = Animated.Image;
import Ionicons from "react-native-vector-icons/Ionicons";


type IntroScreenNavigatorProp = StackNavigationProp<RootStackParamList>
const SemiBlack = "#262626";
const PrimaryColor = "#309582";

function LevelScreen() {

  const navigation = useNavigation<IntroScreenNavigatorProp>();
  return (
    <ScrollView>
      <View style={styles.safeAreaStyle}>
        <View style={styles.titleViewStyle}>
          <Text style={styles.titleTextStyle}>
            로블록스 존잼님
          </Text>
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

        <Text style={styles.pageTextStyle}>Gold</Text>
        <Text style={{ ...styles.pageTextStyle, fontSize: 20, marginTop: 12 }}>다음 티어까지 120점 남았습니다!</Text>
        <View style={styles.imgView}>
          <Image
            style={{ ...styles.imgStyle, width: 280 }}
            source={require("../../../assets/GoldMedal.png")}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    backgroundColor : 'white'

  },
  titleViewStyle: {
    // paddingLeft : 16,
    // paddingTop : 32,
    justifyContent: "flex-start"
  },
  titleTextStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
    color: "#262626"

  },
  containerViewStyle: {
    width: Dimensions.get("window").width - 32,
    height: 140,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#808080",
    marginTop: 32,
    padding: 16

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
  pageTextStyle: {
    color: PrimaryColor,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 24
  },
  imgView: {
    alignItems: "center",
    marginBottom: 24
  }
});
export default LevelScreen;
