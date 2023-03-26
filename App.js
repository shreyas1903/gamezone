import React, { useState } from "react";
import * as Font from "expo-font";
import Home from "./screens/home";
import AppLoading from "expo-app-loading";
import Navigator from "./routes/drawer";
// import { StyleSheet, Text, View } from "react-native";
// we can also use expo start

// import the pages

const getFonts = () => {
  Font.loadAsync({
    // here the loadAsync is used to load the fonts from the expo-font
    // here the below method is asynchroous
    // asynchronous means the below function is not dependent on anhything
    // like in case of synchronous if the function executes then only the other function will execute
    // this happens in synchronous as the function is necessary to be executed as that function brings in the change

    // here we are pssing an object as a key value pair
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    // here we are using require as the function of require is
    // to go fetch the font by following the path
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  // const g = true;

  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => console.log("error")}
      />
    );
  }

  // return <Home />;
}

// export default App;
