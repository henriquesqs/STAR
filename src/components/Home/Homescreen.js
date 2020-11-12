expandableimport React from 'react';
import { AppLoading } from "expo";
import { View, Text, Image } from 'react-native';
import NewButton from "../Button/NewButton.js";
import OutlineButton from "../OutlineButton/OutlineButton.js";
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

import styles from "./styles";

const Homescreen = ({ navigation }) => {

  let [fontsLoaded] = useFonts({
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
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else {
    return (
      <View style={styles.containerPrincipal}>

        <View style={styles.containerContent}>

          <View style={styles.textContent}>
            <Text style={styles.pageTitle}>NAME</Text>
            <Text style={styles.pageSubTitle}>solutions based on IOT</Text>
          </View>

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

        <View style={styles.containerButtons}>
          <NewButton
            bgColor={"#454ADE"}
            width={120}
            height={90}
            bRadius={10}
            title="CONNECT"
            txtColor='white'
            txtSize={17}
            marginTop={'25%'}
            onPress={() => navigation.navigate('Connect')} />
          <OutlineButton title="ABOUT" onPress={() => navigation.navigate('About')} />
        </View>
      </View>
    );
  }
}

export default Homescreen;


