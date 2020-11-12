import React from 'react';
import { Text, View, Image } from 'react-native';
import PowerIcon from "../../../../../assets/icons/power.png";
import LowTempIcon from "../../../../../assets/icons/low-temp.png";
import HighTempIcon from "../../../../../assets/icons/high-temp.png";
import TempNowIcon from "../../../../../assets/icons/temp-now.png";
import NoPeopleIcon from "../../../../../assets/icons/no-people.png";
import ClockIcon from "../../../../../assets/icons/clock.png";
import NewButton from "../../../Button/NewButton.js";
import CircularButton from "../../../CircularButton/CircularButton.js";
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

const DevicesOptionsFocused = (props) => {
  return (
    <View style={styles.focused}>

      <View style={styles.cardSubtitle}>
        <Text style={styles.sub}>DADOS ATUAIS DO DISPOSITIVO</Text>
      </View>

      <View style={styles.cardFirstIcon}>
        <Image
          source={PowerIcon}
          width={0}
          height={30}
          style={{ resizeMode: 'contain', width: 100, height: 45 }}
        />
        <View style={{ flexDirection: 'column', left: -15 }}>
          <Text style={styles.state}>ESTADO:</Text>
          <Text style={styles.stateMode}>LIGADO</Text>
        </View>
        <View style={{ left: 60 }}>
          <NewButton
            width={100}
            height={50}
            bgColor={'#454ADE'}
            bRadius={10}
            title="DESLIGAR"
            txtColor='white'
            txtSize={13}
            marginTop={'16%'}
          >
          </NewButton>
        </View>
      </View>

      <View style={styles.cardSecondIcon}>
        <Image
          source={LowTempIcon}
          width={0}
          height={30}
          style={{ resizeMode: 'contain', width: 100, height: 45 }}
        />
        <View style={{ flexDirection: 'column', left: -15 }}>
          <Text style={styles.state}>TEMP. MIN:</Text>
          <Text style={styles.stateMode}>17ºC</Text>
        </View>
        <View style={{ left: 35, flexDirection: 'row' }}>
          <CircularButton
            width={45}
            height={45}
            bgColor={'#454ADE'}
            bRadius={100}
            title="+"
            txtColor='white'
            txtSize={30}
            marginTop={'5%'}
          />
          <View style={{ left: 15 }}>
            <CircularButton
              width={45}
              height={45}
              bgColor={'#454ADE'}
              bRadius={100}
              title="-"
              txtColor='white'
              txtSize={30}
              marginTop={'0%'}
            />
          </View>
        </View>
      </View>
      <View style={styles.cardThirdIcon}>
        <Image
          source={HighTempIcon}
          width={0}
          height={30}
          style={{ resizeMode: 'contain', width: 100, height: 45 }}
        />
        <View style={{ flexDirection: 'column', left: -15 }}>
          <Text style={styles.state}>TEMP. MAX:</Text>
          <Text style={styles.stateMode}>22ºC</Text>
        </View>
        <View style={{ left: 30, flexDirection: 'row' }}>
          <CircularButton
            width={45}
            height={45}
            bgColor={'#454ADE'}
            bRadius={100}
            title="+"
            txtColor='white'
            txtSize={30}
            marginTop={'5%'}
          />
          <View style={{ left: 15 }}>
            <CircularButton
              width={45}
              height={45}
              bgColor={'#454ADE'}
              bRadius={100}
              title="-"
              txtColor='white'
              txtSize={30}
              marginTop={'0%'}
            />
          </View>
        </View>
      </View>
      <View style={styles.cardFourthIcon}>
        <Image
          source={TempNowIcon}
          width={0}
          height={30}
          style={{ resizeMode: 'contain', width: 100, height: 45 }}
        />
        <View style={{ flexDirection: 'column', left: -15 }}>
          <Text style={styles.state}>TEMP. ATUAL:</Text>
          <Text style={styles.stateMode}>20ºC</Text>
        </View>
        <View style={{ left: 15, flexDirection: 'row' }}>
          <CircularButton
            width={45}
            height={45}
            bgColor={'#454ADE'}
            bRadius={100}
            title="+"
            txtColor='white'
            txtSize={30}
            marginTop={'5%'}
          />
          <View style={{ left: 15 }}>
            <CircularButton
              width={45}
              height={45}
              bgColor={'#454ADE'}
              bRadius={100}
              title="-"
              txtColor='white'
              txtSize={30}
              marginTop={'0%'}
            />
          </View>
        </View>
      </View>
      <View style={styles.cardFifthIcon}>
        <Image
          source={NoPeopleIcon}
          width={0}
          height={30}
          style={{ resizeMode: 'contain', width: 100, height: 45 }}
        />
        <View style={{ flexDirection: 'column', left: -15 }}>
          <Text style={styles.state}>AO ESVAZIAR:</Text>
          <Text style={styles.stateMode}>LIGADO</Text>
        </View>
        <View style={{ left: 15 }}>
          <NewButton
            width={100}
            height={50}
            bgColor={'#454ADE'}
            bRadius={10}
            title="DESLIGAR"
            txtColor='white'
            txtSize={13}
            marginTop={'16%'}
          >
          </NewButton>
        </View>
      </View>
      <View style={styles.cardSixthIcon}>
        <Image
          source={ClockIcon}
          width={0}
          height={30}
          style={{ resizeMode: 'contain', width: 90, height: 45 }}
        />
        <View style={{ flexDirection: 'column', left: -15 }}>
          <Text style={styles.state}>ESPERA:</Text>
          <Text style={styles.stateMode}>120 min</Text>
        </View>
        <View style={{ left: 65, flexDirection: 'row' }}>
          <CircularButton
            width={45}
            height={45}
            bgColor={'#454ADE'}
            bRadius={100}
            title="+"
            txtColor='white'
            txtSize={30}
            marginTop={'5%'}
          />
          <View style={{ left: 15 }}>
            <CircularButton
              width={45}
              height={45}
              bgColor={'#454ADE'}
              bRadius={100}
              title="-"
              txtColor='white'
              txtSize={30}
              marginTop={'0%'}
            />
          </View>
        </View>
      </View>
    </View >
  );
}

export default DevicesOptionsFocused;