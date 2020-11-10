import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Button from "../Button/Button.js";
import OutlineButton from "../OutlineButton/OutlineButton.js";

import styles from "./styles";

const Homescreen = ({ navigation }) => {

  return (
    <View style={styles.containerPrincipal}>

      <View style={styles.containerContent}>

        <View style={styles.textContent}>
          <Text style={styles.pageTitle}>NAME</Text>
          <Text style={styles.pageSubTitle}>solutions based on IOT</Text>
        </View>

        <View style={styles.imagesIcons}>
          <Image
            style={{ width: 20, height: 33 }}
            source={require("../../../assets/icons/phone.png")} />
          <Image
            style={{ width: 36, height: 24 }}
            source={require("../../../assets/icons/computer.png")} />
          <Image
            style={{ width: 41, height: 32 }}
            source={require("../../../assets/icons/home.png")} />
          <Image
            style={{ width: 27, height: 33 }}
            source={require("../../../assets/icons/security.png")} />
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


