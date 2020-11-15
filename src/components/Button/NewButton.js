import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// This is a Button that we've created for better custommizing it
const NewButton = (props) => {

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

export default NewButton;