import { StatusBar } from 'expo-status-bar';
import {ImageBackground, StyleSheet, Text, View } from 'react-native';


 function StartPage() {
  return (
    <View style={styles.container}>
      <ImageBackground source= {{uri: 'https://github.com/amandasamuelsson/vegodays/blob/master/assets/backgroundImage.jpg?raw=true'}} resizeMode="cover" style={styles.image} >
      <Text style={styles.text}>VegoDays </Text>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});


export default StartPage; 