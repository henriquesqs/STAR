import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Button from "../Button/Button.js";
import OutlineButton from "../OutlineButton/OutlineButton.js";

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

import styles from "./styles";

const Homescreen = ({ navigation }) => {

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

  return (
    <View style={styles.containerPrincipal}>

      <View style={styles.containerContent}>

        <View style={styles.textContent}>
          <Text style={styles.pageTitle}>NAME</Text>
          <Text style={styles.pageSubTitle}>solutions based on IOT</Text>
        </View>

        <View style={styles.imagesIcons}>
          <Image
            style={{ width: 54, height: 66 }}
            source={require("../../../assets/icons/security.svg")} />
          <Image
            style={{ width: 39, height: 66 }}
            source={require("../../../assets/icons/phone.svg")} />
          <Image
            style={{ width: 72, height: 48 }}
            source={require("../../../assets/icons/computer.svg")} />
          <Image
            style={{ width: 81, height: 63 }}
            source={require("../../../assets/icons/home.svg")} />
        </View>

      </View>

      <View style={styles.containerButtons}>
        <Button title="CONNECT" />
        <OutlineButton title="SOBRE" onPress={() => navigation.navigate('About')} />
      </View>
    </View>
  );
}

export default Homescreen;


