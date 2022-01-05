import { 
  StyleSheet, 
  Text, 
  View, 
  ImageBackground,
  Pressable,
  ScrollView
 } from "react-native";
import Logo from "../components/Logo";
import Card from "../components/Card";

function StartPage({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: "https://github.com/amandasamuelsson/vegodays/blob/master/assets/onboardingInfo.jpg?raw=true",
          }}
          resizeMode="cover"
          style={styles.image}
          >
        <View style={styles.startWeek}>
          <Logo />
          <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("OptionDays")}
                >
                <Text style={styles.buttonText}>Starta din vecka</Text>
              </Pressable>
        </View>
          <View style={styles.startBox}>
            <Text style={styles.titleText} >
              Veckans recept
            </Text>
            <View style={styles.weekRecipes}>
              <ScrollView
                horizontal={true}
              > 
                <Card />
              </ScrollView>
            </View>
            <Text style={styles.titleText} >
              Favoritrecept
            </Text>
            <View style={styles.weekRecipes}>
              <ScrollView
                horizontal={true}
              > 
                <Card />
              </ScrollView>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    height: "100%",
  },
  startWeek: {
    flex: 1,
    height: 400,
    width: "100%",
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
  button: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "#508268",
    color: "#fff",
    marginBottom: 50,
    width: "50%"
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  startBox: {
    width: "100%",
    backgroundColor: "#fff",
  },
  titleText: {
    fontSize: 28,
    padding: 20,
  },
});

export default StartPage;
