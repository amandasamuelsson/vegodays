import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Pressable,
} from "react-native";
import Logo from "../components/Logo";

function OnboardingNotification({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://github.com/amandasamuelsson/vegodays/blob/master/assets/onboardingNotifications.jpg?raw=true",
        }}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.box}>
          {
            //</View></ImageBackground>Text style={styles.text}>VegoDays </Text>
          }
          <Logo />
          <Text style={styles.infoText}>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
          <View style={styles.buttonBox}>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("OnboardingStarMarked")}
            >
              <Text style={styles.buttonText}>Nästa</Text>
            </Pressable>

            <View style={{ flexDirection: "row" }}>
              <Text style={styles.stepsMarked}>. </Text>
              <Text style={styles.stepsMarked}>. </Text>
              <Text style={styles.stepsMarked}>. </Text>
              <Text style={styles.steps}>. </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    flexDirection: "column",
  },
  image: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  box: {
    marginTop: 105,
    height: 600,
    width: "85%",
    backgroundColor: "hsla(0, 0%, 75%, 0.4)",
    flexDirection: "column",
    alignSelf: "center",
    borderRadius: 15,
  },
  buttonBox: {
    flexDirection: "column",
    alignItems: "center",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "#508268",
    color: "#fff",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  steps: {
    fontSize: 140,
    color: "#E8E8E8",
  },
  stepsMarked: {
    fontSize: 140,
    color: "#508268",
  },
});

export default OnboardingNotification;
