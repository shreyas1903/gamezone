import "react-native-gesture-handler";
import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigator from "./routes/drawer";
// import { StyleSheet, Text, View } from "react-native";
// we can also use expo start

// import the pages

// here the loadAsync is used to load the fonts from the expo-font
// here the below method is asynchroous
// asynchronous means the below function is not dependent on anhything
// like in case of synchronous if the function executes then only the other function will execute
// this happens in synchronous as the function is necessary to be executed as that function brings in the change

// here we are pssing an object as a key value pair

// here we are using require as the function of require is
// to go fetch the font by following the path
const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}

// export default App;
