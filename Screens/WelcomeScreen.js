import React, { useContext, useState } from 'react';
import { Text, TextInput, StyleSheet, Pressable, Platform, Alert, SafeAreaView} from 'react-native';
import { login } from '../Utils/Auth';
import { AuthContext } from '../Context/auth-context';
import { LinearGradient } from 'expo-linear-gradient';
import { MainContext } from '../Context/context';


const WelcomeScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authCtx = useContext(AuthContext); 
  const {setInputEmail} =useContext(MainContext);
  const {setInputPass} =useContext(MainContext);

  async function handleLogin() {
    setInputEmail(email);
    setInputPass(password);
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password', [{ text: 'OK' }]);
      return;
    }

    try {
      const token = await login(email, password); 
      authCtx.login(token);

      navigation.navigate('MainTabs'); 
    } catch (error) {
      Alert.alert('Error', 'Login failed. Please try again.');
    }
  }

  return (
    <LinearGradient
    colors={['#4A4947', '#FFFFFF', '#FFFFFF']}
    style={styles.gradient} 
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Soku</Text>
        <Text style={styles.subtitle}>Please log in to continue</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="lightblue"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="lightblue"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />

        <Pressable
          style={({ pressed }) => [
            styles.button,
            Platform.OS === 'ios' ? styles.iosButton : styles.androidButton,
            pressed ? styles.buttonPressed : null,
          ]}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
    justifyContent: 'center',
    alignItems: 'center'
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
    textShadowOffset: {width: 0, height: 3},
    textShadowRadius: 6,
    elevation: 18
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
    fontFamily: 'serif'
  },
  button: {
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
  iosButton: {
    borderRadius: 25,
  },
  androidButton: {
    borderRadius: 30,
  },
  buttonPressed: {
    backgroundColor: '#4A4947',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'serif'
  },
});