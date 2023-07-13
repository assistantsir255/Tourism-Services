import { StyleSheet } from "react-native";

export default StyleSheet.create({
  textConatiner:{
  marginBottom:10},
    container: {
        // flexDirection: "row",
        margin: 20,
      },
      outertext: {
        
        fontSize: 30,
        color: '#000',
        fontWeight: "bold",
      },
    
      secViewT1: {
        fontSize: 32,
        color:'#000',
        fontWeight: "bold",
      },
      secViewT2: {
        fontWeight: "bold",
        color: '#000',
        fontSize: 24,
        // padding:5
      },
      secViewT3: {
        fontWeight: "normal",
        color: "#fff",
        fontSize: 18,
        // padding:5
      },
      mainView: {
        flex: 1,
        // justifyContent:'center',
        // alignItems:'center',
        // padding: 5,
      },
      backgroundImage: {
        // position:'absolute',
        flex: 1,
        resizeMode: "cover",
      },
      getbtn: {
          width:150,
          height:90,
          backgroundColor: "skyblue",
          alignItems: "center",
          justifyContent: "center",
          marginTop:70,
        borderRadius:20
    
      },

})