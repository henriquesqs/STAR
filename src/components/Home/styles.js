import { StyleSheet } from "react-native";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';


const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  containerButtons: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  containerContent: {
    width: "100%",
    flex: 0.5,
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,

  },
  imagesIcons: {
    flex: 0.5,
    width: 300,
    height: 100,
    paddingTop: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

  },
  textContent: {
    width: "100%",
    flex: 0.5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  pageTitle: {
    marginTop: 150,
    fontSize: 100,
    color: 'purple',
    fontFamily: "Roboto_700Bold",
  },
  pageSubTitle: {
    width: 300,
    fontSize: 39,
    color: 'purple',
    fontFamily: 'Roboto_500Medium',
    textAlign: "center",
    lineHeight: 40,
  },

});

export default styles;