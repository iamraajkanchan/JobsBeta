import React from "react";
import { Text, View, StyleSheet } from "react-native";

class WelcomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>This is Welcome Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default WelcomeScreen;
