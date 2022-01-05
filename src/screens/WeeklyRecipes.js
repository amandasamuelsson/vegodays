import { 
    StyleSheet, 
    Text, 
    View, 
    ImageBackground,
    Pressable,
    ScrollView
} from "react-native";
import React, { useState } from 'react';
import Logo from "../components/Logo";
import Card from "../components/Card"
import Reminders from "../components/Reminders";


function WeeklyRecipes({ navigation }) {
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
          <View style={styles.daypicker}>
            <Logo />
          </View>
            <View style={styles.daysBox}>
                <View style={styles.remindersBox}>
                <Text style={styles.titleText} >
                    Påminnelser
                </Text>
                <Text style={styles.infoText}>
                    {" "}
                    Vill du aktivera påminnelser för veckan?
                </Text>
                <Reminders />
                </View>
                <View style={styles.cardBox}>
                <Text style={styles.titleText}>
                    Veckans recept
                </Text>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
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
        width: "50%"
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