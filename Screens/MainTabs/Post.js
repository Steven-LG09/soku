import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, Alert, LinearGradient, SafeAreaView} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default function Post(){

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const postData = async (userUID, postContent) => {
    try {
      const docRef = await firestore()
        .collection('users')
        .doc(userUID)
        .collection('posts')
        .add(postContent);

      console.log('Post added with ID:', docRef.id);
      Alert.alert('Success', 'Post created successfully!');
    } catch (error) {
      Alert.alert('Error', error.message);
      console.error('Error posting data:', error.message);
    }
  };

  const handlePost = async () => {
    setLoading(true);

    if (user) {
      const postContent = {
        title,
        content,
        timestamp: firestore.FieldValue.serverTimestamp(),
      };
      await postData(user.uid, postContent);
    }

    setLoading(false);
  };

  return(
    <LinearGradient
      colors={['#4A4947', '#000000', '#000000']}
      style={styles.gradient} 
      >
      <SafeAreaView style={styles.container}>

        <TextInput
          style={styles.input}
          placeholder="Post Title"
          value={title}
          onChangeText={setTitle}
        />

        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Post Content"
          value={content}
          onChangeText={setContent}
          multiline
        />
        <Button
        title={loading ? 'Posting...' : 'Post'}
        onPress={handlePost}
        disabled={loading}
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