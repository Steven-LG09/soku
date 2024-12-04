import {SafeAreaView,StyleSheet,Text,View,Image,TouchableOpacity,Modal,ScrollView,Dimensions,Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, where, query } from '@firebase/firestore';
import { db } from '../../Firebase/FirebaseConfig';
import { auth } from '../../Firebase/FirebaseConfig';

const { width } = Dimensions.get('window'); 

export default function Profile({ navigation }) {
  const [profile, setProfile] = useState(null);
  const [Feed1, setFeed1] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const fetchProfile = async () => {
    try {
      const auth1 = auth;
      const user = auth1.currentUser;
      if (!user) {
        console.error('No user is signed in.');
        return;
      }

      const userId = user.uid;
      const q = query(collection(db, 'users'), where('uid', '==', userId));
      
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        setProfile({ id: userDoc.id, ...userDoc.data() });
      }
      
      const q1 = query(collection(db, 'userPosts'),where('uid', '==', userId),where('type', '==', 'Feed1'));
      const querySnapshot1 = await getDocs(q1);
      const Feed1List = querySnapshot1.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setFeed1(Feed1List);
    } catch (error) {
      console.error('Error fetching user feed: ', error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);
  if (!profile) {
    return <Text>Loading...</Text>;
  }

  function Alerta(){
    Alert.alert('Ups','Not available Right now')
  }

  return (
    <LinearGradient
      colors={['#4A4947', '#000000', '#000000']}
      style={styles.gradient}>
      <SafeAreaView style={styles.container}>


        <View style={styles.secOne}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
          <Image
          style={styles.imagePM}
          source={{uri: profile.photo}}/>
          <Text style={styles.message}>{profile.name}</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity></View>
          </View>
        </Modal>
          <View style={styles.secIma}>
          <TouchableOpacity
          onPress={()=>setModalVisible(true)}>
            {profile.photo ? (
              <Image style={styles.imagePro} source={{ uri: profile.photo }} />
            ) : (
              <Text>No image available</Text>
            )}
            </TouchableOpacity>
            <View style={styles.postV}>
              <Text style={styles.textSecDos}>{Feed1.length} Posts</Text>
              <Text style={styles.textSecDos}>0 Seguidores</Text>
              <Text style={styles.textSecDos}>0 Seguidos</Text>
            </View>
            <View style={styles.options}>
          <TouchableOpacity
            style={styles.buttonOp}
            onPress={() => navigation.navigate('ProfileOptions')}>
            <Image
              style={styles.imageOp}
              source={require('../../assets/settings.png')}
            />
          </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.secDos}>
            <Text style={{ fontWeight: 'bold' }}>{profile.name}</Text>
            {'\n'}
            {profile.description}
          </Text>
        </View>
        <View style={styles.secTres}>
          <Text style={styles.buttonsPi}>Posts</Text>
          
          <Text style={styles.buttonsP}
          onPress={Alerta}>Posts 2</Text>

          <Text style={styles.buttonsP}
          onPress={Alerta}>Saves</Text>
        </View>
        <ScrollView>
          <View style={styles.wrapper}>
            {Feed1.map( item => (
              <View style={styles.postsF}>
                {item.MainImage ? (
                  <Image 
                  style={styles.imageFeed}
                  source={{uri: item.MainImage}}
                  />
                ) : (
                  <Text>No image available</Text>
                )}
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  gradient: {
    flex: 1,
  },
  imageOp: {
    width: 30,
    height: 30,
  },
  buttonOp: {
    width: 30,
    height: 30,
    backgroundColor: '#4A4947',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
  },
  imageFeed: {
    width: 100,
    height: 100,
    borderRadius: 15,
    elevation: 9
  },
  imagePro: {
    width: 100,
    height: 100,
    borderRadius: 50,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
  },
  options: {
    marginLeft: 70,
    marginBottom: 100
  },
  secOne: {
    backgroundColor: 'black',
    padding: 5,
    margin: 2,
    borderRadius: 5,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
    borderWidth: 1,
    borderColor: '#192f6a',
  },
  secIma: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 20,
    marginRight: 20,
  },
  secDos: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    fontFamily: 'serif',
    fontSize: 10,
    color: 'white',
  },
  textSecDos: {
    textAlign: 'left',
    marginBottom: 5,
    fontFamily: 'serif',
    fontSize: 13,
    color: 'white',
  },
  secTres: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 2,
    backgroundColor: 'black',
    height: 50,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
    borderWidth: 1,
    borderColor: '#192f6a',
  },
  buttonsP: {
    flex: 1,
    fontSize: 15,
    color: 'white',
    paddingTop: 10,
    textAlign: 'center',
    width: 70,
    height: 40,
  },
  buttonsPi: {
    flex: 1,
    paddingTop: 10,
    textAlign: 'center',
    width: 70,
    height: 40,
    fontSize: 15,
    backgroundColor: '#192f6a',
    borderRadius: 5,
    elevation: 9,
    color: 'white',
  },
  postsF: {
    margin: 5,
    elevation: 9,
    borderRadius: 15,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  postV: {
    marginLeft: 40
  },
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'center',
    width: width - 20,
    marginLeft: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  message: {
    fontFamily: 'serif',
    fontStyle: 'Bold',
    fontSize: 20,
    color: 'white'
  },
  imagePM: {
    width: 200,
    height: 200,
    borderRadius: 100,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
  },
});
