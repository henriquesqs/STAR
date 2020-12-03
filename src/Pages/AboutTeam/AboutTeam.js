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
              <Text style={styles.authorsInfoName}>Andre B. P. Furlanetti</Text>
              <Text style={styles.authorsInfoUsp}>NUSP 10748305</Text>
              <Text style={styles.authorsInfoName}>Diego da S. Parra</Text>
              <Text style={styles.authorsInfoUsp}>NUSP 10716550</Text>
              <Text style={styles.authorsInfoName}>Mateus F. Doimo</Text>
              <Text style={styles.authorsInfoUsp}>NUSP 10691971</Text>
              <Text style={styles.authorsInfoName}>Tainá A. Piai</Text>
              <Text style={styles.authorsInfoUsp}>NUSP 9266664</Text>

              <Text style={styles.authorsInfoTitleMain}>BROKER</Text>
              <Text style={styles.authorsInfoName}>Leonardo P. Dias</Text>
              <Text style={styles.authorsInfoUsp}>NUSP 10684642</Text>
              <Text style={styles.authorsInfoName}>Marianna K. de A. Flores</Text>
              <Text style={styles.authorsInfoUsp}>NUSP 10821144</Text>
              <Text style={styles.authorsInfoName}>Renan G. Varoni</Text>
              <Text style={styles.authorsInfoUsp}>NUSP 10310676</Text>
              <Text style={styles.authorsInfoName}>Renan P. Martins</Text>
              <Text style={styles.authorsInfoUsp}>NUSP 10716612</Text>

              <Text style={styles.authorsInfoTitleMain}>DATABASES</Text>
              <Text style={styles.authorsInfoName}>Daniel B. Pozzan</Text>
              <Text style={styles.authorsInfoUsp}>NUSP 10716608</Text>
              <Text style={styles.authorsInfoName}>Matheus A. Uema</Text>
              <Text style={styles.authorsInfoUsp}>NUSP 10276949</Text>
              <Text style={styles.authorsInfoName}>Nelson C. Neto</Text>
              <Text style={styles.authorsInfoUsp}>NUSP 10277022</Text>
              <Text style={styles.authorsInfoName}>Otavio C. Pontes</Text>
              <Text style={styles.authorsInfoUsp}>NUSP 10716525</Text>

              <Text style={styles.authorsInfoTitleMain}>FRONT-END</Text>
              <Text style={styles.authorsInfoName}>Bruno dos Santos</Text>
              <Text style={styles.authorsInfoUsp}>NUSP 10786170</Text>
              <Text style={styles.authorsInfoName}>Gustavo T. Mastrobuono</Text>
              <Text style={styles.authorsInfoUsp}>NUSP 10734411</Text>
              <Text style={styles.authorsInfoName}>Henrique de S. Q. dos Santos</Text>
              <Text style={styles.authorsInfoUsp}>NUSP 10819029</Text>
              <Text style={styles.authorsInfoName}>Witor M. A. de Oliveira</Text>
              <Text style={styles.authorsInfoUsp}>NUSP 10692190</Text>

            </ScrollView>
          </View>

        )}
      </View>
    </>
  );
};

export default AboutTeam;