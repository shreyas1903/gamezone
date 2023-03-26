// here is where we will configure the stack navigator
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const screens = {
  Home: {
    screen: Home,
    // here we get an option of navigationOptions
    navigationOptions: {
      title: "GameZone",
      //   headerStyle: { backgroundColor: "#ddd" },
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    // here we are using the other navigation options
    // here we use the options for the header and the title and etc
    navigationOptions: {
      title: "ReviewDetails",
      //   headerStyle: { backgroundColor: "#ddd " },
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#777", height: 100 },
  },
});

export default HomeStack;
// now here above the createAppContainer returns a component
// the component will contain all of the information wrt to the navigation homestack
// the component can be rendered to the app.js
