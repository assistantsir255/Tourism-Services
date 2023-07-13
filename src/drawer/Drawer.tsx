import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Discover from '../screens/discover/Discover';
import LoginScreen from '../screens/login/LoginScreen';
import DetailScreen from '../screens/detail-screen/DetailScreen';


const Drawer = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator initialRouteName='Discover' screenOptions={{}}>
          <Drawer.Screen name='Discover' component={Discover} options={{headerShown:false}} />
          {/* <Drawer.Screen name='LoginScreen' component={LoginScreen} options={{headerShown:false}} />
          <Drawer.Screen name='DetailScreen' component={DetailScreen} options={{headerShown:false}} /> */}
          {/* Add other screens and their components here */}
        </Drawer.Navigator>
      
    );
}

export default Drawer

const styles = StyleSheet.create({})