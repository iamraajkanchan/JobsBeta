import React from "react";
import { Text, View, StyleSheet } from "react-native";

class SettingsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>This is Settings Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default SettingsScreen;
