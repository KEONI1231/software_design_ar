import React, { useState } from "react";
import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Viro3DObject, ViroARScene, ViroARSceneNavigator, ViroImage } from "@viro-community/react-viro";
import ProfileModal from "../../Components/Modal/SendAnsModal";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Components/navigators/types";
import { useNavigation } from "@react-navigation/native";

const PrimaryColor = "#309582";
const SemiBlack = "#262626";

type ARHelloWorldSceneProps = {
  textA: string;
  setTextA: React.Dispatch<React.SetStateAction<string>>;

  textB: string;
  setTextB: React.Dispatch<React.SetStateAction<string>>;

  textP: string;
  setTextP: React.Dispatch<React.SetStateAction<string>>;
  textL: string;
  setTextL: React.Dispatch<React.SetStateAction<string>>;
  textE: string;
  setTextE: React.Dispatch<React.SetStateAction<string>>;

  textM: string;
  setTextM: React.Dispatch<React.SetStateAction<string>>;


  textP1: string;
  setTextP1: React.Dispatch<React.SetStateAction<string>>;

  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;

};

function ARHelloWorldScene(props: ARHelloWorldSceneProps) {
  const [isAVisible, setIsAVisible] = useState(true);
  const [isBVisible, setIsBVisible] = useState(true);
  const [isPVisible, setIsPVisible] = useState(true);
  const [isP1Visible, setIsP1Visible] = useState(true);
  const [isLVisible, setIsLVisible] = useState(true);
  const [isMVisible, setIsMVisible] = useState(true);
  const [isEVisible, setIsEVisible] = useState(true);

  const imageSource = require("../../../assets/Splash.png"); // 이미지 경로
  const imageA = require("../../../assets/alpha/A.png"); // 이미지 경로
  const imageB = require("../../../assets/alpha/B.png"); // 이미지 경로
  const imageP = require("../../../assets/alpha/P.png"); // 이미지 경로
  const imageP1 = require("../../../assets/alpha/P.png"); // 이미지 경로
  const imageL = require("../../../assets/alpha/L.png"); // 이미지 경로
  const imageE = require("../../../assets/alpha/E.png"); // 이미지 경로
  const imageM = require("../../../assets/alpha/M.png"); // 이미지 경로

  const handleAObjectClick = () => {
    setIsAVisible(false); // 3D 오브젝트를 숨깁니다.
    props.setTextA("A");
  };
  const handleBObjectClick = () => {
    setIsBVisible(false); // 3D 오브젝트를 숨깁니다.
    props.setTextB("B");
  };
  const handleEObjectClick = () => {
    setIsEVisible(false); // 3D 오브젝트를 숨깁니다.
    props.setTextE("E");
  };
  const handleLObjectClick = () => {
    setIsLVisible(false); // 3D 오브젝트를 숨깁니다.
    props.setTextL("L");

  };
  const handleMObjectClick = () => {
    setIsMVisible(false); // 3D 오브젝트를 숨깁니다.
    props.setTextM("M");

  };
  const handlePObjectClick = () => {
    setIsPVisible(false); // 3D 오브젝트를 숨깁니다.
    props.setTextP("P");

  };
  const handleP1ObjectClick = () => {
    setIsP1Visible(false); // 3D 오브젝트를 숨깁니다.
    props.setTextP1("P");

  };
  return (
    <ViroARScene>
      {isAVisible && (
        <ViroImage
          source={imageA} // 이미지 파일 경로
          position={[-1.5, 1.50, -2]} // 이미지 위치 조정
          scale={[0.5, 0.5, 0.5]} // 이미지 크기 조정
          rotation={[30, 0, 0]} // 이미지 회전 조정
          onClick={() => {
            handleAObjectClick();

          }} // 이미지 클릭 이벤트
        />
      )}
      {isBVisible && (
        <ViroImage
          source={imageB} // 이미지 파일 경로
          position={[1.5, 1.5, -2]} // 이미지 위치 조정
          scale={[0.5, 0.5, 0.5]} // 이미지 크기 조정
          rotation={[40, 0, 0]} // 이미지 회전 조정
          onClick={handleBObjectClick} // 이미지 클릭 이벤트
        />
      )}
      {isPVisible && (
        <ViroImage
          source={imageP} // 이미지 파일 경로
          position={[0, 1, -2]} // 이미지 위치 조정
          scale={[0.5, 0.5, 0.5]} // 이미지 크기 조정
          rotation={[0, 0, 0]} // 이미지 회전 조정
          onClick={handlePObjectClick} // 이미지 클릭 이벤트
        />
      )}{isMVisible && (
      <ViroImage
        source={imageM} // 이미지 파일 경로
        position={[0, -1, -3]} // 이미지 위치 조정
        scale={[0.5, 0.5, 0.5]} // 이미지 크기 조정
        rotation={[0, 0, 0]} // 이미지 회전 조정
        onClick={handleMObjectClick} // 이미지 클릭 이벤트
      />
    )}{isLVisible && (
      <ViroImage
        source={imageL} // 이미지 파일 경로
        position={[1, 0, -2]} // 이미지 위치 조정
        scale={[0.5, 0.5, 0.5]} // 이미지 크기 조정
        rotation={[0, 0, 0]} // 이미지 회전 조정
        onClick={handleLObjectClick} // 이미지 클릭 이벤트
      />
    )}{isEVisible && (
      <ViroImage
        source={imageE} // 이미지 파일 경로
        position={[-0.6, -0.3, -2]} // 이미지 위치 조정
        scale={[0.5, 0.5, 0.5]} // 이미지 크기 조정
        rotation={[10, 0, 0]} // 이미지 회전 조정
        onClick={handleEObjectClick} // 이미지 클릭 이벤트
      />
    )}
      {isP1Visible && (
        <ViroImage
          source={imageP1} // 이미지 파일 경로
          position={[0.6, 0.3, -2]} // 이미지 위치 조정
          scale={[0.5, 0.5, 0.5]} // 이미지 크기 조정
          rotation={[10, 0, 0]} // 이미지 회전 조정
          onClick={handleP1ObjectClick} // 이미지 클릭 이벤트
        />
      )}

    </ViroARScene>

  );
}

