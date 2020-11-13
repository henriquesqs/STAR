import React from 'react';
import { Text, View, Image, ViewPagerAndroidBase } from 'react-native';
import BackArrow from "../../../assets/icons/back.png"
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
import Navbar from '../Navbar/Navbar';

const AboutTeam = (props, { navigation }) => {
  return (
    <>
      <Navbar title="About us" description="Informations about this app" />
      <View style={styles.containerContent}>
        <Text>about?</Text>
      </View>
    </>
  );
}

export default AboutTeam;