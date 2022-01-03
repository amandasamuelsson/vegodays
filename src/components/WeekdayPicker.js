import * as React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

const Data = [
  {
    id: 1,
    day_name: 'Måndag',
  },
  {
    id: 2,
    day_name: 'Tisdag',
  },
  {
    id: 3,
    day_name: 'Onsdag',
  },
  {
    id: 4,
    day_name: 'Torsdag',
  },
  {
    id: 5,
    day_name: 'Fredag',
  },
  {
    id: 6,
    day_name: 'Lördag',
  },
  {
    id: 7,
    day_name: 'Söndag',
  },
];

import { Card, CardTitle } from 'react-native-cards';

export default class DayPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      renderData:Data
    };
  } 

  onPressHandler(id) {
    let renderData=[...this.state.renderData];
    for(let data of renderData){
      if(data.id==id){
        data.selected=(data.selected==null)?true:!data.selected;
        break;
      }
    }
    this.setState({renderData});
  }

  render() {
    
    return (
      <View>
        <FlatList
          //horizontal={true}
          style={styles.list}
          data={this.state.renderData}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
              <TouchableOpacity onPress={() => this.onPressHandler(item.id)}>
              <Card
                style={
                    item.selected==true
                    ? {
                        padding: 10,
                        borderRadius: 5,
                        backgroundColor: '#508268',
                        color: "#ffffff"
                    }
                    : {
                        padding: 10,
                        borderRadius: 5,
                        backgroundColor: '#e3e3e3',
                    }
                }>
                <CardTitle
                style={styles.cardText}
                title= {item.day_name}
                >
                </CardTitle>
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    list: {
        width: 300,
    },
    cardText: {
        flexDirection: "column",
        color: "#fff",
        textAlign: "center",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
    },
});
