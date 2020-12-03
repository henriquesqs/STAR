import * as React from 'react';
import { AppLoading } from "expo";
import { Image } from 'react-native';
import DevicesWhite from "../../../assets/icons/devices.png";
import AlertGray from "../../../assets/icons/alert-gray.png";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Devices from "../Devices/Devices.js";
import AboutTeam from "../../Pages/AboutTeam/AboutTeam.js";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';

export default function Connected() {

  // Creating var to control navigation between screen tabs
  const Tab = createBottomTabNavigator();

  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  // Only return the content of this component if all
  // the fonts are already loaded
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else {
    return (
      // Here on Tab.Navigator, we are checking if the user is on
      // 'Devices' screen or 'About' tab.
      // Tab that user is in has a white icon and text color.
      // Tab that user isn't in has a gray icon and text color.
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName, height, width;

            // Check if user is in DEVICES tab
            if (route.name === 'DEVICES') {
              iconName = DevicesWhite;
              height = 20;
              width = 33;
            }

            // Check if user is in ABOUT tab
            else if (route.name === 'ABOUT') {
              iconName = AlertGray;
              height = 25;
              width = 33;
            }

            // Return a white or 'gray' icon depending on which tab is activated
            return <Image
              source={iconName}
              style={{
                tintColor: focused ? "white" : '#A2A1A1',
                height: height,
                width: width,
                resizeMode: 'contain',
              }}
            />;
          },
        })}
        // Here we define that the active tab will receive a white icon and
        // color text, whether the inactive tab will receive a gray ones 
        tabBarOptions={{
          style: { height: 85 },
          labelStyle: { fontSize: 15, paddingBottom: 10 },
          activeTintColor: 'white',
          inactiveTintColor: '#A2A1A1',
          activeBackgroundColor: '#454ADE',
          inactiveBackgroundColor: '#454ADE'
        }}
      >
        {/* Creating our 2 tabs */}
        <Tab.Screen name="DEVICES" component={Devices} />
        <Tab.Screen name="ABOUT" component={AboutTeam} />
      </Tab.Navigator>
    );
  }
}