import{SafeAreaView,StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Dimensions,ScrollView} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const screenWidth = Dimensions.get('window').width;

export default function Groups(){
  return(
    <LinearGradient
      colors={['#4A4947', '#000000', '#000000']}
      style={styles.gradient} 
      >
      <SafeAreaView style={styles.container}>
        <TextInput
        style={styles.buscar}
        placeholder="🔍 Buscar"/>
        <ScrollView>
          <View style={styles.secG}>
            <Image
            style={styles.imageG}
            source={{uri: 'https://picsum.photos/200/300'}}
            />
            <View style={styles.descG}>
              <Text style={styles.titleG}>Grupo 1</Text>
              <Text style={styles.textG}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</Text>
              <Text style={styles.textG}>0 Miembros</Text>
              <TouchableOpacity style={styles.buttonG}>
                <Text style={styles.buttonTG}>JOIN</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.secG}>
            <Image
            style={styles.imageG}
            source={{uri: 'https://picsum.photos/300/300'}}
            />
            <View style={styles.descG}>
              <Text style={styles.titleG}>Grupo 2</Text>
              <Text style={styles.textG}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</Text>
              <Text style={styles.textG}>0 Miembros</Text>
              <TouchableOpacity style={styles.buttonG}>
                <Text style={styles.buttonTG}>JOIN</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.secG}>
            <Image
            style={styles.imageG}
            source={{uri: 'https://picsum.photos/400/300'}}
            />
            <View style={styles.descG}>
              <Text style={styles.titleG}>Grupo 3</Text>
              <Text style={styles.textG}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</Text>
              <Text style={styles.textG}>0 Miembros</Text>
              <TouchableOpacity style={styles.buttonG}>
                <Text style={styles.buttonTG}>JOIN</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.secG}>
            <Image
            style={styles.imageG}
            source={{uri: 'https://picsum.photos/250/300'}}
            />
            <View style={styles.descG}>
              <Text style={styles.titleG}>Grupo 4</Text>
              <Text style={styles.textG}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</Text>
              <Text style={styles.textG}>0 Miembros</Text>
              <TouchableOpacity style={styles.buttonG}>
                <Text style={styles.buttonTG}>JOIN</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.secG}>
            <Image
            style={styles.imageG}
            source={{uri: 'https://picsum.photos/350/300'}}
            />
            <View style={styles.descG}>
              <Text style={styles.titleG}>Grupo 5</Text>
              <Text style={styles.textG}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</Text>
              <Text style={styles.textG}>0 Miembros</Text>
              <TouchableOpacity style={styles.buttonG}>
                <Text style={styles.buttonTG}>JOIN</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.secG}>
            <Image
            style={styles.imageG}
            source={{uri: 'https://picsum.photos/450/300'}}
            />
            <View style={styles.descG}>
              <Text style={styles.titleG}>Grupo 6</Text>
              <Text style={styles.textG}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</Text>
              <Text style={styles.textG}>0 Miembros</Text>
              <TouchableOpacity style={styles.buttonG}>
                <Text style={styles.buttonTG}>JOIN</Text>
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
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#192f6a',
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
  },
  imageG: {
    width: screenWidth * 0.35,
    height: 200,
    margin: 10,
    borderRadius: 10
  },
  descG: {
    width: screenWidth * 0.55,
  },
  secG: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#192f6a',
    elevation: 9,
    shadowColor: 'white',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  titleG: {
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'serif',
    color: '#4c669f'
  },
  textG: {
    fontFamily: 'serif',
    color: 'white'
  },
  buttonG: {
    width: 'auto',
    height: 30,
    backgroundColor: '#4c669f',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2
  },
  buttonTG: {
    fontFamily: 'serif',
    color: 'white'
  },
});