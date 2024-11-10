import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { signUp } from '../Utils/authService';

export default function SignUpScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [photo, setPhoto] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    try {
      const userInfo = { name, age, photo, description };
      await signUp(email, password, userInfo);
      navigation.goBack();
      console.log('User signed up successfully');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <LinearGradient
      colors={['#4A4947', '#000000', '#000000']}
      style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Soku</Text>
        <Text style={styles.subtitle}>Please SignUp to continue</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          value={age}
          onChangeText={setAge}
        />
        <TextInput
          style={styles.input}
          placeholder="Photo"
          value={photo}
          onChangeText={setPhoto}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button1}
          onPress={handleSignUp}>
          <Text style={styles.buttonText1}>Create Account</Text>
        </TouchableOpacity>
        {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 80,
    fontFamily: 'serif',
    textShadowColor: '#192f6a',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 6,
    elevation: 18,
  },
  subtitle: {
    fontSize: 15,
    fontFamily: 'serif',
    color: '#192f6a',
    textShadowColor: '#192f6a',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 6,
    marginTop: 30,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#192f6a',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginVertical: 10,
    color: '#192f6a',
    backgroundColor: 'white',
    shadowColor: 'blue',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 18,
    fontFamily: 'serif',
  },
  button1: {
    paddingVertical: 15,
    paddingHorizontal: 35,
    backgroundColor: '#192f6a',
    borderRadius: 25,
    marginTop: 20,
    shadowColor: 'blue',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 18,
  },
  buttonText1: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
});