import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { globalStyles, images } from "../styles/global";

export default function ReviewDetails({ navigation }) {
  // const pressHandler = () => {
  //   navigation.goBack();
  //   // here it basically just pops back the review page and goes back to the home page
  //   // very much similar to the stack(first in last out)
  // };
  const rating = navigation.getParam("rating");

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>
          {navigation.getParam("title")}
        </Text>
        <Text>{navigation.getParam("body")}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     padding: 24,
//   },
// });
