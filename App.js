import OnboardingInfo from "./src/screens/OnboardingInfo";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingDays from "./src/screens/OnboardingDays";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingNotification from "./src/screens/OnboardingNotification";
import StartPage from "./src/screens/StartPage";
import OnboardingStarMarked from "./src/screens/OnboardingStarMarked";
import OptionDays from "./src/screens/OptionDays";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
