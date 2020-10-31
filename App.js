import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import OurButton from "./src/components/Button/Button.js";

const App = () => {
  return (
    <View style={styles.container}>
      <OurButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;