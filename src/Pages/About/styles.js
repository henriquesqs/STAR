import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
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
  containerButtons: {
    backgroundColor: "white",
    width: "80%",
    height: "100%",
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  imagesIcons: {
    flex: 0.3,
    width: 300,
    // marginTop: 300,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  textContent: {
    width: "100%",
    flex: 0.5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  pageTitle: {
    // marginTop: 200,
    fontSize: 100,
    color: '#454ADE',
    fontFamily: "Roboto_700Bold",
  },
  pageSubTitle: {
    width: 300,
    fontSize: 39,
    color: '#454ADE',
    fontFamily: 'Roboto_500Medium',
    textAlign: "center",
    lineHeight: 40,
  },
  backButton: {
    marginTop: '15%',
    width: 40,
    height: 50,
    left: -130,
    flex: 0.3,
  },
  backArrow: {
    width: 25,
    height: 24,
    marginTop: 15,
    left: 6,
    tintColor: '#454ADE'
  }

});

export default styles;