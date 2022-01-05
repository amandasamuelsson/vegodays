import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import {
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    View
  } from "react-native";

import React from 'react';

export default class RecCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }
    }

    componentDidMount () {

        return fetch ('https://amandasamuelsson.github.io/recipes/recipes.json')
            .then ( (response) => response.json() )
            .then ( (responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.recipes,
                })

            })

        .catch((error) => {
            console.log(error)
        });

    }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            )
        } else {

            let recipes = this.state.dataSource.map((item, key) => {
                return <ScrollView 
                key={key}
                horizontal={true}
                style={styles.cardView}
                > 
                <Card style={styles.card}>
                  <CardImage 
                    source={{uri: item.img}} 
                    style={styles.cardImg}
                  />
                  <CardTitle
                    title={item.title}
                    style={styles.cardTitle}/>
               
                
                  <CardContent text="Måndag" />
                  <CardAction 
                   //  separator={true} 
                    inColumn={false}>     
                    <CardButton
                      onPress={() => {}}
                      title="★ Favoritmarkera"       
                      color="#FEB553"
                    />
                  </CardAction>
                </Card>
               </ScrollView>
            });
            return (
              <View style={styles.container}>
                  {recipes}
              </View>
            );
          }
        }
      }
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    cardTitle: {
      fontSize: 38,
    },
    card: {
      width: 350,
    },
    cardImg: {
      backgroundColor: '#fff',
    },
});  
