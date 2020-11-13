import 'react-native-gesture-handler';
import React from 'react';

import Homescreen from "./src/components/Home/Homescreen.js";
import Aboutscreen from "./src/components/About/Aboutscreen.js";
import Connected from "./src/components/Connected/Connected.js";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const App = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Connect" component={Connected} />
        <Stack.Screen name="About" component={Aboutscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;