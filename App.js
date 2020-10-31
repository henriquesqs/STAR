import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from "./src/components/Button/Button.js";
import { Container, Header } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

const App = () => {
  return (
    <View style={styles.container}>
      <Button title="CONNECT"/>
      <Button title="LEARN MORE"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    marginTop: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
});

export default App;