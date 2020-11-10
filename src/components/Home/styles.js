import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  containerPrincipal:{
    backgroundColor: "green",
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  containerButtons: {
    backgroundColor: "white",
    width:"100%",
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  containerContent: {
    width:"100%",
    flex: 0.5,
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent:"center",
    alignItems:"center",
    fontSize: 16,
    
  },
  imagesIcons: {
    flex: 0.5,
    width:"100%", 
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems:"center",
    
  },
  textContent: {
    width:"100%",
    
    flex:0.5,
    backgroundColor:"white",
    justifyContent:"center",
    alignItems:"center",
  }
  
});

export default styles;