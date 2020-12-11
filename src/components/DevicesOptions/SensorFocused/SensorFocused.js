import React, { useState } from "react";
import api from "../../../services/api.js";
import { Text, View, Image } from "react-native";
import NewButton from "../../Button/NewButton.js";
import TempSensorIcon from "../../../../assets/icons/TempSensor.png";
import LightSensorIcon from "../../../../assets/icons/LightSensor.png";
import MotionSensorIcon from "../../../../assets/icons/MotionSensor.png";
import HumiditySensorIcon from "../../../../assets/icons/HumiditySensor.png";
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from "./styles.js";

const SensorFocused = (props) => {

  const [humidity, setHumidity] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [luminosity, setLuminosity] = useState(false);

  function apiCall(token, sensor_id) {

    const headers = {
      'Content-Type': 'application/json; charset=utf-8',
      'x-access-token': token,
    }

    console.log("Obtendo dados do sensor " + sensor_id + "...\n");

    api.get('api/sensor/2/' + sensor_id, {
      headers
    })
      .then(function (response) {

        // If we are checking humidity sensor data
        if (sensor_id === 20 || sensor_id === 21 || sensor_id === 22) {
          setTemperature(response.data["valor_temperatura"]);
          setHumidity(response.data["valor_umidade"]);
        }

        // If we are checking motion sensor data
        else if (sensor_id === 25) {

        }

        // If we are checking luminosity sensor data
        else if (sensor_id === 26) {
          setLuminosity(response.data["valor"]);
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
        console.log("\nGetting data from sensors...\n");
        apiCall(value, 20); // updating humidity/temp sensor data
        apiCall(value, 25); // updating motion sensor data
        apiCall(value, 26); // updating luminosity sensor data
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

  return (
    <View style={styles.focused}>
      <View style={styles.cardSubtitle}>
        <Text style={styles.sub}>CURRENT INFO FROM SENSORS</Text>
      </View>

      <View style={styles.cardFirstIcon}>
        <View style={styles.firstdescription}>
          <View style={styles.imageBlock}>
            <Image
              source={TempSensorIcon}
              width={0}
              height={0}
              style={{
                resizeMode: "contain",
                width: 50,
                height: 45,
                tintColor: "white"
              }}
            />
          </View>

          <View style={{ flexDirection: "column", flex: 0.65 }}>
            <Text style={styles.state}>TEMPERATURE:</Text>
            <Text style={styles.stateMode}>{temperature} °C</Text>
          </View>
        </View>
      </View>

      <View style={styles.cardSecondIcon}>
        <View style={styles.firstdescription}>
          <View style={styles.imageBlock}>
            <Image
              source={LightSensorIcon}
              width={0}
              height={0}
              style={{
                resizeMode: "contain",
                width: 50,
                height: 45,
                tintColor: "white",
              }}
            />
          </View>
          <View style={{ flexDirection: "column", flex: 0.65 }}>
            <Text style={styles.state}>LUMINOSITY:</Text>
            <Text style={styles.stateMode}>{luminosity ? "ON" : "OFF"}</Text>
          </View>
        </View>
      </View>

      <View style={styles.cardThirdIcon}>
        <View style={styles.firstdescription}>
          <View style={styles.imageBlock}>
            <Image
              source={MotionSensorIcon}
              width={0}
              height={0}
              style={{
                resizeMode: "contain",
                width: 50,
                height: 45,
                tintColor: "white",
              }}
            />
          </View>
          <View style={{ flexDirection: "column", flex: 0.65 }}>
            <Text style={styles.state}>MOTION:</Text>
            <Text style={styles.stateMode}>0</Text>
          </View>
        </View>
      </View>

      <View style={styles.cardFourthIcon}>
        <View style={styles.firstdescription}>
          <View style={styles.imageBlock}>
            <Image
              source={HumiditySensorIcon}
              width={0}
              height={0}
              style={{
                resizeMode: "contain",
                width: 50,
                height: 45,
                tintColor: "white",
              }}
            />
          </View>
          <View style={{ flexDirection: "column", flex: 0.65 }}>
            <Text style={styles.state}>HUMIDITY:</Text>
            <Text style={styles.stateMode}>{humidity}%</Text>
          </View>
        </View>
      </View>

      <View style={styles.cardFifthIcon}>
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

export default SensorFocused;
