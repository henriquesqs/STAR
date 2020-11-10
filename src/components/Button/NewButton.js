import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import styles from "./styles";

const NewButton = (props) => {
  // We can use fontsLoaded to only load this component when
  // the font is loaded
  // let [fontsLoaded] = useFonts({
  //   Roboto_400Regular,
  // });

  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default NewButton;