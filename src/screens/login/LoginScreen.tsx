import React from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';
import styles from './styles'
const LoginScreen = ({navigation}:any) => {



  const handleSignupPress = () => {
    navigation.navigate('Discover')
   
  };

  const handleLoginPress = () => {
    navigation.navigate('Discover')
   
  };

  return (
    <ImageBackground
      source={require('../../res/image/bg.jpg')} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#fff"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#fff"
            secureTextEntry
          />

          <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate('Discover')}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signupButton} onPress={handleSignupPress}>
            <Text style={styles.signupText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};


export default LoginScreen;
