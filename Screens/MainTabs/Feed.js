import{SafeAreaView,StyleSheet,Text,View,Image,ScrollView} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


export default function Feed(){
  return(
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.gradient} 
      >
      <SafeAreaView style={styles.container}>
        <View style={styles.appHeader}>
            <Image
            style={styles.imageChat}
            source={require('../MainTabs/images/screen.png')}
            />
            <Text style={styles.name}>Soku</Text>
            <Image
            style={styles.imageChat}
            source={require('../MainTabs/images/chat.png')}
            />
        </View>
        <ScrollView>
            <View style={styles.feed}>
                <Image 
                style={styles.imageFeed}
                source={{uri: 'https://www.brenau.edu/wp-content/uploads/2022/11/BU54443_081622-Undergraduate-Marketing-Photos-AJR0087.jpg'}}
                />
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
                <Image 
                style={styles.imageFeed}
                source={{uri: 'https://www.libarts.colostate.edu/wp-content/uploads/2019/08/Student-walking-in-front-of-Eddy-Hall-1.jpg'}}
                />
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
                <Image 
                style={styles.imageFeed}
                source={{uri: 'https://www.allrecipes.com/thmb/DyUCOneuS4H1uOl2WvxmuAXb7mg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/16248_easy-homemade-chili_Rita-1x1-1-f584fa2d46e94fb99e152697a005136e.jpg'}}
                />
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
    backgroundColor: '#3b5998',
    shadowColor: '#192f6a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
    height: 70
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
    height: 50
  },
  imageFeed: {
    width: 'auto',
    height: 300,
    borderColor: '#3b5998',
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 9
  },
  feed: {
    padding: 20,
    justifyContent: 'center',
    alignContent: 'center',
  },
  interFeed: {
    height: 70,
    backgroundColor: '#3b5998',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 5
  },
  profileFeed: {
    width: 50,
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#4c669f'
  },
  profileInter: {
    width: 40,
    height: 40,
    marginRight: 15
  },
  textFeed: {
    fontFamily: 'serif',
    backgroundColor: '#3b5998',
    padding: 3
  }
});