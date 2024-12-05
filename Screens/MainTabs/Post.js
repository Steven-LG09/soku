import React, { useState } from 'react';
import { TextInput, StyleSheet, SafeAreaView,Alert, TouchableOpacity,Text} from 'react-native';
import { db } from '../../Firebase/FirebaseConfig';
import { collection, addDoc } from '@firebase/firestore';
import { LinearGradient } from 'expo-linear-gradient';
import { auth } from '../../Firebase/FirebaseConfig';

export default function Post(){

  const [mainImage, setMainImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [name2, setName2] = useState('');
  const [description2, setDescription2] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [isVisible2, setIsVisible2] = useState(false);
  
  const handlePost = async () => {
    try {
      const auth1 = auth;
      const user = auth1.currentUser;
      if (!user) {
        console.error('No user is signed in.');
        return;
      }

      const userId = user.uid;

      await addDoc(collection(db, 'userPosts'), {
        type: 'Feed1',
        MainImage: mainImage,
        ProImage: 'https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg',
        description: description,
        name: name,
        uid: userId
      });
      Alert.alert('Success', 'Feed 1 Data Added');
    } catch (error) {
      console.error('Error adding data: ', error);
      Alert.alert('Error', 'Failed to add data');
    }
  };

  const handlePost2 = async () => {
    try {
      const auth1 = auth;
      const user = auth1.currentUser;
      if (!user) {
        console.error('No user is signed in.');
        return;
      }

      const userId = user.uid;

      await addDoc(collection(db, 'userPosts'), {
        type: 'Feed2',
        ProImage: 'https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg',
        description: description2,
        name: name2,
        uid: userId
      });
      Alert.alert('Success', 'Feed 2 Data Added');
    } catch (error) {
      console.error('Error adding data: ', error);
      Alert.alert('Error', 'Failed to add data');
    }
  };

  function Visibility(){
    setIsVisible(!isVisible)
    setIsVisible2(!isVisible2)
  }

  return(
    <LinearGradient
      colors={['#4A4947', '#000000', '#000000']}
      style={styles.gradient} 
      >
      <SafeAreaView style={styles.container}>
        {isVisible &&<Text style={styles.name}>Soku Feed 1</Text>}
        {isVisible &&<TextInput
          style={styles.input}
          placeholder="Post Image"
          placeholderTextColor="lightblue"
          value={mainImage}
          onChangeText={setMainImage}
        />}

        {isVisible &&<TextInput
          style={styles.input}
          placeholder="Post name"
          placeholderTextColor="lightblue"
          value={name}
          onChangeText={setName}
        />}
        {isVisible &&<TextInput
          style={styles.inputD}
          placeholder="Post description"
          placeholderTextColor="lightblue"
          value={description}
          onChangeText={setDescription}
          multiline
        />}
        {isVisible &&<TouchableOpacity
        style={styles.buttonPo}
        onPress={handlePost}
        >
          <Text style={styles.textPo}>Post</Text>
        </TouchableOpacity>}

        {isVisible2 &&<Text style={styles.name}>Soku Feed 2</Text>}
        {isVisible2 &&<TextInput
          style={styles.input}
          placeholder="Post name"
          placeholderTextColor="lightblue"
          value={name2}
          onChangeText={setName2}
        />}
        {isVisible2 &&<TextInput
          style={styles.inputD}
          placeholder="Post description"
          placeholderTextColor="lightblue"
          value={description2}
          onChangeText={setDescription2}
          multiline
        />}
        {isVisible2 &&<TouchableOpacity
        style={styles.buttonPo}
        onPress={handlePost2}
        >
          <Text style={styles.textPo}>Post</Text>
        </TouchableOpacity>}

        <TouchableOpacity
        style={styles.buttonPo}
        onPress={Visibility}
        >
          <Text style={styles.textPo}>Change Feed</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  gradient: {
    flex: 1, 
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: 'lightblue',
    borderWidth: 2,
    borderRadius: 15,
    paddingHorizontal: 15,
    marginVertical: 10,
    color: 'lightblue',
    backgroundColor: 'black',
    shadowColor: 'lightblue',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 18,
    fontFamily: 'serif'
  },
  inputD: {
    width: '90%',
    height: 100,
    borderColor: 'lightblue',
    borderWidth: 2,
    borderRadius: 15,
    paddingHorizontal: 15,
    marginVertical: 10,
    color: 'lightblue',
    backgroundColor: 'black',
    shadowColor: 'lightblue',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 18,
    fontFamily: 'serif'
  },
  buttonPo: {
    marginTop: 20,
    width: 200,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'lightblue',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 18,
  },
  textPo: {
    fontFamily: 'serif',
    color: '#192f6a',
    fontSize: 20
  },
  name: {
    textAlign: 'center',
    color: 'white',
    fontSize: 60,
    fontFamily: 'serif',
    textShadowColor: '#192f6a',
    textShadowOffset: {width: 0, height: 3},
    textShadowRadius: 6,
    marginBottom: 20
  },
});