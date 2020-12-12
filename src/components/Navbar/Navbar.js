import React from 'react';
import styles from "./styles.js";
import { Text, View, Image } from 'react-native';
import BackArrow from "../../../assets/icons/back.png"
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

// A simple Navbar that holds an arrow icon to go back to Home screen,
// a title and a subtitle for the current screen
const Navbar = (props) => {

  // If user touch on arrow icon, we're going to disconnect the user
  // from the app/device and send this user to Home screen.
  // We're showing an alert to the user
  function handleBackButton(nav) {

    const removeValue = async () => {
      try {
        await AsyncStorage.removeItem('@storage_Key')
      } catch (e) {
        // remove error
        alert("Error while disconnecting you...")
        console.log("Error while disconnecting user:\n" + e)
      }
    }
    alert('You have been disconnected from this device!');
    nav.navigate("Home");
  }

  return (
    <View style={styles.navbar}>
      <View style={styles.backImage}>
        <TouchableOpacity onPress={() => handleBackButton(props.nav)}>
          <Image source={BackArrow}
            style={{
              width: 25,
              height: 24,
              marginTop: 0,
              left: 0,
              top: 0,
              tintColor: 'white'
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.contentTexts}>
        <Text style={styles.pageTitle}>{props.title}</Text>
        <Text style={styles.subTitle}>{props.description}</Text>
      </View>
    </View>
  );
}

export default Navbar;