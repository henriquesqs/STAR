import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  focused: {
    flex: 0.8,
    width: "85%",
    flexDirection: "column",
    backgroundColor: "#1B1F3B",
    borderBottomRightRadius: 13,
    borderBottomLeftRadius: 13,
  },
  firstdescription: {
    flex: 0.9,
    flexDirection: "row",
  },
  imageBlock: {
    flex: 0.35,
    flexDirection: "row",
    justifyContent: "center",
  },
  cardSubtitle: {
    justifyContent: "center",
    backgroundColor: "#1B1F3B",
    flex: 0.142,
  },
  sub: {
    fontSize: 20,
    color: "white",
    fontFamily: "Roboto_500Medium",
    alignSelf: "center",
  },
  state: {
    fontSize: 18,
    color: "white",
    fontFamily: "Roboto_500Medium",
  },
  stateMode: {
    fontSize: 13,
    color: "#9949C8",
    fontFamily: "Roboto_500Medium",
  },
  cardFirstIcon: {
    // width: "100%",
    flexDirection: "row",
    backgroundColor: "#1B1F3B",
    flex: 0.16,
    // justifyContent: "center",
  },
  cardSecondIcon: {
    // width: "100%",
    flexDirection: "row",
    backgroundColor: "#1B1F3B",
    flex: 0.16,
    // justifyContent: "space-around",
  },
  cardThirdIcon: {
    // width: "100%",
    flexDirection: "row",
    backgroundColor: "#1B1F3B",
    flex: 0.16,
    // justifyContent: "space-around",
  },
  cardFourthIcon: {
    // width: "100%",
    flexDirection: "row",
    backgroundColor: "#1B1F3B",
    flex: 0.16,
    // justifyContent: "space-around",
  },
  cardFifthIcon: {
    // width: "100%",
    flexDirection: "row",
    backgroundColor: "#1B1F3B",
    flex: 0.16,
    justifyContent: "space-around",
  },
});

export default styles;