type MathSubjectScreenNavigationProp = StackNavigationProp<
  RootStackParamList
>;

function MathSubjectScreen() {
  const navigation = useNavigation<MathSubjectScreenNavigationProp>();

  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");
  const [textP, setTextP] = useState("");
  const [textP1, setTextP1] = useState("");
  const [textL, setTextL] = useState("");
  const [textE, setTextE] = useState("");
  const [textM, setTextM] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.safeAreaStyle}>
      <ViroARSceneNavigator
        initialScene={{
          scene: () => <ARHelloWorldScene
            textA={textA}
            setTextA={setTextA}

            textB={textB}
            setTextB={setTextB}
            textL={textL}
            setTextL={setTextL}
            textP={textP}
            setTextP={setTextP}
            textM={textM}
            setTextM={setTextM}
            textE={textE}
            setTextE={setTextE}
            textP1={textP1}
            setTextP1={setTextP1}

            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            // ... 다른 상태와 설정 함수도 비슷하게 전달 ...
          />
        }}
        worldAlignment="GravityAndHeading"
        style={{ flex: 1 }}
      />
      <View style={styles.containerViewStyle}>
        <View style={styles.containerInnerView}>
          <Text style={styles.titleText}>"사과"는 영어로 뭘까요?</Text>
          <TouchableOpacity
            style={styles.btnStyle}
            activeOpacity={0.8}
            onPress={()=>{
              Alert.alert('Jump To!',"정답입니다!")
              navigation.goBack()
            }}>
            <Text style={styles.btnTextStyle}>정답제출</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.answerView}>
            <Text style={styles.answerText}>{textA}</Text>
            <View style={styles.answerInnerView}></View>
          </View>
          <View style={styles.answerView}>
            <Text style={styles.answerText}>{textP}</Text>
            <View style={styles.answerInnerView}></View>
          </View>
          <View style={styles.answerView}>
            <Text style={styles.answerText}>{textP1}</Text>
            <View style={styles.answerInnerView}></View>
          </View>
          <View style={styles.answerView}>
            <Text style={styles.answerText}>{textL}</Text>
            <View style={styles.answerInnerView}></View>
          </View>
          <View style={styles.answerView}>
            <Text style={styles.answerText}>{textE}</Text>
            <View style={styles.answerInnerView}></View>
          </View>
        </View>

      </View>
      {/*<ProfileModal isModalVisible={isModalVisible} toggleModal={toggleModal} />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    backgroundColor: "white"

  },
  answerView: {
    alignItems: "center",
    justifyContent: "center"
  },
  answerText: {
    fontWeight: "bold",
    fontSize: 40,
    color: "#6499E9"
  },
  answerInnerView: {
    width: 40,
    borderBottomWidth: 3,
    borderColor: "#FFB6D9"
  },
  containerViewStyle: {
    marginTop: 32,
    //alignItems : 'center',
    justifyContent: "space-between",
    width: Dimensions.get("window").width - 24,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 12,
    height: 130,
    marginBottom: 48,
    padding: 12,
    marginLeft: 12
  },
  containerInnerView: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  titleText: {
    color: PrimaryColor,
    fontWeight: "bold",
    fontSize: 20
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
export default MathSubjectScreen;
