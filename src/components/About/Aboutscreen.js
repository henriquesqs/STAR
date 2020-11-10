import React from 'react';
import { View,Text , TouchableOpacity, Image } from 'react-native';
import Button from "../Button/Button.js";
//import Icon1 from "../../assets/icons/svg/002-cellular.svg";
import styles from "./styles";

const Aboutscreen = () => {
  return (
    
    <View style={styles.containerPrincipal}>
      <View style={styles.containerContent}>
        <View style={styles.textContent}>
          <Text style={{fontSize: 25}}>Bom dia florzinha</Text>
        </View>
      </View>
      
      <View style={styles.containerButtons}>
        <Button title="Herro"/>
        <Button title="Corno"/>
      </View>
    </View>
  );
}

export default Aboutscreen;

