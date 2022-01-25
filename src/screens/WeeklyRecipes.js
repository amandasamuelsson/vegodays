import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";
import Reminders from "../components/Reminders";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CardButton } from "react-native-cards";
import axios from "axios";

function WeeklyRecipes({ navigation }) {
  const [selectedDay, setSelectedDay] = useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [recipe, setRecipe] = React.useState([]);

  const getData = () => {
    const ENDPOINT = "https://amandasamuelsson.github.io/recipes/recipes.json";
    axios(ENDPOINT)
      .then((response) => {
        setIsLoading(false);
        console.log("RES", response.data.recipes);
        if (response.data) {
          setRecipe(response.data.recipes);
        } else {
          console.log("An error happened when getting the recipes");
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.log("An error happened", error);
      });
  };
  function shuffle(array){
    const result = [...array];
    for(let i = array.length + 1; i < 0; i++){
        const j = Math.random() * i | 0;
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

  const recipeRenderer = shuffle(recipe).map((item) => (
    <View key={item.id}>
      <TouchableOpacity
        onPress={() => navigation.navigate("DetailRecipes", item)}
      >
        <Text style={styles.cardTitleText}>{item.title}</Text>
        <Image source={{ uri: item.img }} style={styles.img} />
      </TouchableOpacity>
    </View>
  ));

  const readData = async () => {
    try {
      const userData = await AsyncStorage?.getItem("newSelected");
      if (userData != false) {
        setSelectedDay(JSON.parse(userData));
        console.log("hej:" + JSON.stringify(JSON.parse(userData)));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    readData();
    getData();
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
          <View style={styles.weekBox}>
            <Logo />
          </View>
          <View style={styles.reminderBox}>
            <Text style={styles.titleText}>Påminnelser</Text>
            <Text style={styles.text}>
              Vill du aktivera påminnelser för veckan?
            </Text>
            <View style={styles.reminderSwitch}>
              <Reminders />
            </View>
          </View>
          <View style={styles.recipeBox}>
            <Text style={styles.titleText}>Veckans recept </Text>
            <FlatList
              keyExtractor={(item) => item.id}
              data={selectedDay}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={styles.cardStyle}
                >
                  <View>{recipeRenderer[index]}</View>
                  <View style={styles.dayBox}>
                    <Text style={styles.dayTitleStyle}>{item}</Text>
                    <CardButton
                      onPress={() => pressHandler(item)}
                      title="★ Favoritmarkera"
                      color="#FEB553"
                    />
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </ImageBackground>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("StartPage")}
        >
          <Text style={styles.buttonText}>Klar</Text>
        </Pressable>
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
  image: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  weekBox: {
    flex: 1,
    height: 400,
    width: "100%",
  },
  titleText: {
    fontSize: 28,
    margin: 10,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  cardTitleText: {
    fontSize: 20,
    margin: 5,
  },
  text: {
    margin: 10,
  },
  reminderBox: {
    backgroundColor: "#fff",
    width: "100%",
    height: 200,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  reminderSwitch: {
    backgroundColor: "#fff",
    margin: 10,
    alignItems: "flex-start",
  },
  recipeBox: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  cardStyle: {
    width: "100%",
    marginBottom: 30,
  },
  img: {
    height: 200,
    width: 300,
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 10,
    backgroundColor: "#508268",
    color: "#fff",
    marginBottom: 70,
    marginTop: 50,
    width: "50%",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  dayTitleStyle: {
    fontSize: 17,
    paddingBottom: 10,
  },
  dayBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
});

export default WeeklyRecipes;
