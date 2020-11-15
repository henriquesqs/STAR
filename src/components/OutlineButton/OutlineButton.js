import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from "./styles";

// This is a Button that we've created for better custommizing it.
// The diff between the other Button is that this one is outlined :P
const OutlineButton = (props) => {

  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default OutlineButton;