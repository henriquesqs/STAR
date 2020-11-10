import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
  },
  containerButtons: {
    backgroundColor: "white",
    width: "80%",
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
    marginTop: 300,
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
    marginTop: 350,
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