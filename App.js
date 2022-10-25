/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  _Text,
} from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
const App = () => {
  useEffect(()=> {
    GoogleSignin.configure()
  }, [])

  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("userInfo ", userInfo)
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error)
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error)
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error)
      } else {
        console.log(error)
      }
    }
  };

  const googleSignOut = async () => {
    try {
      await GoogleSignin.signOut();
      console.log("user out")
    } catch (error) {
      console.error(error);
    }
  };
  


  return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.btnStyle} onPress={googleLogin}>
            <Text>Google Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnStyleOut} onPress={googleSignOut}>
            <Text>Google Logout</Text>
          </TouchableOpacity>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnStyle:{
    height: 48,
    paddingHorizontal: 8,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  },
  btnStyleOut:{
    height: 48,
    paddingHorizontal: 8,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  }
});

export default App;
