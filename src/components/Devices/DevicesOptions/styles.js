import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  deviceOption: {
    flex: 1,
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#1B1F3B',
    // top: 50,
  },
  icon: {
    flex: 0.2
  },
  title: {
    flex: 0.6,
    fontFamily: 'Roboto_500Medium',
    fontSize: 23,
    color: 'white',
  },
});

export default styles;