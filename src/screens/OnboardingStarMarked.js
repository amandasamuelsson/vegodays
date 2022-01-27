import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import Logo from "../components/Logo";

function OnboardingStarMarked({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: "https://github.com/amandasamuelsson/vegodays/blob/master/assets/onboardingStart.jpg?raw=true",
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
              Hittar du ett recept som du tycker lite extra mycket om?
              Då finns det såklart möjlighet att favoritmarkera detta 
              och spara receptet under dina favoritmarkerade recept. 
            </Text>
            <View style={styles.buttonBox}>
              <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("StartPage")}
              >
                <Text style={styles.buttonText}>Starta</Text>
              </Pressable>

              <View style={{ flexDirection: "row" }}>
                <Text style={styles.stepsMarked}>. </Text>
                <Text style={styles.stepsMarked}>. </Text>
                <Text style={styles.stepsMarked}>. </Text>
                <Text style={styles.stepsMarked}>. </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 900,
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    flexDirection: "column",
  },
  infoText: {
    color: "#f4f4f4",
    fontSize: 16,
    textAlign: "left",
    flexDirection: "column",
    marginRight: 15,
    marginLeft: 15,
    paddingBottom: 40,
    fontWeight: "600",
    textShadowColor: "rgba(0, 0, 0, 0.85)",
    textShadowOffset: {width: -2, height: 3},
    textShadowRadius: 5,
    lineHeight: 24,
  },
  image: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  box: {
    marginTop: 80,
    marginBottom: 80,
    height: 600,
    width: "85%",
    backgroundColor: "hsla(0, 0%, 70%, 0.4)",
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
    backgroundColor: "#508268",
    color: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
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

export default OnboardingStarMarked;
