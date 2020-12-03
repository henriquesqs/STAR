import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import PowerIcon from "../../../../assets/icons/power.png"
import LowTempIcon from "../../../../assets/icons/low-temp.png";
import HighTempIcon from "../../../../assets/icons/high-temp.png";
import TempNowIcon from "../../../../assets/icons/temp-now.png";
import NoPeopleIcon from "../../../../assets/icons/no-people.png";
import ClockIcon from "../../../../assets/icons/clock.png";
import NewButton from "../../Button/NewButton.js";
import CircularButton from "../../CircularButton/CircularButton.js";

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
            <Text style={styles.stateMode}>teste</Text>
          </View>
        </View>
        <View style={styles.boxbuttons}>
          <NewButton
            width={100}
            height={50}
            bgColor={"#454ADE"}
            bRadius={10}
            title={"teste"}
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
                // tintColor: iconsColor,
              }}
            />
          </View>
          <View style={{ flexDirection: "column", flex: 0.65 }}>
            <Text style={styles.state}>MIN TEMP.:</Text>
            <Text style={styles.stateMode}>teste</Text>
          </View>
        </View>
        <View style={styles.boxbuttons}>
          <View style={styles.doublebutton}>
            <CircularButton
              width={45}
              height={45}
              bgColor={"#454ADE"}
              bRadius={100}
              title="+"
              txtColor="white"
              txtSize={30}
              marginTop={"5%"}
            />
            <CircularButton
              width={45}
              height={45}
              bgColor={"#454ADE"}
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
              }}
            />
          </View>
          <View style={{ flexDirection: "column", flex: 0.65 }}>
            <Text style={styles.state}>MAX TEMP.:</Text>
            <Text style={styles.stateMode}>teste</Text>
          </View>
        </View>
        <View style={styles.boxbuttons}>
          <View style={styles.doublebutton}>
            <CircularButton
              width={45}
              height={45}
              bgColor={"#454ADE"}
              bRadius={100}
              title="+"
              txtColor="white"
              txtSize={30}
              marginTop={"5%"}
            />
            <CircularButton
              width={45}
              height={45}
              bgColor={"#454ADE"}
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
              }}
            />
          </View>
          <View style={{ flexDirection: "column", flex: 0.65 }}>
            <Text style={styles.state}>TEMP. NOW:</Text>
            <Text style={styles.stateMode}>teste</Text>
          </View>
        </View>
        <View style={styles.boxbuttons}>
          <View style={styles.doublebutton}>
            <CircularButton
              width={45}
              height={45}
              bgColor={"#454ADE"}
              bRadius={100}
              title="+"
              txtColor="white"
              txtSize={30}
              marginTop={"5%"}
            />
            <CircularButton
              width={45}
              height={45}
              bgColor={"#454ADE"}
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
              }}
            />
          </View>
          <View style={{ flexDirection: "column", flex: 0.65 }}>
            <Text style={styles.state}>W/ NOBODY:</Text>
            <Text style={styles.stateMode}>teste</Text>
          </View>
        </View>
        <View style={styles.boxbuttons}>
          <NewButton
            width={100}
            height={50}
            bgColor={"#454ADE"}
            bRadius={10}
            title={"teste"}
            txtColor="white"
            txtSize={13}
            marginTop={"16%"}
          ></NewButton>
        </View>
      </View>

      <View style={styles.cardSixthIcon}>
        <View style={styles.firstdescription}>
          <View style={styles.imageBlock}>
            <Image
              source={ClockIcon}
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
            <Text style={styles.state}>WAIT TIME:</Text>
            <Text style={styles.stateMode}>teste</Text>
          </View>
        </View>
        <View style={styles.boxbuttons}>
          <View style={styles.doublebutton}>
            <CircularButton
              width={45}
              height={45}
              bgColor={"#454ADE"}
              bRadius={100}
              title="+"
              txtColor="white"
              txtSize={30}
              marginTop={"5%"}
            />
            <CircularButton
              width={45}
              height={45}
              bgColor={"#454ADE"}
              bRadius={100}
              title="-"
              txtColor="white"
              txtSize={30}
              marginTop={"0%"}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SensorFocused;
