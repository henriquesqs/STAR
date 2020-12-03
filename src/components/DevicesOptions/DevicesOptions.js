import React from 'react';
import { Text, View, Image } from 'react-native';

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