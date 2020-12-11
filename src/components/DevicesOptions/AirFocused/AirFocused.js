import React, { useState } from "react";
import api from "../../../services/api.js";
import { Text, View, Image } from "react-native";
import PowerIcon from "../../../../assets/icons/power.png"
import LowTempIcon from "../../../../assets/icons/low-temp.png";
import HighTempIcon from "../../../../assets/icons/high-temp.png";
import TempNowIcon from "../../../../assets/icons/temp-now.png";
import NoPeopleIcon from "../../../../assets/icons/no-people.png";
// import ClockIcon from "../../../../assets/icons/clock.png";
import NewButton from "../../Button/NewButton.js";
import CircularButton from "../../CircularButton/CircularButton.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from "./styles.js";

const AirFocused = (props) => {


  const [iconsColor, setIconsColors] = useState("white");

  // States to handle air-c functions
  const [deviceState, setDeviceState] = useState("ON");
  const [deviceStateButtonText, setDeviceStateButtonText] = useState("OFF");

  const [minTemp, setMinTemp] = useState(16);
  const [minTempDecButtonColor, setMinTempDecButtonColor] = useState("#454ADE");
  const [minTempIncButtonColor, setMinTempIncButtonColor] = useState("#454ADE");

  const [maxTemp, setMaxTemp] = useState(18);
  const [maxTempDecButtonColor, setMaxTempDecButtonColor] = useState("#454ADE");
  const [maxTempIncButtonColor, setMaxTempIncButtonColor] = useState("#454ADE");

  const [currentTemp, setCurrentTemp] = useState(17);
  const [currentTempDecButtonColor, setCurrentTempDecButtonColor] = useState(
    "#454ADE"
  );
  const [currentTempIncButtonColor, setCurrentTempIncButtonColor] = useState(
    "#454ADE"
  );

  const [noPeople, setNoPeople] = useState("ON");
  const [noPeopleButtonText, setNoPeopleButtonText] = useState("OFF");
  const [noPeopleButtonColor, setNoPeopleButtonColor] = useState("#454ADE");

  // const [timeout, setTimeout] = useState(10);
  // const [timeoutDecButtonColor, setTimeoutDecButtonColor] = useState("#454ADE");
  // const [timeoutIncButtonColor, setTimeoutIncButtonColor] = useState("#454ADE");

  const textColor = {
    color: iconsColor,
  };

  function getCurrentValues(token) {

    const headers = {
      'Content-Type': 'application/json; charset=utf-8',
      'x-access-token': token,
    }

    console.log("\nGetting data from air-conditioner...\n");

    api.get('api/ar/2/24', {
      headers
    })
      .then(function (response) {

        setMaxTemp(response.data["temp_max"]);
        setMinTemp(response.data["temp_min"]);
        setCurrentTemp(response.data["temp_atual"]);

        if (response.data["status_sala"]) {
          setNoPeople("ON");
          setNoPeopleButtonText("OFF");
        }
        else {
          setNoPeople("OFF");
          setNoPeopleButtonText("ON");
        }

      })
      .catch(function (error) {
        console.log("Erro na obtenção dos dados do sensor\n" + error);
      });
  }

  const getToken = async (key) => {

    try {
      const value = await AsyncStorage.getItem(key)
      if (value !== null) {
        getCurrentValues(value);
      }
    } catch (e) {
      // error reading value
      console.log("Error while reading token...\n" + e);
    }
  }

  function getSensorData() {
    // Getting access-token
    getToken("@storage_Key");
  }

  // Execute this function once to get initial values
  var immediate = setImmediate(function () {
    console.log("\n[AirFocused] Set initial values via Immediate function\n")
    getToken("@storage_Key")
    clearImmediate(immediate)
  })

  // This function handles clicks on NoPeople button
  function handleNoPeople() {
    if (noPeople == "ON") {
      setNoPeople("OFF");
      setNoPeopleButtonText("TURN ON");
    } else {
      setNoPeople("ON");
      setNoPeopleButtonText("TURN OFF");
    }
  }

  // This function handles clicks on Power Button
  function handleSetState() {

    if (deviceState == "ON") {
      setDeviceState("OFF");
      setIconsColors("gray");
      setDeviceStateButtonText("TURN ON");
      setMinTempDecButtonColor("gray");
      setMinTempIncButtonColor("gray");
      setMaxTempDecButtonColor("gray");
      setMaxTempIncButtonColor("gray");
      setCurrentTempDecButtonColor("gray");
      setCurrentTempIncButtonColor("gray");
      setTimeoutDecButtonColor("gray");
      setTimeoutIncButtonColor("gray");
      setNoPeopleButtonColor("gray");
    } else {
      setDeviceState("ON");
      setIconsColors("white");
      setDeviceStateButtonText("TURN OFF");
      setMinTempDecButtonColor("#454ADE");
      setMinTempIncButtonColor("#454ADE");
      setMaxTempDecButtonColor("#454ADE");
      setMaxTempIncButtonColor("#454ADE");
      setCurrentTempDecButtonColor("#454ADE");
      setCurrentTempIncButtonColor("#454ADE");
      setTimeoutDecButtonColor("#454ADE");
      setTimeoutIncButtonColor("#454ADE");
      setNoPeopleButtonColor("#454ADE");
    }
  }

  // This function handles clicks on Decrease Min Temp button
  // It checks wheter user can continue to decrease the MinTemp value or not
  // It also checks if by decreasing the MinTemp value, the user now can
  // increase the MinTemp value.
  function handleDecreaseMinTemp() {
    if (minTemp > 16 && minTemp <= 22) {
      setMinTemp(minTemp - 1);
    }

    if (minTemp == 16) {
      setMinTempDecButtonColor("gray");
    } else {
      setMinTempDecButtonColor("#454ADE");
      if (minTemp < 22) {
        setMinTempIncButtonColor("#454ADE");
      }
    }
  }

  // This function handles clicks on Increase Min Temp button
  // It checks wheter user can continue to increase the MinTemp value or not
  // It also checks if by increasing the MinTemp value, the user now can
  // decrease the MinTemp value.
  function handleIncreaseMinTemp() {
    if (minTemp < 22) {
      setMinTemp(minTemp + 1);
    }

    if (minTemp == 22) {
      setMinTempIncButtonColor("gray");
    } else {
      setMinTempIncButtonColor("#454ADE");
    }

    if (minTemp > 16 && minTemp <= 22) {
      setMinTempDecButtonColor("#454ADE");
    }
  }

  function handleDecreaseMaxTemp() {
    if (maxTemp > 17 && maxTemp <= 23) {
      setMaxTemp(maxTemp - 1);
    }

    if (maxTemp == 17) {
      setMaxTempDecButtonColor("gray");
    } else {
      setMaxTempDecButtonColor("#454ADE");
      if (maxTemp <= 22) {
        setMaxTempIncButtonColor("#454ADE");
      }
    }
  }

  function handleIncreaseMaxTemp() {
    if (maxTemp <= 22) {
      setMaxTemp(maxTemp + 1);
    }

    if (maxTemp == 23) {
      setMaxTempIncButtonColor("gray");
    } else {
      setMaxTempIncButtonColor("#454ADE");
    }

    if (maxTemp > 16 && maxTemp <= 22) {
      setMaxTempDecButtonColor("#454ADE");
    }
  }

  function handleDecreaseCurrentTemp() {
    if (currentTemp > 16) {
      setCurrentTemp(currentTemp - 1);
    }

    if (currentTemp == 16) {
      setCurrentTempDecButtonColor("gray");
    } else {
      setCurrentTempDecButtonColor("#454ADE");
      if (currentTemp < 23) {
        setCurrentTempIncButtonColor("#454ADE");
      }
    }
  }

  function handleIncreaseCurrentTemp() {
    if (currentTemp <= 22) {
      setCurrentTemp(currentTemp + 1);
    }

    if (currentTemp == 23) {
      setCurrentTempIncButtonColor("gray");
    } else {
      setCurrentTempIncButtonColor("#454ADE");
    }

    if (currentTemp > 16) {
      setCurrentTempDecButtonColor("#454ADE");
    }
  }

  return (
    <View style={styles.focused}>
      <View style={styles.cardSubtitle}>
        <Text style={styles.sub}>CURRENT INFO FROM DEVICE</Text>
      </View>

      <View style={styles.cardFirstIcon}>
        <View style={styles.firstdescription}>
          <View style={styles.imageBlock}>
            <Image
              source={PowerIcon}
              width={0}
              height={0}
              style={{
                resizeMode: "contain",
                width: 50,
                height: 45,
              }}
            />
          </View>

          <View style={{ flexDirection: "column", flex: 0.65 }}>
            <Text style={styles.state}>STATE:</Text>
            <Text style={styles.stateMode}>{deviceState}</Text>
          </View>
        </View>
        <View style={styles.boxbuttons}>
          <NewButton
            onPress={handleSetState}
            width={100}
            height={50}
            bgColor={"#454ADE"}
            bRadius={10}
            title={deviceStateButtonText}
            txtColor="white"
            txtSize={13}
            marginTop={"16%"}
          ></NewButton>
        </View>
      </View>

      <View style={styles.cardSecondIcon}>
        <View style={styles.firstdescription}>
          <View style={styles.imageBlock}>
            <Image
              source={LowTempIcon}
              width={0}
              height={0}
              style={{
                resizeMode: "contain",
                width: 50,
                height: 45,
                tintColor: iconsColor,
              }}
            />
          </View>
          <View style={{ flexDirection: "column", flex: 0.65 }}>
            <Text style={[styles.state, textColor]}>MIN TEMP.:</Text>
            <Text style={styles.stateMode}>{minTemp}ºC</Text>
          </View>
        </View>
        <View style={styles.boxbuttons}>
          <View style={styles.doublebutton}>
            <CircularButton
              onPress={handleIncreaseMinTemp}
              width={45}
              height={45}
              bgColor={minTempIncButtonColor}
              bRadius={100}
              title="+"
              txtColor="white"
              txtSize={30}
              marginTop={"5%"}
            />
            <CircularButton
              onPress={handleDecreaseMinTemp}
              width={45}
              height={45}
              bgColor={minTempDecButtonColor}
              bRadius={100}
              title="-"
              txtColor="white"
              txtSize={30}
              marginTop={"0%"}
            />
          </View>
        </View>
      </View>

      <View style={styles.cardThirdIcon}>
        <View style={styles.firstdescription}>
          <View style={styles.imageBlock}>
            <Image
              source={HighTempIcon}
              width={0}
              height={0}
              style={{
                resizeMode: "contain",
                width: 50,
                height: 45,
                tintColor: iconsColor,
              }}
            />
          </View>
          <View style={{ flexDirection: "column", flex: 0.65 }}>
            <Text style={[styles.state, textColor]}>MAX TEMP.:</Text>
            <Text style={styles.stateMode}>{maxTemp}ºC</Text>
          </View>
        </View>
        <View style={styles.boxbuttons}>
          <View style={styles.doublebutton}>
            <CircularButton
              onPress={handleIncreaseMaxTemp}
              width={45}
              height={45}
              bgColor={maxTempIncButtonColor}
              bRadius={100}
              title="+"
              txtColor="white"
              txtSize={30}
              marginTop={"5%"}
            />
            <CircularButton
              onPress={handleDecreaseMaxTemp}
              width={45}
              height={45}
              bgColor={maxTempDecButtonColor}
              bRadius={100}
              title="-"
              txtColor="white"
              txtSize={30}
              marginTop={"0%"}
            />
          </View>
        </View>
      </View>

      <View style={styles.cardFourthIcon}>
        <View style={styles.firstdescription}>
          <View style={styles.imageBlock}>
            <Image
              source={TempNowIcon}
              width={0}
              height={0}
              style={{
                resizeMode: "contain",
                width: 50,
                height: 45,
                tintColor: iconsColor,
              }}
            />
          </View>
          <View style={{ flexDirection: "column", flex: 0.65 }}>
            <Text style={[styles.state, textColor]}>TEMP. NOW:</Text>
            <Text style={styles.stateMode}>{currentTemp}ºC</Text>
          </View>
        </View>
        <View style={styles.boxbuttons}>
          <View style={styles.doublebutton}>
            <CircularButton
              onPress={handleIncreaseCurrentTemp}
              width={45}
              height={45}
              bgColor={currentTempIncButtonColor}
              bRadius={100}
              title="+"
              txtColor="white"
              txtSize={30}
              marginTop={"5%"}
            />
            <CircularButton
              onPress={handleDecreaseCurrentTemp}
              width={45}
              height={45}
              bgColor={currentTempDecButtonColor}
              bRadius={100}
              title="-"
              txtColor="white"
              txtSize={30}
              marginTop={"0%"}
            />
          </View>
        </View>
      </View>

      <View style={styles.cardFifthIcon}>
        <View style={styles.firstdescription}>
          <View style={styles.imageBlock}>
            <Image
              source={NoPeopleIcon}
              width={0}
              height={0}
              style={{
                resizeMode: "contain",
                width: 50,
                height: 45,
                tintColor: iconsColor,
              }}
            />
          </View>
          <View style={{ flexDirection: "column", flex: 0.65 }}>
            <Text style={[styles.state, textColor]}>W/ NOBODY:</Text>
            <Text style={styles.stateMode}>{noPeople}</Text>
          </View>
        </View>
        <View style={styles.boxbuttons}>
          <NewButton
            onPress={handleNoPeople}
            width={100}
            height={50}
            bgColor={noPeopleButtonColor}
            bRadius={10}
            title={noPeopleButtonText}
            txtColor="white"
            txtSize={13}
            marginTop={"16%"}
          ></NewButton>
        </View>
      </View>

      <View style={styles.cardSixthIcon}>
        <View style={{ flexDirection: "column", flex: 0.65 }}>
          <Text style={[styles.lastUpdateText, textColor]}>Last update:</Text>
          <Text style={styles.stateMode}>PAI TA ON</Text>
        </View>
        <NewButton
          width={100}
          height={50}
          bgColor={"#454ADE"}
          bRadius={10}
          title={"UPDATE"}
          txtColor="white"
          txtSize={13}
          marginTop={"16%"}
          onPress={getSensorData}
        ></NewButton>
      </View>
    </View>
  );
};

export default AirFocused;
