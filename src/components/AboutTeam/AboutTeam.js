import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, ViewPagerAndroidBase, ScrollView } from 'react-native';
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

const AboutTeam = ({ navigation }) => {

  const [isAuthorsFocused, setisAuthorsFocused] = useState(false);

  function focusAuthors() {
    setisAuthorsFocused(!isAuthorsFocused);
  }

  return (
    <>
      <Navbar
        title="About us"
        description="Informations about this app"
        nav={navigation}
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
          <Text style={styles.authorsButton}>AUTHORS</Text>

        </TouchableOpacity>
        {isAuthorsFocused && (
          <View style={styles.authorsFocused}>
          <ScrollView>            
            
            <Text style={styles.authorsInfoTitle}>BACK-END</Text>
            <Text style={styles.authorsInfoName}>PESSOA 1</Text>
            <Text style={styles.authorsInfoUsp}>NUSP 00000000</Text>
            <Text style={styles.authorsInfoName}>PESSOA 2</Text>
            <Text style={styles.authorsInfoUsp}>NUSP 00000000</Text>
            <Text style={styles.authorsInfoName}>PESSOA 3</Text>
            <Text style={styles.authorsInfoUsp}>NUSP 00000000</Text>

            <Text style={styles.authorsInfoTitleMain}>BROKER</Text>
            <Text style={styles.authorsInfoName}>PESSOA 1</Text>
            <Text style={styles.authorsInfoUsp}>NUSP 00000000</Text>
            <Text style={styles.authorsInfoName}>PESSOA 2</Text>
            <Text style={styles.authorsInfoUsp}>NUSP 00000000</Text>
            <Text style={styles.authorsInfoName}>PESSOA 3</Text>
            <Text style={styles.authorsInfoUsp}>NUSP 00000000</Text>

            <Text style={styles.authorsInfoTitleMain}>DATABASES</Text>
            <Text style={styles.authorsInfoName}>PESSOA 1</Text>
            <Text style={styles.authorsInfoUsp}>NUSP 00000000</Text>
            <Text style={styles.authorsInfoName}>PESSOA 2</Text>
            <Text style={styles.authorsInfoUsp}>NUSP 00000000</Text>
            <Text style={styles.authorsInfoName}>PESSOA 3</Text>
            <Text style={styles.authorsInfoUsp}>NUSP 00000000</Text>

            <Text style={styles.authorsInfoTitleMain}>FRONT-END</Text>
            <Text style={styles.authorsInfoName}>PESSOA 1</Text>
            <Text style={styles.authorsInfoUsp}>NUSP 00000000</Text>
            <Text style={styles.authorsInfoName}>PESSOA 2</Text>
            <Text style={styles.authorsInfoUsp}>NUSP 00000000</Text>
            <Text style={styles.authorsInfoName}>PESSOA 3</Text>
            <Text style={styles.authorsInfoUsp}>NUSP 00000000</Text>

            <Text style={styles.authorsInfoTitle}>MICRO-SERVICES</Text>
            <Text style={styles.authorsInfoName}>PESSOA 1</Text>
            <Text style={styles.authorsInfoUsp}>NUSP 00000000</Text>
            <Text style={styles.authorsInfoName}>PESSOA 2</Text>
            <Text style={styles.authorsInfoUsp}>NUSP 00000000</Text>
            <Text style={styles.authorsInfoName}>PESSOA 3</Text>
            <Text style={styles.authorsInfoUsp}>NUSP 00000000</Text>

            <Text style={styles.authorsInfoTitle}>SECURITY</Text>
            <Text style={styles.authorsInfoName}>PESSOA 1</Text>
            <Text style={styles.authorsInfoUsp}>NUSP 00000000</Text>
            <Text style={styles.authorsInfoName}>PESSOA 2</Text>
            <Text style={styles.authorsInfoUsp}>NUSP 00000000</Text>
            <Text style={styles.authorsInfoName}>PESSOA 3</Text>
            <Text style={styles.authorsInfoUsp}>NUSP 00000000</Text>
          </ScrollView>
          </View>
          
        )}
      </View>
    </>
  );
};

export default AboutTeam;