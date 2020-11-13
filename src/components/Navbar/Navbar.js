import React from 'react';
import styles from "./styles.js";
import { Text, View, Image } from 'react-native';
import BackArrow from "../../../assets/icons/back.png"
import { TouchableOpacity } from 'react-native-gesture-handler';

const Navbar = (props) => {

  function handleBackButton(nav) {
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