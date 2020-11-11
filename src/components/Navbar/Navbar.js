import React from 'react';
import { Text, View, Image } from 'react-native';
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

const Navbar = (props) => {
  return (
    <View style={styles.navbar}>
      <View style={styles.backImage}>
        <Image source={BackArrow}
          style={{
            width: 25,
            height: 24,
            marginTop: 0,
            left: 0,
            top: 0,
            tintColor: 'white'
          }}
        />
      </View>
      <View style={styles.contentTexts}>
        <Text style={styles.pageTitle}>{props.title}</Text>
        <Text style={styles.subTitle}>{props.description}</Text>
      </View>
    </View>
  );
}

export default Navbar;