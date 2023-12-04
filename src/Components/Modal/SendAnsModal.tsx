import React, { useCallback, useEffect, useState } from "react";
import {
  Alert,
  Text,
  Pressable,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView, ActivityIndicator
} from "react-native";
import Modal from "react-native-modal/dist/modal";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigators/types";
import { useNavigation } from "@react-navigation/native";

interface ProfileModalProps {
  isModalVisible: boolean;
  toggleModal: () => void;
}

const PrimaryColor = "#fff6db";
type RootStackNavigatorProp = StackNavigationProp<RootStackParamList>;

const ProfileModal: React.FC<ProfileModalProps> = ({
                                                     isModalVisible,
                                                     toggleModal
                                                   }) => {
  const navigation = useNavigation<RootStackNavigatorProp>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isModalVisible) {
      timer = setTimeout(() => {
        toggleModal()
        navigation.navigate("MainScreen");
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [isModalVisible, navigation]);

  // 로딩 인디케이터 표시

  return (
    <Modal
      isVisible={isModalVisible}
      style={{ margin: 0 }}
      backdropOpacity={0.5}
    >
      <View style={styles.defaultViewStyle}>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 16 }}>
          로그인 중
        </Text>
        <ActivityIndicator style={{ marginTop: 32 }} size="large" />
      </View>
    </Modal>
  );


};

const styles = StyleSheet.create({
  defaultViewStyle: {
    width: "80%",
    height: "20%",
    backgroundColor: "white",
    padding: 20,
    //alignItems: "center",
    alignSelf: "center",
    zIndex: 10,
    justifyContent: "flex-start"
  },

  imageStyle: {
    borderRadius: 24, // 둥근 모양을 위한 값, 값은 조절 가능
    width: Dimensions.get("window").width * 0.4, // 이미지 너비, 값은 조절 가능
    height: Dimensions.get("window").width * 0.4, // 이미지 높이, 값은 조절 가능
    resizeMode: "cover", // 이미지가 너비와 높이에 맞게 조절되도록
    overflow: "hidden", // 이미지가 부모 컨테이너를 벗어나지 않도록
    alignItems: "center",
    justifyContent: "center"
  },
  bottomViewStyle: {
    justifyContent: "flex-end",
    flex: 1
  },
  closeBtnStyle: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "black",
    paddingHorizontal: 24,
    paddingVertical: 12,
    textAlign: "center",
    color: "black"
  },
  statusMessageStyle: {
    textAlign: "center",
    marginTop: 24,
    //fontSize: 18,
    fontWeight: "bold"
  }
});
export default ProfileModal;
