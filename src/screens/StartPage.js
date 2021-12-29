import { StyleSheet, Text, View, ImageBackground } from "react-native";

function StartPage() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://github.com/amandasamuelsson/vegodays/blob/master/assets/onboardingInfo.jpg?raw=true",
        }}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>VegoDays </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  image: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default StartPage;
