import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView
} from "react-native";
import React, { useEffect } from "react";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import styles from './styles';

const { width } = Dimensions.get("window");

const DetailScreen = ({navigation}:any) => {


  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", }}
    >
      <ScrollView
        style={{
        //   flex: 1,
          paddingHorizontal: 20,
          paddingVertical: 20,
          marginTop: 30,
        }}
      >
        <View style={{flex:1}} >
          <Image
            source={require("../../res/image/hunza.jpg")}
            style={{
              width: width,
              height: 200,
              borderRadius: 20,
              resizeMode: "cover",
            }}
          />
          <View style={styles.topview}>
            <TouchableOpacity
              style={styles.topviewbtn1}
              onPress={() => {
                navigation.navigate("Discover");
              }}
            >
              <FontAwesome5 name="chevron-left" size={24} color="skyblue" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.topviewbtn2}>
              <FontAwesome5 name="heartbeat" size={24} color="white" /> 
            </TouchableOpacity>
          </View>
          <View style={styles.topviewtext}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}> 30000Pkr </Text>
          </View>
        </View>

        {/*    Details    */}

        <View style={{marginTop:20}}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>About</Text>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            We took a tour of Kalash valleys with Pakistan Tourism services. It
            was an amazing tour, we saw the Kalashi culture and met with the
            people to know about their life & culture. We enjoyed the Kalashi
            Joshi Festival, that is very colourful and we enjoyed the dance too
            much. This company has a very strong network every where they took
            us into the houses of Kalashi people
          </Text>
        </View>

        <View style={{ alignContent: "center", marginTop: 30 }}>
          <View style={styles.detail}>
            <FontAwesome
              name="group"
              size={24}
              color="skyblue"
              style={{ marginRight: 15, marginTop: 5 }}
            />
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              Age Limit(1-90)
            </Text>
          </View>
          <View style={styles.detail}>
            <MaterialIcons
              name="departure-board"
              size={24}
              color="skyblue"
              style={{ marginRight: 15, marginTop: 5 }}
            />
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              Depature Time:
            </Text>
          </View>
          <View style={styles.detail}>
            <FontAwesome
              name="group"
              size={24}
              color="skyblue"
              style={{ marginRight: 15, marginTop: 5 }}
            />
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              Total Days:
            </Text>
          </View>
        </View>

        {/* bottom Btn Book Now */}

        <View
          style={{
            justifyContent: "center",
            marginTop: 30,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: '80%',
              height: 60,
              backgroundColor: "blue",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 30,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
              Book Now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;

