import { React } from "react";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";
import Image = Animated.Image;

function LoginScreen() {
  return (
    <View style={styles.safeAreaStyle}>
      <View style={styles.TextImageRowView}>
        <View style={styles.innerStyle}>
          <Text style={styles.titleTextStyle}>
            Jump To!에 오신것을
          </Text>
          <Text style={{...styles.titleTextStyle, marginTop : 12}}>
            환영해요!
          </Text>
          <Text style={{...styles.titleTextStyle, marginTop : 20, fontSize : 16}}>
            같이 모험을 떠나볼까요?
          </Text>
        </View>

        <Image
          style={styles.imgStyle}
          source={require("../../../assets/SplashScreen.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    justifyContent: "center", // 변경된 부분
    paddingHorizontal: 16
  },

  TextImageRowView: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24
  },
  imgStyle: {
    //borderRadius: Dimensions.get("window").width * 0.15, // 둥근 모양을 위한 값, 값은 조절 가능
    width: 180, // 이미지 너비, 값은 조절 가능
    height: 160, // 이미지 높이, 값은 조절 가능
    resizeMode: "cover", // 이미지가 너비와 높이에 맞게 조절되도록
    overflow: "hidden", // 이미지가 부모 컨테이너를 벗어나지 않도록
    //alignItems: "center",
    //marginTop : 24
  },
  titleTextStyle: {
    fontSize: 24,
    fontWeight: "bold"
  },
  innerStyle: {
    flexDirection: "column"
  }

});


export default LoginScreen;
