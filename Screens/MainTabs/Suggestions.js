import {SafeAreaView,StyleSheet,Text,View,TouchableOpacity,Image,TextInput,Dimensions,ScrollView,FlatList,Modal} from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { db } from '../../Firebase/FirebaseConfig';
import { collection, query, where, getDocs } from '@firebase/firestore';

const screenWidth = Dimensions.get('window').width;

export default function Suggestions({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [queryText, setQueryText] = useState('');
  const [results, setResults] = useState([]);

  const searchUsers = async (text) => {
    setQueryText(text);

    if (text.trim() === '') {
      setResults([]);
      return;
    }

    try {
      const usersQuery = query(
        collection(db, 'users'),
        where('name', '>=', text),
        where('name', '<=', text + '\uf8ff')
      );

      const snapshot = await getDocs(usersQuery);

      const users = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setResults(users);
    } catch (error) {
      console.error('Error searching users:', error);
    }
  };

  return (
    <LinearGradient
      colors={['#4A4947', '#000000', '#000000']}
      style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.buscar}
          value={queryText}
          onChangeText={searchUsers}
          placeholder="🔍 Buscar"
        />
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
          <Image
          style={styles.imageM}
          source={{uri: 'https://i.pinimg.com/736x/3b/77/b9/3b77b9cf378da4c6a505c053e1ddf313.jpg'}}/>
          <Text style={styles.message}>That is not available right now!</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity></View>
          </View>
        </Modal>

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => setModalVisible2(false)}
        >
          <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
          <Text style={styles.message2}>Sed ut perspiciatis unde omnis iste natus error laudantium.</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible2(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity></View>
          </View>
        </Modal>
        <FlatList
          style={styles.flatUser}
          data={results}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
            style={styles.buttons} 
            onPress={()=>navigation.navigate('Profile2',{dato: item.name})}
            >
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
        <ScrollView>
          <View style={styles.app}>
            <View style={styles.rowB}>
            <TouchableOpacity
            onPress={()=>setModalVisible(true)}>
              <Image
                style={styles.imageB}
                source={{ uri: 'https://picsum.photos/200' }}
              /></TouchableOpacity>
              <Text style={styles.textB}
              onPress={()=>setModalVisible2(true)}>
                Sed ut perspiciatis unde omnis iste natus error laudantium.
              </Text>
                          <TouchableOpacity
            onPress={()=>setModalVisible(true)}>
              <Image
                style={styles.imageB}
                source={{ uri: 'https://picsum.photos/450' }}
              />
              </TouchableOpacity>
                          <TouchableOpacity
            onPress={()=>setModalVisible(true)}>
              <Image
                style={styles.imageB}
                source={{ uri: 'https://picsum.photos/210' }}
              />
              </TouchableOpacity>
              <Text style={styles.textB}
              onPress={()=>setModalVisible2(true)}>
                Sed ut perspiciatis unde omnis iste natus error laudantium.
              </Text>
                          <TouchableOpacity
            onPress={()=>setModalVisible(true)}>
              <Image
                style={styles.imageB}
                source={{ uri: 'https://picsum.photos/410' }}
              />
              </TouchableOpacity>
                          <TouchableOpacity
            onPress={()=>setModalVisible(true)}>
              <Image
                style={styles.imageB}
                source={{ uri: 'https://picsum.photos/220' }}
              />
              </TouchableOpacity>
              <Text style={styles.textB}
              onPress={()=>setModalVisible2(true)}>
                Sed ut perspiciatis unde omnis iste natus error laudantium.
              </Text>
                          <TouchableOpacity
            onPress={()=>setModalVisible(true)}>
              <Image
                style={styles.imageB}
                source={{ uri: 'https://picsum.photos/420' }}
              />
              </TouchableOpacity>
            </View>

            <View style={styles.rowB}>
                        <TouchableOpacity
            onPress={()=>setModalVisible(true)}>
              <Image
                style={styles.imageB}
                source={{ uri: 'https://picsum.photos/300' }}
              />
              </TouchableOpacity>
                          <TouchableOpacity
            onPress={()=>setModalVisible(true)}>
              <Image
                style={styles.imageB}
                source={{ uri: 'https://picsum.photos/250' }}
              />
              </TouchableOpacity>
              <Text style={styles.textB}
              onPress={()=>setModalVisible2(true)}>
                Sed ut perspiciatis unde omnis iste natus error laudantium.
              </Text>
                          <TouchableOpacity
            onPress={()=>setModalVisible(true)}>
              <Image
                style={styles.imageB}
                source={{ uri: 'https://picsum.photos/310' }}
              />
              </TouchableOpacity>
                          <TouchableOpacity
            onPress={()=>setModalVisible(true)}>
              <Image
                style={styles.imageB}
                source={{ uri: 'https://picsum.photos/260' }}
              />
              </TouchableOpacity>
              <Text style={styles.textB}
              onPress={()=>setModalVisible2(true)}>
                Sed ut perspiciatis unde omnis iste natus error laudantium.
              </Text>
                          <TouchableOpacity
            onPress={()=>setModalVisible(true)}>
              <Image
                style={styles.imageB}
                source={{ uri: 'https://picsum.photos/320' }}
              />
              </TouchableOpacity>
                          <TouchableOpacity
            onPress={()=>setModalVisible(true)}>
              <Image
                style={styles.imageB}
                source={{ uri: 'https://picsum.photos/270' }}
              />
              </TouchableOpacity>
              <Text style={styles.textB}
              onPress={()=>setModalVisible2(true)}>
                Sed ut perspiciatis unde omnis iste natus error laudantium.
              </Text>
            </View>

            <View style={styles.rowB}>
              <Text style={styles.textB}
              onPress={()=>setModalVisible2(true)}>
                Sed ut perspiciatis unde omnis iste natus error laudantium.
              </Text>
                          <TouchableOpacity
            onPress={()=>setModalVisible(true)}>
              <Image
                style={styles.imageB}
                source={{ uri: 'https://picsum.photos/100' }}
              />
              </TouchableOpacity>
                          <TouchableOpacity
            onPress={()=>setModalVisible(true)}>
              <Image
                style={styles.imageB}
                source={{ uri: 'https://picsum.photos/350' }}
              />
              </TouchableOpacity>
              <Text style={styles.textB}
              onPress={()=>setModalVisible2(true)}>
                Sed ut perspiciatis unde omnis iste natus error laudantium.
              </Text>
                          <TouchableOpacity
            onPress={()=>setModalVisible(true)}>
              <Image
                style={styles.imageB}
                source={{ uri: 'https://picsum.photos/110' }}
              />
              </TouchableOpacity>
                          <TouchableOpacity
            onPress={()=>setModalVisible(true)}>
              <Image
                style={styles.imageB}
                source={{ uri: 'https://picsum.photos/360' }}
              />
              </TouchableOpacity>
              <Text style={styles.textB}
              onPress={()=>setModalVisible2(true)}>
                Sed ut perspiciatis unde omnis iste natus error laudantium.
              </Text>
                          <TouchableOpacity
            onPress={()=>setModalVisible(true)}>
              <Image
                style={styles.imageB}
                source={{ uri: 'https://picsum.photos/120' }}
              />
              </TouchableOpacity>
                          <TouchableOpacity
            onPress={()=>setModalVisible(true)}>
              <Image
                style={styles.imageB}
                source={{ uri: 'https://picsum.photos/370' }}
              />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
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
  buscar: {
    textAlign: 'center',
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
  },
  app: {
    margin: 10,
    flexDirection: 'row',
  },
  imageB: {
    width: 'auto',
    height: 130,
    margin: 5,
    borderRadius: 5
  },
  imageM: {
    width: 130,
    height: 130,
    borderRadius: 5
  },
  textB: {
    marginTop: 5,
    textAlign: 'left',
    color: 'white',
    backgroundColor: 'black',
    borderRadius: 5,
    height: 'auto',
    fontFamily: 'serif',
    borderWidth: 0.5,
    borderColor: '#192f6a',
    padding: 2
  },
  rowB: {
    width: screenWidth * 0.313
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    color: 'white',
    fontFamily: 'serif',
  },
  flatUser: {
    backgroundColor: 'black',
    marginLeft: 10,
    marginRight: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
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
    fontFamily: 'serif'
  },
  message2: {
    fontFamily: 'serif',
    fontSize: 20
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
});
