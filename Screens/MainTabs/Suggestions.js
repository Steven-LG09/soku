import{SafeAreaView,StyleSheet,Text,View,Image,TextInput,Dimensions,ScrollView} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


const screenWidth = Dimensions.get('window').width;

export default function Suggestions(){
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
          <View style={styles.app}>
            
            <View style={styles.rowB}>
              <Image
              style={styles.imageB}
              source={{uri: 'https://picsum.photos/200'}}
              />
              <Text style={styles.textB}>Sed ut perspiciatis unde omnis iste natus error laudantium.</Text>
              <Image
              style={styles.imageB}
              source={{uri: 'https://picsum.photos/450'}}
              />
              <Image
              style={styles.imageB}
              source={{uri: 'https://picsum.photos/210'}}
              />
              <Text style={styles.textB}>Sed ut perspiciatis unde omnis iste natus error laudantium.</Text>
              <Image
              style={styles.imageB}
              source={{uri: 'https://picsum.photos/410'}}
              />
              <Image
              style={styles.imageB}
              source={{uri: 'https://picsum.photos/220'}}
              />
              <Text style={styles.textB}>Sed ut perspiciatis unde omnis iste natus error laudantium.</Text>
              <Image
              style={styles.imageB}
              source={{uri: 'https://picsum.photos/420'}}
              />
            </View>

            <View style={styles.rowB}>
              <Image
              style={styles.imageB}
              source={{uri: 'https://picsum.photos/300'}}
              />
              <Image
              style={styles.imageB}
              source={{uri: 'https://picsum.photos/250'}}
              />
              <Text style={styles.textB}>Sed ut perspiciatis unde omnis iste natus error laudantium.</Text>
              <Image
              style={styles.imageB}
              source={{uri: 'https://picsum.photos/310'}}
              />
              <Image
              style={styles.imageB}
              source={{uri: 'https://picsum.photos/260'}}
              />
              <Text style={styles.textB}>Sed ut perspiciatis unde omnis iste natus error laudantium.</Text>
              <Image
              style={styles.imageB}
              source={{uri: 'https://picsum.photos/320'}}
              />
              <Image
              style={styles.imageB}
              source={{uri: 'https://picsum.photos/270'}}
              />
              <Text style={styles.textB}>Sed ut perspiciatis unde omnis iste natus error laudantium.</Text>
            </View>

            <View style={styles.rowB}>
              <Text style={styles.textB}>Sed ut perspiciatis unde omnis iste natus error laudantium.</Text>
              <Image
              style={styles.imageB}
              source={{uri: 'https://picsum.photos/100'}}
              />
              <Image
              style={styles.imageB}
              source={{uri: 'https://picsum.photos/350'}}
              />
              <Text style={styles.textB}>Sed ut perspiciatis unde omnis iste natus error laudantium.</Text>
              <Image
              style={styles.imageB}
              source={{uri: 'https://picsum.photos/110'}}
              />
              <Image
              style={styles.imageB}
              source={{uri: 'https://picsum.photos/360'}}
              />
              <Text style={styles.textB}>Sed ut perspiciatis unde omnis iste natus error laudantium.</Text>
              <Image
              style={styles.imageB}
              source={{uri: 'https://picsum.photos/120'}}
              />
              <Image
              style={styles.imageB}
              source={{uri: 'https://picsum.photos/370'}}
              />
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
  }
});