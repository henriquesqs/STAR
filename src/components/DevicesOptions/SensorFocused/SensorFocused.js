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

  const [motion, setMotion] = useState("0");

  const [humiditySensor1, setHumiditySensor1] = useState(0);
  const [humiditySensor2, setHumiditySensor2] = useState(0);
  const [humiditySensor3, setHumiditySensor3] = useState(0);
  const [meanHumidity, setMeanHumidity] = useState(0.0);

  const [temperatureSensor1, setTemperatureSensor1] = useState(0);
  const [temperatureSensor2, setTemperatureSensor2] = useState(0);
  const [temperatureSensor3, setTemperatureSensor3] = useState(0);
  const [meanTemperature, setMeanTemperature] = useState(0.0);

  const [luminosity, setLuminosity] = useState(false);

  function apiCall(token, sensor_id) {

    const headers = {
      'Content-Type': 'application/json; charset=utf-8',
      'x-access-token': token,
    }

    // console.log("Obtendo dados do sensor " + sensor_id + "...\n");

    api.get('api/sensor/2/' + sensor_id, {
      headers
    })
      .then(function (response) {

        // If we are checking humidity sensor data
        if (sensor_id === 20) {
          setTemperatureSensor1(response.data["valor_temperatura"]);
          setHumiditySensor1(response.data["valor_umidade"]);
        } else if (sensor_id == 21) {
          setTemperatureSensor2(response.data["valor_temperatura"]);
          setHumiditySensor2(response.data["valor_umidade"]);
        } else if (sensor_id == 22) {
          setTemperatureSensor3(response.data["valor_temperatura"]);
          setHumiditySensor3(response.data["valor_umidade"]);
        }

        // If we are checking motion sensor data
        else if (sensor_id === 25) {

          // Convert from UNIX_TIMESTAMP to Locale Time String
          var hour = new Date(response.data["data"]["_seconds"] * 1000).toLocaleTimeString("en-US", { hour12: false })
          var date = new Date(response.data["data"]["_seconds"] * 1000).toLocaleDateString("en-US")
          // console.log(response.data["data"]["_seconds"])
          var updated = date.concat(" at ")
          updated = updated.concat(hour)
          // console.log(updated)
          setMotion(updated)
        }

        // If we are checking luminosity sensor data
        else if (sensor_id === 26) {
          setLuminosity(response.data["valor"]);
        }

        // Calculating the humidity and temperature mean values
        // and updating state value
        setMeanHumidity(Math.round((humiditySensor1 + humiditySensor2 + humiditySensor3) / 3))
        setMeanTemperature(Math.round((temperatureSensor1 + temperatureSensor2 + temperatureSensor3) / 3))

      })
      .catch(function (error) {
        alert("Error while retrieving sensors data...")
        console.log("Error while retrieving sensors data:\n" + error);
      });
  }

  const getToken = async (key) => {

    try {

      const value = await AsyncStorage.getItem(key)

      if (value !== null) {
        // console.log("\nGetting data from sensors...\n");
        apiCall(value, 20); // updating humidity/temp sensor data
        apiCall(value, 21); // updating humidity/temp sensor data
        apiCall(value, 22); // updating humidity/temp sensor data
        apiCall(value, 25); // updating motion sensor data
        apiCall(value, 26); // updating luminosity sensor data
      }
    } catch (e) {
      // error reading value
      alert("Error while reading token...\n")
      console.log("Error while reading token...\n" + e);
    }
  }

  function getSensorData() {
    // Getting access-token
    getToken("@storage_Key");
  }

  // Execute this function once to get initial values
  var immediate = setImmediate(function () {
    // console.log("\n[SensorFocused] Defining initial values via Immediate function\n")
    getToken("@storage_Key")
    clearImmediate(immediate)

    // // Updates sensors data every 5min
    // let interval = setInterval(function () {
    //   console.log("\n[SensorFocused] Set values via Interval function\n")
    //   getToken("@storage_Key")
    // }, 180000);
  })

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
            <Text style={styles.state}>AVG. TEMPERATURE:</Text>
            <Text style={styles.stateMode}>{meanTemperature} °C</Text>
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
            <Text style={styles.state}>MOTION (M/D/Y):</Text>
            <Text style={styles.stateMode}>{motion}</Text>
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
            <Text style={styles.state}>AVG. HUMIDITY:</Text>
            <Text style={styles.stateMode}>{meanHumidity}%</Text>
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
