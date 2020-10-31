import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const OurButton = () => {
  return (
    <Button title="CONNECTED BABY" style={styles.button} />
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    height: '15%',
    width: '15%',
  }
});

export default OurButton;