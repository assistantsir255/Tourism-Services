import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/home/Home';
import DetailScreen from '../screens/detail-screen/DetailScreen';
import LoginScreen from '../screens/login/LoginScreen';
import Discover from '../screens/discover/Discover'; 
import Drawer from '../drawer/Drawer';


export default function Navigator() {

const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
            {/* <Stack.Screen name='Drawer' component={Drawer}/> */}
            <Stack.Screen name='Home' component={Home} options={{headerShown:false}} />
            <Stack.Screen name='DetailScreen' component={DetailScreen} options={{headerShown:false}}/>
            <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown:false}} />
            <Stack.Screen name='Discover' component={Discover} options={{headerShown:false}}/>
        
        </Stack.Navigator>

    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})