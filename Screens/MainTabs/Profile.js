import{SafeAreaView,StyleSheet,Text,View,Image,TouchableOpacity} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


export default function Profile({navigation}){
  return(
    <LinearGradient
      colors={['#4A4947', '#000000', '#000000']}
      style={styles.gradient} 
      >
      <SafeAreaView style={styles.container}>
        <View style={styles.secOne}>
          <View style={styles.secIma}>
            <Image
            style={styles.imagePro}
            source={{uri: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg'}}
            />
          <View>
            <Text style={styles.textSecDos}>0 Posts</Text>
            <Text style={styles.textSecDos}>0 Seguidores</Text>
            <Text style={styles.textSecDos}>0 Seguidos</Text>
          </View>
          </View>
          <Text style={styles.secDos}><Text style={{fontWeight: 'bold'}}>Santiago</Text>{'\n'}Apasionado por el fitness 💪 
            | Aventurero 🌍 | Amante del café ☕ y de los buenos momentos 
            | Creciendo cada día, una meta a la vez 🚀 | Aquí para inspirar y compartir mi viaje.</Text>
        </View>
        <View style={styles.buttonsSec}>
          <TouchableOpacity 
          style={styles.buttonOp}
          onPress={()=>navigation.navigate('ProfileOptions')}
          >
            <Image
            style={styles.imageOp}
            source={require('../../assets/settings.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.secTres}>
          <Text style={styles.buttonsPi}>Posts</Text>
          <Text style={styles.buttonsP}>Posts 2</Text>
          <Text style={styles.buttonsP}>Saves</Text>
        </View>
        <View style={styles.postsF}>
          <Text style={styles.textpos}>No Posts </Text>
        </View>
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
  imageOp:{
    width: 30,
    height: 30
  },
  buttonOp: {
    width: 30,
    height: 30,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
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
  buttonsSec:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 2
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
    color: 'white'
  },
  textSecDos: {
    textAlign: 'left',
    marginBottom: 5,
    fontFamily: 'serif',
    fontSize: 13,
    color: 'white'
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
    fontSize: 15,
    color: 'white'
  },
  buttonsPi: {
    fontSize: 15,
    backgroundColor: '#192f6a',
    borderRadius: 5,
    elevation: 9,
    color: 'white'
  },
  postsF: {
    flex: 1,
    width: 'auto',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderWidth: 1,
    borderColor: '#192f6a',
    borderRadius: 5,
    elevation: 2,
  },
  textpos: {
    color: 'white',
    fontFamily: 'serif'
  }
});