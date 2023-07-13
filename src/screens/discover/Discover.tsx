import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ItemCard from '../../components/itemCard';
import styles from './styles';
import DropdownMenu from '../../components/menuCard';



const Discover = ({navigation}: any) => {

  return (
    
    <SafeAreaView style={styles.mainContainer}>
     
      <View style={styles.topView}>
        <View>
          <Text style={{color: '#0B646B', fontWeight: 'bold', fontSize: 40}}>
            Discover
          </Text>
          <Text style={{color: '#527283', fontWeight: 'bold', fontSize: 35}}>
            the beauty today
          </Text>
        </View> 

                              {/* Menu Button */}
                      {/* <DropdownMenu/> */}
      </View>

                               {/* SEARCH BAR */}

      <View style={styles.searchView}>
        <TextInput placeholder="Search"></TextInput>
      </View>
      <View>
        <ScrollView>
          <View>
            <View style={styles.tips}>
              <Text
                style={{color: '#0B646B', fontWeight: 'bold', fontSize: 28}}>
                Top Trips
              </Text>

              <TouchableOpacity style={styles.opacity}>
                <Text
                  style={{color: '#0B646B', fontWeight: 'bold', fontSize: 20}}>
                  Explore
                </Text>
                <View style={{paddingLeft: 6, marginTop: 6}}>
                  <FontAwesome
                    name="long-arrow-right"
                    size={24}
                    color="#0B646B"
                  />
                </View>
              </TouchableOpacity>
            </View>
                                     {/* CARD CONTAINER */}
            <View style={styles.item}>
              <ItemCard
                navigation={navigation}
                dest={require('../../res/image/murree.jpg')}
                title="Murree"
                location="muree"
              />
              <ItemCard
                navigation={navigation}
                dest={require('../../res/image/hunza.jpg')}
                title="Hunza Vally"
                location="muree"
              />
              <ItemCard
                navigation={navigation}
                dest={require('../../res/image/hunza.jpg')}
                title="Hunza Vally"
                location="muree"
              />
              <ItemCard
                navigation={navigation}
                dest={require('../../res/image/hunza.jpg')}
                title="Hunza Vally"
                location="muree"
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Discover;
