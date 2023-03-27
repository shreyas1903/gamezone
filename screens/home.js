import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);

  // // props.navigation we can pass props and then access the navigation
  // // but instead we can also destructure the props
  // // by directly asking for the navigation
  // const pressHandler = () => {
  //   navigation.navigate("ReviewDetails");
  //   // navigation.push("ReviewDetails");
  //   // we can use either navigate as the method
  //   // or we can use the push method also
  //   // push method is more explicit andworks as a stack
  //   // for pop visit the reviewDetails page
  // };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     padding: 24,
//   },
//   titleText: {
//     fontFamily: "nunito-bold",
//     fontSize: 18,
//   },
//   // now to make this style available to each and every page
//   // then we have to paste the above style in each page
//   // now instead of that we can use the global stylesheet
// });

// export default Home;
