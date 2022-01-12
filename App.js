import OnboardingInfo from "./src/screens/OnboardingInfo";
import * as React from "react";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingDays from "./src/screens/OnboardingDays";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingNotification from "./src/screens/OnboardingNotification";
import StartPage from "./src/screens/StartPage";
import OnboardingStarMarked from "./src/screens/OnboardingStarMarked";
import OptionDays from "./src/screens/OptionDays";
import DayPicker from "./src/components/WeekdayPicker";
import OptionPortions from "./src/screens/OptionPortions";
import PortionsPicker from "./src/components/PortionsPicker";
import DetailRecipes from "./src/screens/DetailRecipes";
import StarMarkedRecipes from "./src/screens/StarMarkedRecipes";
import WeeklyRecipes from "./src/screens/WeeklyRecipes";
import Reminders from "./src/components/Reminders";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();
const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    })

  }, []);

  if(isFirstLaunch == null) {
    return null;
  } else if ( isFirstLaunch == true ) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="OnboardingInfo" component={OnboardingInfo} />
          <Stack.Screen name="OnboardingDays" component={OnboardingDays} />
          <Stack.Screen name="OnboardingNotification" component={OnboardingNotification} />
          <Stack.Screen name="OnboardingStarMarked" component={OnboardingStarMarked} />
          <Stack.Screen name="StartPage" component={StartPage} />
          <Stack.Screen name="StartPage" component={StartPage} />
        <Stack.Screen name="OptionDays" component={OptionDays} />
        <Stack.Screen name="DayPicker" component={DayPicker} />
        <Stack.Screen name="OptionPortions" component={OptionPortions} />
        <Stack.Screen name="PortionsPicker" component={PortionsPicker} />
        <Stack.Screen
          name="DetailRecipes"
          component={DetailRecipes}
          options={({ route }) => ({
            title: route.params.title,
            img: route.params.img,
            instructions: route.params.instructions,
            ingredients: route.params.ingredients,
          })}
          />
        <Stack.Screen name="StarMarkedRecipes" component={StarMarkedRecipes} />
        <Stack.Screen name="WeeklyRecipes" component={WeeklyRecipes} />
        <Stack.Screen name="Reminders" component={Reminders} />

        </Stack.Navigator>
    </NavigationContainer>
    );
  } else {

    
    return (
      <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="OnboardingInfo" component={OnboardingInfo} />
        <Stack.Screen name="OnboardingDays" component={OnboardingDays} />
        <Stack.Screen
        name="OnboardingNotification"
        component={OnboardingNotification}
        />
        <Stack.Screen
        name="OnboardingStarMarked"
        component={OnboardingStarMarked}
      /> */}
        <Stack.Screen name="StartPage" component={StartPage} />
        <Stack.Screen name="OptionDays" component={OptionDays} />
        <Stack.Screen name="DayPicker" component={DayPicker} />
        <Stack.Screen name="OptionPortions" component={OptionPortions} />
        <Stack.Screen name="PortionsPicker" component={PortionsPicker} />
        <Stack.Screen
          name="DetailRecipes"
          component={DetailRecipes}
          options={({ route }) => ({
            title: route.params.title,
            img: route.params.img,
            instructions: route.params.instructions,
            ingredients: route.params.ingredients,
          })}
          />
        <Stack.Screen name="StarMarkedRecipes" component={StarMarkedRecipes} />
        <Stack.Screen name="WeeklyRecipes" component={WeeklyRecipes} />
        <Stack.Screen name="Reminders" component={Reminders} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
}

export default App;
