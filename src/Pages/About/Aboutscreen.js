import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import OutlineButton from "../../components/OutlineButton/OutlineButton.js"
import NewButton from "../../components/Button/NewButton.js";
import styles from "./styles";

// This component controls the About Screen page
// Here we are going to return some basic information about
// this app, such as version and the team who developed it.
const Aboutscreen = ({ navigation }) => {
  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.containerContent}>
        {/* This button, an arrow icon, will return the user to Homescreen
        when pressed */}
        <TouchableOpacity style={styles.backButton} title="arrowIcon" onPress={() => navigation.navigate('Home')}>
          <Image
            style={styles.backArrow}
            source={require("../../../assets/icons/back.png")} />
        </TouchableOpacity>

        <View style={styles.textContent}>
          <Text style={styles.pageTitle}>v1.0</Text>
          <Text style={styles.pageSubTitle}>Made by Team 2</Text>
        </View>

        {/* The same images from Home Screen */}
        <View style={styles.imagesIcons}>
          <Image
            style={{ width: 20, height: 34 }}
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

      {/* This container holds the two main buttons */}
      <View style={styles.containerButtons}>
        <OutlineButton
          title="CONNECT"
          onPress={() => navigation.navigate('Connect')}
        />
        <NewButton
          bgColor={"#454ADE"}
          width={120}
          height={90}
          bRadius={10}
          txtColor='white'
          txtSize={17}
          marginTop={'25%'}
          title="ABOUT"
        />
      </View>
    </View>
  );
}

export default Aboutscreen;

