import React, { useCallback, useRef, useState } from "react";
import { Animated, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Image = Animated.Image;
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Components/navigators/types";

const PrimaryColor = "#309582";
const SemiBlack = "#262626";
type RootStackNavigatorProp = StackNavigationProp<RootStackParamList>;

function LoginScreen() {
  const navigation = useNavigation<RootStackNavigatorProp>();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const onChangeId = useCallback((text: string) => {
    setId(text.trim());
  }, []);
  const onChangePw = useCallback((text: string) => {
    setPw(text.trim());
  }, [])
  const idRef = useRef<TextInput | null>(null);
  const pwRef = useRef<TextInput | null>(null);
  return (
    <View style={styles.safeAreaStyle}>
      <View style={styles.TextImageRowView}>
        <View style={styles.innerStyle}>
          <Text style={styles.titleTextStyle}>
            Jump To!에 오신것을
          </Text>
          <Text style={{ ...styles.titleTextStyle, marginTop: 12 }}>
            환영해요!
          </Text>
          <Text style={{ ...styles.titleTextStyle, marginTop: 20, fontSize: 16 }}>
            같이 모험을 떠나볼까요?
          </Text>
        </View>

        <Image
          style={styles.imgStyle}
          source={require("../../../assets/SplashScreen.png")}
        />
      </View>

      <View style={{justifyContent :"center", alignItems : "center", marginTop:24}}>
        <TextInput
          style={styles.loginTextInputStyle}
          placeholder="아이디"
          placeholderTextColor={"gray"}
          textContentType="emailAddress"
          value={id}
          onChangeText={onChangeId}
          ///onSubmitEditing={}
          ref={idRef}
          onSubmitEditing={() => {
            pwRef.current?.focus();
          }}
          returnKeyType="send"></TextInput>
        <TextInput
          style={styles.loginTextInputStyle}
          placeholder="비밀번호"
          placeholderTextColor={"gray"}
          textContentType="emailAddress"
          value={pw}
          onChangeText={onChangePw}
          ///onSubmitEditing={}
          ref={pwRef}
          onSubmitEditing={() => {
            pwRef.current?.focus();
          }}
          returnKeyType="send"></TextInput>
      </View>
      <View style={styles.helpViewStyle}>
        <Text style={styles.helpTextStyle}>
          회원가입
        </Text>
        <Text style={{ ...styles.helpTextStyle, marginTop: 12 }}>
          계정을 잊으셨나요?
        </Text>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          style={styles.bottomImgStyle}
          source={require("../../../assets/Book.png")}
        />
      </View>
      <TouchableOpacity
        style={styles.btnStyle}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("MainScreen")}>
        <Text style={styles.btnTextStyle}>로그인</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1
    //justifyContent: "center", // 변경된 부분
    //alignItems : "center",

  },

  TextImageRowView: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 16,
    alignItems: "center",
    marginTop: 40
  },
  imgStyle: {
    //borderRadius: Dimensions.get("window").width * 0.15, // 둥근 모양을 위한 값, 값은 조절 가능
    width: 180, // 이미지 너비, 값은 조절 가능
    height: 160, // 이미지 높이, 값은 조절 가능
    resizeMode: "cover", // 이미지가 너비와 높이에 맞게 조절되도록
    overflow: "hidden" // 이미지가 부모 컨테이너를 벗어나지 않도록
    //alignItems: "center",
    //marginTop : 24
  },
  titleTextStyle: {
    color: SemiBlack,
    fontSize: 24,
    fontWeight: "bold"
  },
  innerStyle: {
    flexDirection: "column"
  },
  loginTextInputStyle: {

    //width: Dimensions.get('window')
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 8,
    width: Dimensions.get("window").width - 32,
    height: 56,
    padding: 12,
    fontSize: 18,
    marginBottom: 24
    //backgroundColor: "white",
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 1.5,
    // elevation: 2.5,
  },

  helpViewStyle: {
    justifyContent: "center",
    alignItems: "center"
  },
  helpTextStyle: {
    color: "grey",
    fontSize: 14,
    fontWeight: "bold"
  },
  bottomImgStyle: {
    marginTop: 16,
    //borderRadius: Dimensions.get("window").width * 0.15, // 둥근 모양을 위한 값, 값은 조절 가능
    width: 160, // 이미지 너비, 값은 조절 가능
    //height: 160, // 이미지 높이, 값은 조절 가능
    resizeMode: "cover", // 이미지가 너비와 높이에 맞게 조절되도록
    overflow: "hidden" // 이미지가 부모 컨테이너를 벗어나지 않도록
    //alignItems: "center",

  },

  btnStyle: {
    position: "absolute",
    justifyContent: "center",
    height: 56,
    backgroundColor: PrimaryColor,
    //borderWidth: 1,
    borderRadius: 12,
    borderColor: Colors.black,
    //marginHorizontal: 32,
    alignItems: "center",
    bottom: 44,
    left: 16,
    right: 16


  },

  btnTextStyle: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: "bold",
    alignItems: "center"


  }
});


export default LoginScreen;

