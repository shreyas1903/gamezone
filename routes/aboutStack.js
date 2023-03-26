// here is where we will configure the stack navigator
import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about";

const screens = {
  About: {
    screen: About,
    // here we get an option of navigationOptions
    navigationOptions: {
      title: " About GameZone",
      //   headerStyle: { backgroundColor: "#ddd" },
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#777", height: 100 },
  },
});

export default AboutStack;
