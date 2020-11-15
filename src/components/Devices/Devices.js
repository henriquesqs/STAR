import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { View, TouchableOpacity } from 'react-native';
import DevicesOptions from "./DevicesOptions/DevicesOptions.js";
import Air from "../../../assets/icons/air.png";
import Sensor from "../../../assets/icons/sensor.png";
import DevicesOptionsFocused from "./DevicesOptions/DevicesOptionsFocused/DevicesOptionsFocused.js";

import styles from "./styles.js";

// This devices returns the two main functions of our app:
// A component, DeviceOptions, that holds all options that
// user will be able to choose in order to control the
// air conditioner functions.
// And the same component, DeviceOptions, that holds all
// the information returned from the sensors we are connected to.
const Devices = ({ navigation }) => {

  const [secondTop, setSecondTop] = useState(50);
  const [firstFlex, setFirstFlex] = useState(0.15);
  const [secondFlex, setSecondFlex] = useState(0.15);
  const [firstDisplay, setFirstDisplay] = useState('flex');
  const [secondDisplay, setSecondDisplay] = useState('flex');

  const [isFirstFocused, setisFirstFocused] = useState(false);
  // const [isSecondFocused, setisSecondFocused] = useState(false);

  // This function handles the touch in DevicesOptions component
  // and changes the flex from the first/second component depending
  // on which component is pressed
  function focusFirstDevicesOptions() {

    setisFirstFocused(!isFirstFocused);

    if (!isFirstFocused) {
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
    alert("Coming soon! :)");
  }

  return (
    <>
      <Navbar
        title="Devices"
        description="Select a device to see it status"
        nav={navigation}
      />
      <View style={styles.containerContent}>
        <TouchableOpacity
          style={{ flex: firstFlex, width: '85%', top: 30, display: firstDisplay }}
          onPress={focusFirstDevicesOptions}
        >
          <DevicesOptions
            title="AIR CONDITIONER"
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
            title="SENSORS"
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
      </View>
    </>
  );
}

export default Devices;