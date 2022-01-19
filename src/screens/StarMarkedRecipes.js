import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import Logo from "../components/Logo";
import { CardButton } from "react-native-cards";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useState } from "react";

function StarMarkedRecipes({ navigation }) {
  const [favoritCard, setfavoriteCard] = useState("");

  const readData = async () => {
    try {
      const userData = await AsyncStorage?.getItem("favorite");
      if (userData != null) {
        setfavoriteCard(JSON.parse(userData));
        console.log("read data:" + JSON.stringify(JSON.parse(userData)));
      }
    } catch (e) {
      console.log(e);
    }
  };

  // displayData = async () => {
  //   await AsyncStorage.getItem("favorite").then((favoriteCard) => {
  //     setfavoriteCard(favoriteCard);
  //     JSON.parse(favoritCard);
  //   });
  // };

  useEffect(() => {
    readData();
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
            <View style={styles.weekRecipes}></View>

            <FlatList
              keyExtractor={(item) => item.id}
              data={favoritCard}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.cardStyle}
                  onPress={() => navigation.navigate("DetailRecipes", item)}
                >
                  <Text style={styles.titleText}>{item.title}</Text>

                  <Image
                    source={{
                      uri: item.img,
                    }}
                    style={styles.img}
                  />
                  <CardButton
                    onPress={() => removeFavorite(item.id)}
                    title="★ Ta bort favoritmarkering"
                    color="#FEB553"
                    style={{ alignItems: "flex-start" }}
                  />
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
  cardStyle: {
    width: 350,
    paddingLeft: 30,
  },
  img: {
    height: 200,
    width: 300,
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default StarMarkedRecipes;
