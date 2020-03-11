import React from "react";
import { Text, View, StyleSheet } from "react-native";

class AuthScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>This is Auth Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default AuthScreen;
