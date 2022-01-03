import { 
    StyleSheet, 
    Text, 
    View, 
    ImageBackground,
    Pressable,
    ScrollView,
   } from "react-native";
import React, { useState } from "react";
import Logo from "../components/Logo";
import PortionsPicker from "../components/PortionsPicker";


  
  function OptionPortions({ navigation }) {
    return (
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
                <Text style={styles.titleText} >
                    Välj antal portioner
                </Text>
                <Text style={styles.infoText}>
                    {" "}
                    Välj hur många portioner som ska lagas
                </Text>
                <PortionsPicker />
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate("StartPage")}
                >
                <Text style={styles.buttonText}>Nästa</Text>
                </Pressable>

            </View>
          </ImageBackground>
        </View>
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
      height: 150,
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
      width: "100%",
      flex: 2,
      height: "100%",
      backgroundColor: "#fff",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 50,
      paddingBottom: 40,
    },
    titleText: {
      fontSize: 28,
      padding: 10,
    },
    pickerContainer: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
    },
  });
  
  
 export default OptionPortions; 