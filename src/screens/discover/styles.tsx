import { StyleSheet } from "react-native"

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#ffff',
        position: 'relative',
      },
      topView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 20,
      },
      topImg: {
      
        // justifyContent: 'center',
      },
      searchView: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        elevation:0.5,
      },
      tips: {
        marginTop: 20,
        paddingRight: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      opacity: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
      },
      item: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        flexWrap: 'wrap',
        paddingLeft: 50,
        paddingRight: 50,
      },



});