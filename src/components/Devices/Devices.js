import React, { useState, SyntheticEvent } from 'react';
import Navbar from '../Navbar/Navbar';
import { View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import DevicesOptions from "./DevicesOptions/DevicesOptions.js";
import Air from "../../../assets/icons/air.png";
import Sensor from "../../../assets/icons/sensor.png";
import DevicesOptionsFocused from "./DevicesOptions/DevicesOptionsFocused/DevicesOptionsFocused.js";

import styles from "./styles.js";

const Devices = () => {

  const [secondTop, setSecondTop] = useState(50);
  const [firstFlex, setFirstFlex] = useState(0.15);
  const [secondFlex, setSecondFlex] = useState(0.15);
  const [firstDisplay, setFirstDisplay] = useState('flex');
  const [secondDisplay, setSecondDisplay] = useState('flex');

  const [isFirstFocused, setisFirstFocused] = useState(false);
  const [isSecondFocused, setisSecondFocused] = useState(false);

  function focusFirstDevicesOptions() {

    setisFirstFocused(!isFirstFocused);

    if (!isFirstFocused) {
      // setFirstFlex(0.75);
      setSecondFlex(0);
      setSecondDisplay('none');
    }
    else {
      setFirstFlex(0.15);
      setSecondFlex(0.15);
      setSecondDisplay('flex');
    }
  }

  function focusSecondDevicesOptions() {

    alert("Em breve!");
    // setisSecondFocused(!isSecondFocused);

    // if (!isSecondFocused) {
    //   // setSecondFlex(0.7);
    //   setFirstFlex(0);
    //   setFirstDisplay('none');
    //   setSecondTop(30);
    // }

    // else {
    //   setFirstFlex(0.15);
    //   setSecondFlex(0.15);
    //   setFirstDisplay('flex');
    //   setSecondTop(50);
    // }
  }

  return (
    <>
      <Navbar
        title="Devices"
        description="Select a device to see it status"
      />
      <View style={styles.containerContent}>
        <TouchableOpacity
          style={{ flex: firstFlex, width: '85%', top: 30, display: firstDisplay }}
          onPress={focusFirstDevicesOptions}
        >
          <DevicesOptions
            title="AR CONDICIONADO"
            iconWidth={40}
            iconHeight={37}
            icon={Air}
          >
          </DevicesOptions>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flex: secondFlex, width: '85%', top: secondTop, display: secondDisplay }}
          onPress={focusSecondDevicesOptions}
        >
          <DevicesOptions
            title="SENSORES"
            iconWidth={50}
            iconHeight={40}
            icon={Sensor}
          >
          </DevicesOptions>
        </TouchableOpacity>

        {isFirstFocused ?
          <DevicesOptionsFocused title="AR CONDICIONADO"
            iconWidth={40}
            iconHeight={37}
            icon={Air}></DevicesOptionsFocused>
          : null
        }
        {/* {isSecondFocused ?
          <DevicesOptionsFocused title="SENSOR"
            iconWidth={40}
            iconHeight={37}
            icon={Sensor}></DevicesOptionsFocused>
          : null
        } */}
      </View>
    </>
  );
}

export default Devices;