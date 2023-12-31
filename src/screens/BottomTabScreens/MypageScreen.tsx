import React from "react";
import { Animated, Button, Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Components/navigators/types";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProgressBar from "../../Components/Commons/ProgressBar";
import Image = Animated.Image;
import { Colors } from "react-native/Libraries/NewAppScreen";

type IntroScreenNavigatorProp = StackNavigationProp<RootStackParamList>
const PrimaryColor = "#309582";
const SemiBlack = "#262626";

function MyPageScreen() {
  const navigation = useNavigation<IntroScreenNavigatorProp>();

  return (
    <ScrollView>
      <View style={styles.safeAreaStyle}>
        <View style={styles.titleViewStyle}>
          <Image
            style={styles.titleImgStyle}
            source={require("../../../assets/GoldMedal.png")}
          />
          <View style={styles.titleInnerViewStyle}>
            <Text style={styles.titleTextStyle}>로블록스 꿀잼님</Text>
            <Text style={styles.subTitleTextStyle}>골드</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.btnStyle}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.btnTextStyle}>프로필 수정</Text>
        </TouchableOpacity>
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
              <Text style={styles.tierTextStyle}>골드</Text>
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

        <View style={{ ...styles.containerViewStyle, marginTop: 32 }}>
          <Text style={styles.menuTextStyle}>계정 관리</Text>
          <View style={styles.menuContentInnerView}>
            <View style={styles.contentInnerSubTitleView}>
              <Ionicons name={"at-outline"} size={20} color={SemiBlack}></Ionicons>
              <Text style={styles.menuContentTextStyle}>ID 변경하기</Text>
            </View>
            <Text style={{ ...styles.menuContentTextStyle, color: "grey" }}>kh991231@naver.com</Text>
          </View>
          <View style={styles.menuContentInnerView}>
            <View style={styles.contentInnerSubTitleView}>
              <Ionicons name={"happy-outline"} size={20} color={SemiBlack}></Ionicons>
              <Text style={styles.menuContentTextStyle}>비밀번호 변경하기</Text>
            </View>

          </View>
        </View>

        <View style={{ ...styles.containerViewStyle, height: 280, marginTop: 32, marginBottom: 48 }}>
          <Text style={styles.menuTextStyle}>기타</Text>
          <View style={styles.menuContentInnerView}>
            <View style={styles.contentInnerSubTitleView}>
              <Ionicons name={"megaphone-outline"} size={20} color={SemiBlack}></Ionicons>
              <Text style={styles.menuContentTextStyle}>공지사항</Text>
            </View>

          </View>
          <View style={styles.menuContentInnerView}>
            <View style={styles.contentInnerSubTitleView}>
              <Ionicons name={"exit-outline"} size={20} color={SemiBlack}></Ionicons>
              <Text style={styles.menuContentTextStyle}>로그아웃</Text>
            </View>
          </View>
          <View style={styles.menuContentInnerView}>
            <View style={styles.contentInnerSubTitleView}>
              <Ionicons name={"trash-bin-outline"} size={20} color={SemiBlack}></Ionicons>
              <Text style={styles.menuContentTextStyle}>탈퇴하기</Text>
            </View>
          </View>
          <View style={styles.menuContentInnerView}>
            <View style={styles.contentInnerSubTitleView}>
              <Ionicons name={"headset-outline"} size={20} color={SemiBlack}></Ionicons>
              <Text style={styles.menuContentTextStyle}>문의하기</Text>
            </View>
          </View>
          <View style={styles.menuContentInnerView}>
            <View style={styles.contentInnerSubTitleView}>
              <Ionicons name={"extension-puzzle-outline"} size={20} color={SemiBlack}></Ionicons>
              <Text style={styles.menuContentTextStyle}>최신버전</Text>
              <Text style={{ ...styles.menuContentTextStyle, fontSize: 13, color: "grey" }}>현재(1.0.0)</Text>
            </View>
            <Text style={{ ...styles.menuContentTextStyle, fontSize: 13, color: "#6499E9" }}>최신버전 (1.0.0)</Text>
          </View>
          <View style={styles.menuContentInnerView}>
            <View style={styles.contentInnerSubTitleView}>
              <Ionicons name={"reader-outline"} size={20} color={SemiBlack}></Ionicons>
              <Text style={styles.menuContentTextStyle}>서비스 이용약관</Text>
            </View>
          </View>
        </View>
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
    fontSize: 20
  },
  subTitleTextStyle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "grey",
    marginTop: 8

  },
  containerViewStyle: {
    width: Dimensions.get("window").width - 32,
    height: 140,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "white",
    marginTop: 32,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2.5
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 1,
    backgroundColor: "white"
  },
  cotainerInnerView: {
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
  titleImgStyle: {
    borderRadius: Dimensions.get("window").width * 0.15, // 둥근 모양을 위한 값, 값은 조절 가능
    width: 80, // 이미지 너비, 값은 조절 가능
    height: 80,// 이미지 높이, 값은 조절 가능
    resizeMode: "contain", // 이미지가 너비와 높이에 맞게 조절되도록
    overflow: "hidden", // 이미지가 부모 컨테이너를 벗어나지 않도록
    alignItems: "center",
    justifyContent: "center"
  },

  btnStyle: {
    width: Dimensions.get("window").width - 32,
    justifyContent: "center",
    height: 32,
    backgroundColor: PrimaryColor,
    //borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.black,
    //marginHorizontal: 32,
    alignItems: "center",
    marginTop: 16
  },

  btnTextStyle: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: "bold",
    alignItems: "center"
  },
  menuTextStyle: {
    fontSize: 16,
    fontColor: "black",
    fontWeight: "bold"
  },
  menuContentInnerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16
  },
  menuContentTextStyle: {
    fontSize: 16,
    color: "black",
    marginLeft: 8,
    alignItems: "center"

  },
  contentInnerSubTitleView: {
    flexDirection: "row",
    alignItems: "center",
    color: "black"
  }
});
export default MyPageScreen;
