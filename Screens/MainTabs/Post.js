import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, LinearGradient, SafeAreaView,Alert} from 'react-native';
import { db } from '../../Firebase/FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export default function Post(){

  const [mainImage, setMainImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handlePost = async () => {
    try {
      await addDoc(collection(db, 'AutoFeed'), {
        type: 'Feed1',
        MainImage: mainImage,
        ProImage: 'https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg',
        description: description,
        name: name
      });
      Alert.alert('Success', 'Feed 1 Data Added');
    } catch (error) {
      console.error('Error adding data: ', error);
      Alert.alert('Error', 'Failed to add data');
    }
  };

  return(
    <LinearGradient
      colors={['#4A4947', '#000000', '#000000']}
      style={styles.gradient} 
      >
      <SafeAreaView style={styles.container}>
        <TextInput
          placeholder="Post Image"
          value={mainImage}
          onChangeText={setMainImage}
        />

        <TextInput
          placeholder="Post name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Post description"
          value={description}
          onChangeText={setDescription}
          multiline
        />
        <Button
        title="post"
        onPress={handlePost}
        />
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