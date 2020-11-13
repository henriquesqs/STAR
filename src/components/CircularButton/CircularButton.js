import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import styles from "./styles";

const CircularButton = (props) => {

  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.bgColor,
        width: props.width,
        height: props.height,
        borderRadius: props.bRadius
      }}
      onPress={props.onPress}
    >
      <Text
        style={{
          color: props.txtColor,
          fontSize: props.txtSize,
          marginTop: props.marginTop,
          textAlign: 'center',
          fontWeight: 'bold'
        }}
      >{props.title}</Text>
    </TouchableOpacity>
  );

}

export default CircularButton;