import * as React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
        {
          backgroundColor: selected ? "#508268" : "#e3e3e3",
          borderRadius: 10,
        },
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
      console.log(JSON.stringify(newSelected));
      // console.log(JSON.stringify);
      AsyncStorage.setItem(
        "newSelected",
        JSON.stringify(Array.from(newSelected.entries()))
      );
      console.log(newSelected);
    },

    [selected]
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ width: 300 }}
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    color: "#ffffff",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 25,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 20,
  },
});
