// here is where we will configure the stack navigator
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

// here we are using the other navigation options
// here we use the options for the header and the title and etc
const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />,
        // here we are passing the navigation as we cannot access the navigation as the prop in the header.js
        // we can access the navigation only in screens
      };
    },
  },
};

c; // home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#ddd",
    headerStyle: { backgroundColor: "#eee", height: 60 },
  },
});

export default HomeStack;
// now here above the createAppContainer returns a component
// the component will contain all of the information wrt to the navigation homestack
// the component can be rendered to the app.js
