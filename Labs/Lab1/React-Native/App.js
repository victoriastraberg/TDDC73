import React from 'react';
import {
  SafeAreaView,
  ScrollView, 
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Button, 
  Image      //Added
} from 'react-native';

import { Header } from 'react-native-elements';

 const App: () => Node = () => {

 
  return (

    <SafeAreaView style={styles.container}>

      <View style ={styles.headerTitle}>
       <Text style={styles.txtInput1}> Laboration 1 - React Native </Text>  
      </View>

      <View style={styles.imageContainer}>
        <Image style={styles.imgStyle} source={require('./react-native.png')} />
      </View>

      <View style={styles.buttonGroup}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}> BUTTON 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}> BUTTON 2</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}> BUTTON 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}> BUTTON 4</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.emailContainer}>

        <View>
          <Text style={{marginVertical: 12}, styles.email}>Email</Text>
        </View>

        <View>
          <TextInput style={styles.txtInput2} placeholder="Type your email here..."/>
        </View>

      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container:{
    backgroundColor: "white" ,
  },

  headerTitle:{
    margin: 20,
    backgroundColor: "#00dbff",
    alignItems: "center", 
    width: 350,
    height: 50,
    borderRadius: 10,
  },

  txtInput1:{
    fontSize: 25,
    fontWeight: "bold",
    textAlign: 'center',
    margin: 10
  },

  imageContainer:{
    alignItems: "center", 
    margin:10,
  },

  imgStyle:{
    width: 180,
    height: 160
  },

  buttonGroup: {
    width: "100%",
    marginBottom:70
  },

  buttonRow: {
    marginTop: 50,
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
  }, 

  button:{
    width: 100,
    height: 50,
    backgroundColor: "#00dbff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },

  buttonText: { //This is a single line comment
    fontSize: 15,
    fontWeight: "bold",
  },

  emailContainer:{
    alignItems: "center", 
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  email:{
    fontWeight: "bold",
    fontSize: 20
  },

  txtInput2:{
    fontSize: 18,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },

  });

export default App;

