import 'react-native-gesture-handler';
import React from 'react';
import Homescreen from "./src/Pages/Home/Homescreen.js"
import Aboutscreen from "./src/Pages/About/Aboutscreen.js"
import Connected from "./src/Pages/Connected/Connected.js"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Main component of this application
// App will control all of our main components: Home, Connect
// and About, which will be our 'pages'.
const App = () => {

  // We are using Stack Navigation to control the
  // navigation between pages
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
        {/* 
          Our app has three main pages: Home, Connect and About.
          'Home' is the landing page of our app;
          'Connect' is the page with connection to our broker;
          'About' is an informative page with app version and our team number.
         */}
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Connect" component={Connected} />
        <Stack.Screen name="About" component={Aboutscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;