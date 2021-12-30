import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import {
    ScrollView,
    StyleSheet,
  } from "react-native";
function RecCard(){

return (

<ScrollView> 
 <Card>
   <CardImage 
     source={{uri: 'https://images.unsplash.com/photo-1604467715878-83e57e8bc129?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'}} 
    //  title="Top 10 South African beaches"
   />
   <CardTitle
     title="Svamptacos med spetskål"
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
)};
const styles = StyleSheet.create({
    cardTitle: {
      fontSize: 38,
    },
})  
export default RecCard;