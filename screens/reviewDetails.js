import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
    // here it basically just pops back the review page and goes back to the home page
    // very much similar to the stack(first in last out)
  };

  return (
    <View style={globalStyles.container}>
      <Text>{navigation.getParam("title")}</Text>
      <Text>{navigation.getParam("rating")}</Text>
      <Text>{navigation.getParam("body")}</Text>
      <Text>{navigation.getParam("key")}</Text>
      {/* <Button title="back to home screen" onPress={pressHandler}></Button> */}
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     padding: 24,
//   },
// });
