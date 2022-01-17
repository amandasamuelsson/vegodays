import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Logo from "../components/Logo";
import { CardButton } from "react-native-cards";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../components/Card";

function StarMarkedRecipes({ navigation }) {
  const [favoritCard, setfavoriteCard] = useState("");

  displayData = async () => {
    AsyncStorage.getItem("favorite").then((favoriteCard) => {
      setfavoriteCard(favoriteCard);
      JSON.parse(favoritCard);
    });
  };

  useEffect(() => {
    displayData();
  }, []);

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
          </View>
          <View style={styles.startBox}>
            <Text style={styles.titleText}>Favoritrecept</Text>
            <View style={styles.weekRecipes}>
              <Text>{favoritCard}</Text>
            </View>

            <FlatList
              horizontal={true}
              //keyExtractor={(item) => item.key}
              data={favoritCard}
              renderItem={(item) => (
                <TouchableOpacity
                  style={styles.cardStyle}
                  onPress={() =>
                    navigation.props.navigate("DetailRecipes", item)
                  }
                >
                  <Text style={styles.titleText}>{favoritCard.title}</Text>
                </TouchableOpacity>
              )}
            />
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
    width: "50%",
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

export default StarMarkedRecipes;
