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


function WeeklyRecipes({ navigation }) {
  const [selectedDay, setSelectedDay] = useState([]);

  const readData = async () => {
    try {
      const userData = await AsyncStorage?.getItem("trueData.selected");
      if (userData != false) {
        setSelectedDay(JSON.parse(userData));
        console.log("read data:" + JSON.stringify(JSON.parse(userData)));
      }
    } catch (e) {
      console.log(e);
    }
  };

  // displayData = async () => {
  //   try {
  //     AsyncStorage.getItem("data.selected").then((selectedDay) => {
  //       setselectedDay(selectedDay);
  //       JSON.parse(selectedDay);
  //     });
  //   } catch (error) {
  //     alert(error);
  //   }
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
          <View style={styles.weekBox}>
            <Logo />
          </View>
          <View style={styles.reminderBox}>
            <Text style={styles.titleText}>Påminnelser</Text>
            <Text style={styles.text}>Vill du aktivera påminnelser för veckan?</Text>
            <View style={styles.reminderSwitch}>
              <Reminders />
            </View>
          </View>
          <View style={styles.recipeBox}>
            <Text style={styles.titleText}>Veckans recept</Text>
            <FlatList
              keyExtractor={(item) => item.id}
              data={selectedDay}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.cardStyle}
                  onPress={() => navigation.navigate("DetailRecipes", item)}
                >
                  <Text style={styles.cardTitleText}>{item.day_name}</Text>

                  <Image
                    source={{
                      uri: item.img,
                    }}
                    style={styles.img}
                  />
                  <CardButton
                    onPress={() => pressHandler(item)}
                    title="★ Favoritmarkera"
                    color="#FEB553"
                    style={{ alignItems: "flex-end" }}
                  />
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
  },
  cardTitleText: {
    fontSize: 20,
    margin: 10,
  },
  text: {
    margin: 10,
  },
  reminderBox: {
    backgroundColor: "#fff",
    width: "100%",
    height: 200,
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
  },
  cardStyle: {
    width: "100%",
    marginBottom: 30,
    backgroundColor: "lightpink",
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

});

export default WeeklyRecipes;
