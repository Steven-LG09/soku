import{SafeAreaView,StyleSheet,Text,View,Image,Button} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


export default function Profile(){
  return(
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
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
        <View style={styles.secTres}>
          <Text style={styles.buttonsPi}>Posts</Text>
          <Text style={styles.buttonsP}>Posts 2</Text>
          <Text style={styles.buttonsP}>Saves</Text>
        </View>
        <View style={styles.postsF}>
          <Text>No Posts </Text>
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
  imagePro: {
    width: 100,
    height: 100,
    borderRadius: 50,
    elevation: 18,
  },
  secOne: {
    backgroundColor: '#3b5998',
    padding: 5,
    margin: 5,
    borderRadius: 5,
    elevation: 18,
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
    fontSize: 10
  },
  textSecDos: {
    textAlign: 'left',
    marginBottom: 5,
    fontFamily: 'serif',
    fontSize: 13,
    color: '#192f6a'
  },
  secTres: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#3b5998',
    height: 50,
    elevation: 18
  },
  buttonsP: {
    fontSize: 15

  },
  buttonsPi: {
    fontSize: 15,
    backgroundColor: '#4c669f',
    borderRadius: 5,
    elevation: 9
  },
  postsF: {
    flex: 1,
    width: 'auto',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderWidth: 1,
    borderColor: '#3b5998',
    borderRadius: 5,
    elevation: 2
  }
});