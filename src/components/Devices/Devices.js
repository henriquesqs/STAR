import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Text, View, Image, ViewPagerAndroidBase } from 'react-native';
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

import styles from "./styles.js";

const Devices = (props) => {
  return (
    <>
      <View style={styles.containerContent}>
        <Navbar title="Devices" description="Select a device to see it status" />
        <Text>devices?</Text>
      </View>
    </>
  );
}

export default Devices;