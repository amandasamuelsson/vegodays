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
import DetailRecipes from "./src/screens/DetailRecipes";
import StarMarkedRecipes from "./src/screens/StarMarkedRecipes";
import WeeklyRecipes from "./src/screens/WeeklyRecipes";
import Reminders from "./src/components/Reminders";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();
const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch == null) {
    return null;
  } else if (isFirstLaunch == true) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="OnboardingInfo"
            component={OnboardingInfo}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="OnboardingDays"
            component={OnboardingDays}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="OnboardingNotification"
            component={OnboardingNotification}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="OnboardingStarMarked"
            component={OnboardingStarMarked}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="StartPage" component={StartPage} />
          <Stack.Screen name="OptionDays" component={OptionDays} />
          <Stack.Screen name="DayPicker" component={DayPicker} />
          {/*<Stack.Screen name="OptionPortions" component={OptionPortions} /> */}
          {/* <Stack.Screen name="PortionsPicker" component={PortionsPicker} />*/}
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
          <Stack.Screen
            name="StarMarkedRecipes"
            options={{ title: "Mina favoriter" }}
            component={StarMarkedRecipes}
          />
          <Stack.Screen
            name="WeeklyRecipes"
            component={WeeklyRecipes}
            options={{ title: "Min vecka" }}
          />
          <Stack.Screen name="Reminders" component={Reminders} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="StartPage"
            component={StartPage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="OptionDays"
            component={OptionDays}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="DayPicker" component={DayPicker} />
          {/*<Stack.Screen
            name="OptionPortions"
            component={OptionPortions}
            options={{
              headerShown: false,
            }}
          />/*} 
         {/* <Stack.Screen name="PortionsPicker" component={PortionsPicker} /> */}
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
          <Stack.Screen
            name="StarMarkedRecipes"
            options={{ title: "Mina favoriter" }}
            component={StarMarkedRecipes}
          />
          <Stack.Screen
            name="WeeklyRecipes"
            component={WeeklyRecipes}
            options={{ title: "Min vecka" }}
          />
          <Stack.Screen
            name="Reminders"
            component={Reminders}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;
