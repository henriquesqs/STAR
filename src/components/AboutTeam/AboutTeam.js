import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, ViewPagerAndroidBase } from 'react-native';
import BackArrow from "../../../assets/icons/back.png"
import People from "../../../assets/icons/people.png";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';

import styles from "./styles.js";
import Navbar from '../Navbar/Navbar';

const AboutTeam = (props) => {

  const [isAuthorsFocused, setisAuthorsFocused] = useState(false);

  function focusAuthors() {

    setisAuthorsFocused(!isAuthorsFocused);

    if (!isAuthorsFocused) {
      // setFirstFlex(0.75);
      //  setSecondFlex(0);
      // setSecondDisplay('none');
    }
    else {
      // styles.authors.flex = 0.15,
      // setFirstFlex(0.15);
      // setSecondFlex(0.15);
      // setSecondDisplay('flex');
    }
  }

  return (
    <>
      <Navbar
        title="About us"
        description="Informations about this app"
      />
      <View style={styles.containerContent}>
        <TouchableOpacity style={isAuthorsFocused? styles.authorsTitleFocused : styles.authors} onPress={focusAuthors}>
          <Image source={require('../../../assets/icons/people.png')}
            style={{
              width: 50,
              height: 50,
              marginTop: 0,
              marginLeft: 35,
              marginRight: 20,
              left: 0,
              top: 0,
              tintColor: 'white',
              resizeMode: 'contain',
            }}
          />
          <Text style={styles.authorsButton }>CRIADORES</Text>

        </TouchableOpacity>
        {isAuthorsFocused && (
            <View style={styles.authorsFocused}>
              <Text style={styles.authorsInfoTitleMain}>BACKEND</Text>
              <Text style={styles.authorsInfoName}>PESSOA 1</Text>
              <Text style={styles.authorsInfoUsp}>NUSP 00000000</Text>
              <Text style={styles.authorsInfoName}>PESSOA 2</Text>
              <Text style={styles.authorsInfoUsp}>NUSP 00000000</Text>
              <Text style={styles.authorsInfoName}>PESSOA 3</Text>
              <Text style={styles.authorsInfoUsp}>NUSP 00000000</Text>
              <Text style={styles.authorsInfoTitle}>FRONTEND</Text>
              <Text style={styles.authorsInfoName}>PESSOA 1</Text>
              <Text style={styles.authorsInfoUsp}>NUSP 00000000</Text>
              <Text style={styles.authorsInfoName}>PESSOA 2</Text>
              <Text style={styles.authorsInfoUsp}>NUSP 00000000</Text>
              <Text style={styles.authorsInfoName}>PESSOA 3</Text>
              <Text style={styles.authorsInfoUsp}>NUSP 00000000</Text>
            </View>
            
          )}
      </View>
    </>
  );
};

export default AboutTeam;