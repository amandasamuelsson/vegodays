import { StyleSheet, View, ScrollView, Image, Text } from "react-native";
import { CardButton } from "react-native-cards";

function DetailRecipes() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://github.com/amandasamuelsson/vegodays/blob/master/assets/taco.jpg?raw=true",
          }}
          style={styles.img}
        />
        <CardButton
          onPress={() => {}}
          title="★ Favoritmarkera"
          color="#FEB553"
          style={{ alignItems: "flex-start" }}
        />

        <Text style={styles.titleText}>
          Svamptacos med spetskål & grön tahinisås
        </Text>

        <Text style={styles.ingredientsText}>
          {" "}
          <Text style={{ fontWeight: "bold" }}> Ingredienser: </Text>
          {"\n"}
          150 g blandad svamp (t ex ostronskivling, portabello och champinjon).
          1stor rödlök. 0.5 dl rapsolja. 0.5 dl japansk soja. 0.5 tsk torkad
          timjan. 0.5 krm svartpeppar. Grön tahinisås: 0.5 kruka koriander. 0.5
          kruka bladpersilja. 0.5 riven vitlöksklyfta. 0.5 dl ljus tahini. 1 msk
          färskpressad limejuice. 1 tsk strösocker. 1 krm salt. 0.5 dl vatten.
          Tillbehör: 125 g spetskål. 0.5 lime. 6 små tortillabröd. 0.5 dl
          rostade pumpakärnor.
        </Text>
        <Text style={styles.ingredientsText}>
          {" "}
          <Text style={{ fontWeight: "bold" }}> Instruktioner: </Text>
          {"\n"}
          Sätt ugnen på 225°C. Svamp: Ansa och skär svampen i bitar. Skala och
          skär rödlöken i klyftor. Fördela svamp och rödlök på en plåt. Blanda
          ihop resten av ingredienserna och häll marinaden över svampen och
          blanda runt. Ställ in i mitten av ugnen 25–30 minuter tills svampen
          släppt ifrån sig vätskan och fått fin färg. Rör om efter halva tiden.
          Tahinisås: Hacka örterna grovt. Skala och riv vitlöken. Mixa alla
          ingredienserna med stavmixer. Tillbehör: Hyvla spetskålen tunt, gärna
          på mandolin. Skär limen i klyftor. Värm tortillabröden i ugn eller en
          torr stekpanna. Toppa bröden med spetskål, svamp, tahinisås och
          pumpafrön. Servera med limeklyftor.
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
    fontSize: 24,
    padding: 10,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
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
