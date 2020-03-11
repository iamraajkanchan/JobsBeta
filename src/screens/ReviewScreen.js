import React from "react";
import { Text, View, StyleSheet } from "react-native";

class ReviewScreen extends React.Component {
  static navigationOptions = {};
  render() {
    return (
      <View>
        <Text>This is Review Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ReviewScreen;
