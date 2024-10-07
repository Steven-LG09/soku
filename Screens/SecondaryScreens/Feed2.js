import{SafeAreaView,StyleSheet,Text,View,Image,ScrollView,TouchableOpacity} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


export default function Feed2({navigation}){
  return(
    <LinearGradient
      colors={['#4A4947', '#000000', '#000000']}
      style={styles.gradient} 
      >
      <SafeAreaView style={styles.container}>
        <View style={styles.appHeader}>
          <TouchableOpacity
          style={styles.buttonsHe}
          onPress={()=>navigation.goBack()}
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
        <ScrollView>
          <View style={styles.feed}>
              <Text style={styles.textFeed}>
                  <Text style={{fontWeight: 'bold'}}>Scott Tringali</Text> New students have arrived from the university of Chicago
              </Text>
              <View style={styles.interFeed}>
                  <Image
                  style={styles.profileInter}
                  source={require('../MainTabs/images/coment.png')}/>
                  <Image
                  style={styles.profileInter}
                  source={require('../MainTabs/images/heart.png')}/>
                  <Image
                  style={styles.profileFeed}
                  source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&s'}}/>
              </View>
          </View>
          <View style={styles.feed}>
              <Text style={styles.textFeed}>
                  <Text style={{fontWeight: 'bold'}}>Steven López</Text> No me gusta andar en bus, prefiero la patineta 😄</Text>
              <View style={styles.interFeed}>
                  <Image
                  style={styles.profileInter}
                  source={require('../MainTabs/images/coment.png')}/>
                  <Image
                  style={styles.profileInter}
                  source={require('../MainTabs/images/heart.png')}/>
                  <Image
                  style={styles.profileFeed}
                  source={{uri: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}/>
              </View>
          </View>
          <View style={styles.feed}>
              <Text style={styles.textFeed}>
                  <Text style={{fontWeight: 'bold'}}>Luisa Troy</Text> The best meal I ever have in my life was this 😋😋😋</Text>
              <View style={styles.interFeed}>
                  <Image
                  style={styles.profileInter}
                  source={require('../MainTabs/images/coment.png')}/>
                  <Image
                  style={styles.profileInter}
                  source={require('../MainTabs/images/heart.png')}/>
                  <Image
                  style={styles.profileFeed}
                  source={{uri: 'https://thumbs.dreamstime.com/b/portrait-beautiful-happy-woman-white-teeth-smiling-beauty-attractive-healthy-girl-perfect-smile-blonde-hair-fresh-face-76138238.jpg'}}/>
              </View>
          </View>
          
          <View style={styles.feed}>
              <Text style={styles.textFeed}>
                  <Text style={{fontWeight: 'bold'}}>Scott Tringali</Text> New students have arrived from the university of Chicago
              </Text>
              <View style={styles.interFeed}>
                  <Image
                  style={styles.profileInter}
                  source={require('../MainTabs/images/coment.png')}/>
                  <Image
                  style={styles.profileInter}
                  source={require('../MainTabs/images/heart.png')}/>
                  <Image
                  style={styles.profileFeed}
                  source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRij6dtiHizH96qpCOe8WeXXP3yLyQJkPdGVg&s'}}/>
              </View>
          </View>
          <View style={styles.feed}>
              <Text style={styles.textFeed}>
                  <Text style={{fontWeight: 'bold'}}>Steven López</Text> No me gusta andar en bus, prefiero la patineta 😄</Text>
              <View style={styles.interFeed}>
                  <Image
                  style={styles.profileInter}
                  source={require('../MainTabs/images/coment.png')}/>
                  <Image
                  style={styles.profileInter}
                  source={require('../MainTabs/images/heart.png')}/>
                  <Image
                  style={styles.profileFeed}
                  source={{uri: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}/>
              </View>
          </View>
          <View style={styles.feed}>
              <Text style={styles.textFeed}>
                  <Text style={{fontWeight: 'bold'}}>Luisa Troy</Text> The best meal I ever have in my life was this 😋😋😋</Text>
              <View style={styles.interFeed}>
                  <Image
                  style={styles.profileInter}
                  source={require('../MainTabs/images/coment.png')}/>
                  <Image
                  style={styles.profileInter}
                  source={require('../MainTabs/images/heart.png')}/>
                  <Image
                  style={styles.profileFeed}
                  source={{uri: 'https://thumbs.dreamstime.com/b/portrait-beautiful-happy-woman-white-teeth-smiling-beauty-attractive-healthy-girl-perfect-smile-blonde-hair-fresh-face-76138238.jpg'}}/>
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
  feed: {
    margin: 15,
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
    color: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  }
});
