import React from 'react';
import { Text, View, Image } from 'react-native';
import Air from "../../../../assets/icons/air.png";
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

const DevicesOptions = (props) => {
  return (
    <View style={styles.deviceOption
    }>
      <View style={styles.icon}>
        <Image source={props.icon}
          style={{
            width: props.iconWidth,
            height: props.iconHeight,
            marginTop: 0,
            left: 0,
            top: 0,
            tintColor: 'white',
            resizeMode: 'contain',
          }}
        />
      </View>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

export default DevicesOptions;