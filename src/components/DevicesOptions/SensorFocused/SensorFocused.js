import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import NewButton from "../../Button/NewButton.js";
import TempSensorIcon from "../../../../assets/icons/TempSensor.png";
import LightSensorIcon from "../../../../assets/icons/LightSensor.png";
import MotionSensorIcon from "../../../../assets/icons/MotionSensor.png";

import styles from "./styles.js";

const SensorFocused = (props) => {

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
            <Text style={styles.stateMode}>teste</Text>
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
            <Text style={styles.stateMode}>teste</Text>
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
            <Text style={styles.stateMode}>teste</Text>
          </View>
        </View>
      </View>

      <View style={styles.cardFourthIcon}>
        <NewButton
          width={100}
          height={50}
          bgColor={"#454ADE"}
          bRadius={10}
          title={"ATUALIZAR"}
          txtColor="white"
          txtSize={13}
          marginTop={"16%"}
        ></NewButton>
      </View>

    </View>
  );
};

export default SensorFocused;
