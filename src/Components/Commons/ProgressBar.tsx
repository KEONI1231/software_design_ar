import { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

interface IStep {
  totalStep: number;
  nowStep: number;
}

function ProgressBar({ totalStep, nowStep }: IStep) {
  const loaderValue = useRef(new Animated.Value(0)).current;
  const load = (count: number) => {
    Animated.timing(loaderValue, {
      toValue: (count / totalStep) * 100,
      duration: 1000,
      useNativeDriver: false
    }).start();
  };
  const width = loaderValue.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp"
  });
  useEffect(() => {
    load(nowStep);
  }, [load, nowStep]);
  return (
    <View>
      <View style={styles.bar}>
        <Animated.View
          style={{
            backgroundColor: "#FFB6D9",
            width,
            height: 10,
            borderRadius : 12

          }}>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  bar: {
    width: "100%",
    height: 10,
    backgroundColor: "#D9D9D9",
    borderRadius : 12,
  },
  step: {
    color: "#AAC9CE",
    fontWeight: "600",
    fontSize: 22,
    padding: 22,
    lineHeight: 22 * 1.3,
    textAlign: "center",
    borderRadius : 12,
  }
});
export default ProgressBar;
