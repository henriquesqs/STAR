import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  focused: {
    flex: 0.8,
    width: "85%",
    flexDirection: "column",
    backgroundColor: "#1B1F3B",
    top: "-2%",
    borderBottomRightRadius: 13,
    borderBottomLeftRadius: 13,
  },
  firstdescription: {
    flex: 0.6,
    flexDirection: "row",
  },
  imageBlock: {
    flex: 0.35,
    flexDirection: "row",
    justifyContent: "center",
  },
  boxbuttons: {
    flex: 0.4,
    justifyContent: "center",
    flexDirection: "row",
  },
  doublebutton: {
    flex: 0.9,
    justifyContent: "space-around",
    flexDirection: "row",
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
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#1B1F3B",
    flex: 0.142,
    justifyContent: "space-between",
  },
  cardSecondIcon: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#1B1F3B",
    flex: 0.142,
    justifyContent: "space-around",
  },
  cardThirdIcon: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#1B1F3B",
    flex: 0.142,
    justifyContent: "space-around",
  },
  cardFourthIcon: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#1B1F3B",
    flex: 0.142,
    justifyContent: "space-around",
  },
  cardFifthIcon: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#1B1F3B",
    flex: 0.142,
    justifyContent: "space-around",
  },
  cardSixthIcon: {
    // alignSelf: 'center',
    // width: "66%",
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#1B1F3B",
    flex: 0.142,
    borderBottomRightRadius: 13,
    borderBottomLeftRadius: 13,
    // justifyContent: "space-between",
    justifyContent: "space-around",
  },
  lastUpdateText: {
    fontSize: 15,
    color: "white",
    fontFamily: "Roboto_500Medium",
  }
});

export default styles;
