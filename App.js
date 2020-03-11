import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AuthScreen from "./src/screens/AuthScreen";
import MapScreen from "./src/screens/MapScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import DeckScreen from "./src/screens/DeckScreen";
import ReveiwScreen from "./src/screens/ReviewScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

class App extends React.Component {
  render() {
    const Tab = createBottomTabNavigator();

    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Welcome" component={WelcomeScreen} />
          <Tab.Screen name="Auth" component={AuthScreen} />
          <Tab.Screen name="Main" component={MapScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
