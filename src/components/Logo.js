import { Image, StyleSheet } from "react-native";

function Logo() {
  return (
    <Image
      source={{
        uri: "https://github.com/amandasamuelsson/vegodays/blob/master/assets/logo.png?raw=true",
      }}
      style={styles.logo}
    ></Image>
  );
}

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    width: "100%",
  },
});

export default Logo;
