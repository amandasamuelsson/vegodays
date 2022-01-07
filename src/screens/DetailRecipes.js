import { StyleSheet, View, ScrollView, Image, Text } from "react-native";
import { CardButton } from "react-native-cards";

function DetailRecipes({ navigation, route }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={{
            uri: route.params.img,
          }}
          style={styles.img}
        />
        <CardButton
          onPress={() => {}}
          title="★ Favoritmarkera"
          color="#FEB553"
          style={{ alignItems: "flex-start" }}
        />

        <Text style={styles.titleText}>{route.params.title}</Text>

        <Text style={styles.ingredientsText}>
          {" "}
          <Text style={{ fontWeight: "bold" }}> Ingredienser: </Text>
          {"\n"}
          {route.params.ingredients}
        </Text>
        <Text style={styles.ingredientsText}>
          {" "}
          <Text style={{ fontWeight: "bold" }}>Instruktioner:</Text>
          {"\n"}
          {route.params.instructions}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    height: "100%",
    flexDirection: "column",
  },
  img: {
    height: 200,
    width: "90%",
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 20,
    paddingLeft: 20,
    alignItems: "center",
    alignSelf: "flex-start",
    justifyContent: "flex-start",
  },
  ingredientsText: {
    fontSize: 16,
    padding: 15,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default DetailRecipes;
