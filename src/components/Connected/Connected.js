import * as React from 'react';
import { AppLoading } from "expo";
import { Button, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DevicesWhite from "../../../assets/icons/devices.png";
import AlertGray from "../../../assets/icons/alert-gray.png";

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

import Devices from "../Devices/Devices.js";
import AboutTeam from "../AboutTeam/AboutTeam.js";

export default function Connected() {

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

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else {
    return (
      <NavigationContainer independent={true} style={{ height: 300 }}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName, height, width;

              if (route.name === 'DEVICES') {
                iconName = DevicesWhite;
                height = 20;
                width = 33;
              }

              else if (route.name === 'ABOUT') {
                iconName = AlertGray;
                height = 25;
                width = 33;
              }

              return <Image
                source={iconName}
                style={{
                  tintColor: focused ? "white" : '#858383',
                  height: height,
                  width: width,
                  resizeMode: 'contain',
                }}
              />;
            },            
          })}
          tabBarOptions={{
            style: { height: 85 },
            labelStyle: { fontSize: 15, paddingBottom: 10 },
            activeTintColor: 'white',
            inactiveTintColor: '#858383',
            activeBackgroundColor: 'purple',
            inactiveBackgroundColor: 'purple'
          }}          
        >
          <Tab.Screen name="DEVICES" component={Devices} />
          <Tab.Screen name="ABOUT" component={AboutTeam} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}