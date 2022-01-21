import * as React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from "react-native";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Card, CardTitle } from "react-native-cards";
import { useEffect } from "react";

const Data = [
  {
    id: 1,
    title: "Måndag",
  },
  {
    id: 2,
    title: "Tisdag",
  },
  {
    id: 3,
    title: "Onsdag",
  },
  {
    id: 4,
    title: "Torsdag",
  },
  {
    id: 5,
    title: "Fredag",
  },
  {
    id: 6,
    title: "Lördag",
  },
  {
    id: 7,
    title: "Söndag",
  },
];

function Item({ id, title, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(title)}
      style={[
        styles.item,
        { backgroundColor: selected ? "#6e3b6e" : "#f9c2ff" },
      ]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function NewDayList() {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    (title) => {
      const newSelected = new Map(selected);
      newSelected.set(title, !selected.get(title));

      setSelected(newSelected);
      //newSelected.set("test", true);
      console.log(JSON.stringify(newSelected));
      // console.log(JSON.stringify);
      AsyncStorage.setItem(
        "data.selected",
        JSON.stringify(Array.from(newSelected.entries()))
      );
    },

    [selected]
  );
  // const readData = async () => {
  //   try {
  //     AsyncStorage.setItem("data.selected", JSON.stringify(selected));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   readData();
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Data}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.title}
            selected={!!selected.get(item.title)}
            onSelect={onSelect}
            style={styles.textStyle}
          />
        )}
        keyExtractor={(item) => item.title}
        extraData={selected}
      />
    </SafeAreaView>
  );
}

// onPressHandler(id) {
//   let renderData = [...this.state.renderData];
//   for (let data of renderData) {
//     if (data.id == id) {
//       data.selected = data.selected == null ? true : !data.selected;
//       // AsyncStorage.setItem("data.selected", JSON.stringify(renderData));

//       break;
//     }
//     for (let trueData of renderData) {
//       if (trueData.selected === true ) {
//         this.state.days.push(trueData[0]);
//         console.log(this.state.days);
//         // AsyncStorage.setItem("trueData.selected", JSON.stringify(trueData));

//         break;
//       }
//     }
//     //if data.selected = true, spara till AsyncStorage.
//     //Bara de som är true ska sparas och skickas vidare.
//   }
//     this.setState({ renderData });
// }

// render() {
//   return (
//     <View>
//       <TouchableOpacity onPress={this.saveData}>
//         <Text>Click to save data</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={this.displayData}>
//         <Text>Click to display data</Text>
//       </TouchableOpacity>

//       <FlatList
//         //horizontal={true}
//         style={styles.list}
//         data={this.state.renderData}
//         keyExtractor={(item) => item.id.toString()}
//         showsHorizontalScrollIndicator={false}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => this.onPressHandler(item.id)}>
//             <Card
//               style={
//                 item.selected == true
//                   ? {
//                       padding: 10,
//                       borderRadius: 5,
//                       backgroundColor: "#508268",
//                       color: "#ffffff",
//                     }
//                   : {
//                       padding: 10,
//                       borderRadius: 5,
//                       backgroundColor: "#e3e3e3",
//                     }
//               }
//             >
//               <CardTitle
//                 style={styles.cardText}
//                 title={item.day_name}
//               ></CardTitle>
//             </Card>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   list: {
//     width: 300,
//   },
//   cardText: {
//     flexDirection: "column",
//     color: "#fff",
//     textAlign: "center",
//     alignItems: "center",
//     alignSelf: "center",
//     justifyContent: "center",
//   },
// });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    height: 400,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  textStyle: {
    fontSize: 32,
  },
});
