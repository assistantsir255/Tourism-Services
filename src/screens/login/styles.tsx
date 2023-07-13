import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
      },
      loginContainer: {
        width: '80%',
      },
      input: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
        color: '#fff',
      },
      loginButton: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
      },
      loginText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
      },
      signupButton: {
        backgroundColor: '#e74c3c',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
      },
      signupText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
      },

});