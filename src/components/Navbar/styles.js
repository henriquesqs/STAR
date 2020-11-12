import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  navbar: {
    flex: 0.2,
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#454ADE',
    marginTop: '7.3%',
  },
  contentTexts: {
    flex: 0.7,
  },
  backImage: {
    flex: 0.1,
    left: 15,
    top: 5
  },
  pageTitle: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 30,
    color: 'white',
  },
  subTitle: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    color: 'white',
  }
});

export default styles;