import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import styles from "./styles";

const Button = (props) => {
  // We can use fontsLoaded to only load this component when
  // the font is loaded
  // let [fontsLoaded] = useFonts({
  //   Roboto_400Regular,
  // });

  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default Button;