import{SafeAreaView,StyleSheet,Button,Alert} from "react-native";
import React, { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { launchCamera } from 'react-native-image-picker';


export default function Post(){
/*
    useEffect(() => {
    openCamera();
  }, []);

  const openCamera = () => {
    let options = {
      mediaType: 'photo',
      cameraType: 'back',
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        Alert.alert('User cancelled camera');
      } else if (response.errorCode) {
        Alert.alert('Camera error: ', response.errorMessage);
      } else {
        console.log('Photo URI: ', response.assets[0].uri);
        // handle the response (save, upload, etc.)
      }
    });
  };*/
  return(
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.gradient} 
      >
      <SafeAreaView style={styles.container}>
        <Button title="Open Camera" /*onPress={openCamera}*/ />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50
  },
  gradient: {
    flex: 1, 
  },
});