import{SafeAreaView,StyleSheet,Text,View,Image,TouchableOpacity,FlatList} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, where, query } from '@firebase/firestore';
import { db } from "../../Firebase/FirebaseConfig";


export default function Feed({navigation}){
  const [Feed1, setFeed1] = useState([]);

  const fetchFeed1 = async () => {
    try {
      const q = query(collection(db, 'AutoFeed'),where('type', '==', 'Feed1'));
      const querySnapshot = await getDocs(q);
      const Feed1List = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setFeed1(Feed1List);
    } catch (error) {
      console.error('Error fetching users: ', error);
    }
  };

  useEffect(() => {
    fetchFeed1();
  }, []);

  return(
    <LinearGradient
      colors={['#4A4947', '#000000', '#000000']}
      style={styles.gradient} 
      >
      <SafeAreaView style={styles.container}>
        <View style={styles.appHeader}>
          <TouchableOpacity
          style={styles.buttonsHe}
          onPress={()=>navigation.navigate('Feed2')}
          >
            <Image
            style={styles.imageChat}
            source={require('../MainTabs/images/screen.png')}
            />
          </TouchableOpacity>
            <Text style={styles.name}>Soku</Text>
          <TouchableOpacity
          style={styles.buttonsHe}
          onPress={()=>navigation.navigate('Chats')}
          >
            <Image
            style={styles.imageChat}
            source={require('../MainTabs/images/chat.png')}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={Feed1}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.feed}>
              {item.MainImage ? (
                <Image 
                style={styles.imageFeed}
                source={{uri: item.MainImage}}
                />
              ) : (
                <Text>No image available</Text>
              )}
              <Text style={styles.textFeed}>
                  <Text style={{fontWeight: 'bold'}}>{item.name}</Text> {item.description}
              </Text>
              <View style={styles.interFeed}>
                  <Image
                  style={styles.profileInter}
                  source={require('../MainTabs/images/coment.png')}/>
                  <Image
                  style={styles.profileInter}
                  source={require('../MainTabs/images/heart.png')}/>
              {item.ProImage ? (
                <Image 
                style={styles.profileFeed}
                source={{uri: item.ProImage}}
                />
              ) : (
                <Text>No image available</Text>
              )}
              </View>
            </View>
          )}
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
  appHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
    height: 70,
    borderWidth: 1,
    borderColor: '#192f6a'
  },
  buttonsHe: {
    width: 50,
    height: 50,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
  },
  name: {
    textAlign: 'center',
    color: 'white',
    fontSize: 45,
    fontFamily: 'serif',
    textShadowColor: '#192f6a',
    textShadowOffset: {width: 0, height: 3},
    textShadowRadius: 6,
  },
  imageChat: {
    width: 50,
    height: 50,
    marginLeft: 5,
    marginRight: 5,
  },
  imageFeed: {
    width: 'auto',
    height: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    elevation: 9
  },
  feed: {
    margin: 20,
    justifyContent: 'center',
    alignContent: 'center',
    elevation: 9,
    borderWidth: 2,
    borderColor: '#192f6a',
    borderRadius: 15,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  interFeed: {
    height: 70,
    backgroundColor: 'black',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    padding: 5
  },
  profileFeed: {
    width: 50,
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#192f6a'
  },
  profileInter: {
    width: 40,
    height: 40,
    marginRight: 15
  },
  textFeed: {
    fontFamily: 'serif',
    backgroundColor: 'black',
    padding: 3,
    color: 'white'
  }
});