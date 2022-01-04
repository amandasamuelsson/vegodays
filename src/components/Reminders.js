import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";

const Reminders = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View>
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#508268" }}
        thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={styles.remindertext}>Slå på påminnelser</Text>
    </View>
    </View>
  );
}
export default Reminders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  remindertext: {
    paddingLeft: 10,
  }
});