import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";
import Reminders from "../components/Reminders";
import AsyncStorage from "@react-native-async-storage/async-storage";

function WeeklyRecipes({ navigation }) {
  const [selectedDay, setselectedDay] = useState([]);

  displayData = async () => {
    try {
      AsyncStorage.getItem("data.selected").then((selectedDay) => {
        setselectedDay(selectedDay);
        JSON.parse(selectedDay);
      });
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    displayData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={displayData}>
          <Text>Click to display data</Text>
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri: "https://github.com/amandasamuelsson/vegodays/blob/master/assets/onboardingInfo.jpg?raw=true",
          }}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.daypicker}>
            <Logo />
          </View>
          <View style={styles.daysBox}>
            <View style={styles.remindersBox}>
              <Text style={styles.titleText}>Påminnelser</Text>
              <Text style={styles.infoText}>
                {" "}
                Vill du aktivera påminnelser för veckan?
              </Text>
              <Reminders />
            </View>
            <View style={styles.cardBox}>
              <Text style={styles.titleText}>Veckans recept</Text>
              <Text>{selectedDay}</Text>

              <FlatList
                horizontal={true}
                data={displayData}
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
                      onPress={() => {}}
                      title="★ Favoritmarkera"
                      color="#FEB553"
                      style={{ alignItems: "flex-start" }}
                    />
                  </TouchableOpacity>
                )}
              />
            </View>

            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("StartPage")}
            >
              <Text style={styles.buttonText}>Klar</Text>
            </Pressable>
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
  daypicker: {
    flex: 1,
    height: 200,
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
  infoText: {
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 5,
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
    marginBottom: 70,
    marginTop: 10,
    width: "50%",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  daysBox: {
    flex: 2,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 180,
    paddingBottom: 100,
  },
  remindersBox: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 30,
  },
  cardBox: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 28,
    padding: 10,
  },
});

export default WeeklyRecipes;
