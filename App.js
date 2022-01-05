import OnboardingInfo from "./src/screens/OnboardingInfo";
import * as React from "react";
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

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnboardingInfo" component={OnboardingInfo} />
        <Stack.Screen name="OnboardingDays" component={OnboardingDays} />
        <Stack.Screen
          name="OnboardingNotification"
          component={OnboardingNotification}
        />
        <Stack.Screen
          name="OnboardingStarMarked"
          component={OnboardingStarMarked}
        />
        <Stack.Screen name="StartPage" component={StartPage} />
        <Stack.Screen name="OptionDays" component={OptionDays} />
        <Stack.Screen name="DayPicker" component={DayPicker} />
        <Stack.Screen name="OptionPortions" component={OptionPortions} />
        <Stack.Screen name="PortionsPicker" component={PortionsPicker} />
        <Stack.Screen name="DetailRecipes" component={DetailRecipes} />
        <Stack.Screen name="StarMarkedRecipes" component={StarMarkedRecipes} />
        <Stack.Screen name="WeeklyRecipes" component={WeeklyRecipes} />
        <Stack.Screen name="Reminders" component={Reminders} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
