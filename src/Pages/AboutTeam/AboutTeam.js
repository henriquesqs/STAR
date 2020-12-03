import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar.js';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from "./styles.js";

// This component returns the information about Team 
// members, such as their names and their own university student code
const AboutTeam = ({ navigation }) => {

  // State that controls wheter the component is pressed or not
  const [isAuthorsFocused, setisAuthorsFocused] = useState(false);

  // Changes the state of the component to the
  // opposite of the current state.
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

        {/* Apply a different style to the component depending
        on if the component is pressed or not */}
        <TouchableOpacity style={isAuthorsFocused ? styles.authorsTitleFocused : styles.authors} onPress={focusAuthors}>
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

        {/* Show the content below if the component is pressed */}
        {isAuthorsFocused && (
          <View style={styles.authorsFocused}>
            {/* 
              This div below is scrollable, so user will be allowed
              to scroll the component to see this informations below.
              The infos will be divided into groups and will show
              the names of every member whom participated on this
              project
             */}
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