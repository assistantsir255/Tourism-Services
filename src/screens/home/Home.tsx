import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import styles from './styles';

const Home = ({navigation}: any) => {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require('../../res/image/islamabad.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.outertext}>Go Trip</Text>
          <Text style={styles.secViewT1}>Enjoy The Trip with</Text>
          <Text style={styles.secViewT2}>Good Moments</Text>
          <Text style={styles.secViewT3}>
            Traveling to new places: Exploring different destinations,
            experiencing different cultures,and discovering new sights and
            sounds can be incredibly rewarding and create lasting memories.
          </Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}
            style={styles.getbtn}>
            <Text style={{color: '#000', fontWeight: 'bold', fontSize: 18}}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {/* <Image source={require('../assets/bg.jpg')} style={{flex:1, width:width, height:height,position:'relative'}}/> */}
    </View>
  );
};

export default Home;
