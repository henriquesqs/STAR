import React from 'react';
import { View,Text , TouchableOpacity, Image } from 'react-native';
import Button from "../Button/Button.js";

import styles from "./styles";

const Homescreen = ( {navigation} ) =>{
  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.containerContent}>
        <View style={styles.textContent}>
          <Text style={{fontSize: 25}}>IOT PROJECT</Text>
        </View>

        <View style={styles.imagesIcons}>
          <Image
            style={{width:50,height:50}}
            source={require("../../../assets/icons/png/001-tablet.png")}/>
          <Image
            style={{width:50,height:50}}
            source={require("../../../assets/icons/png/006-iphone-1.png")}/>
          <Image
            style={{width:50,height:50}}
            source={require("../../../assets/icons/png/025-pc-screen.png")}/>
          <Image
            style={{width:50,height:50}}
            source={require("../../../assets/icons/png/casa.png")}/>
        </View>
        
      </View>
      
      <View style={styles.containerButtons}>
        <Button title="CONNECT"/>
        <Button title="SOBRE" onPress={() => navigation.navigate('About')}/>
      </View>
    </View>
  );
}

export default Homescreen;


