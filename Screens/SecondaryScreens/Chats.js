import { SafeAreaView,Text,Image,View, StyleSheet, TextInput,ScrollView, TouchableOpacity,Alert} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function Chats(){

  function HandleTouch(){
    Alert.alert('Not Available', 'Right now we are working on that');
  }
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
          <TouchableOpacity
          onPress={HandleTouch}>
            <View style={styles.boxChat}>
                <View>
                  <Text style={styles.texto1}>Steven</Text>
                  <Text style={styles.texto}>Hola, Como estas?</Text>
                </View>
                <Image
                    style={styles.profileChat}
                    source={{uri: 'https://picsum.photos/230'}}/>
            </View>
            </TouchableOpacity>

          <TouchableOpacity
          onPress={HandleTouch}>
            <View style={styles.boxChat}>
                <View>
                  <Text style={styles.texto1}>+ 01 12784567</Text>
                  <Text style={styles.texto}>Quiere comprar o no?</Text>
                </View>
                <Image
                    style={styles.profileChat}
                    source={{uri: 'https://picsum.photos/240'}}/>
            </View>
            </TouchableOpacity>

          <TouchableOpacity
          onPress={HandleTouch}>
            <View style={styles.boxChat}>
                <View>
                  <Text style={styles.texto1}>Sandra</Text>
                  <Text style={styles.texto}>Te extraño</Text>
                </View>
                <Image
                    style={styles.profileChat}
                    source={{uri: 'https://picsum.photos/200'}}/>
            </View>
            </TouchableOpacity>

          <TouchableOpacity
          onPress={HandleTouch}>
            <View style={styles.boxChat}>
                <View>
                  <Text style={styles.texto1}>+ 57 3125875634</Text>
                  <Text style={styles.texto}>I don't know</Text>
                </View>
                <Image
                    style={styles.profileChat}
                    source={{uri: 'https://picsum.photos/210'}}/>
            </View>
            </TouchableOpacity>

          <TouchableOpacity
          onPress={HandleTouch}>
            <View style={styles.boxChat}>
                <View>
                  <Text style={styles.texto1}>Juan Vasquez</Text>
                  <Text style={styles.texto}>?????</Text>
                </View>
                <Image
                    style={styles.profileChat}
                    source={{uri: 'https://picsum.photos/220'}}/>
            </View>
            </TouchableOpacity>

          <TouchableOpacity
          onPress={HandleTouch}>
                        <View style={styles.boxChat}>
                <View>
                  <Text style={styles.texto1}>Steven</Text>
                  <Text style={styles.texto}>Hola, Como estas?</Text>
                </View>
                <Image
                    style={styles.profileChat}
                    source={{uri: 'https://picsum.photos/230'}}/>
            </View>
            </TouchableOpacity>

          <TouchableOpacity
          onPress={HandleTouch}>
            <View style={styles.boxChat}>
                <View>
                  <Text style={styles.texto1}>+ 01 12784567</Text>
                  <Text style={styles.texto}>Quiere comprar o no?</Text>
                </View>
                <Image
                    style={styles.profileChat}
                    source={{uri: 'https://picsum.photos/280'}}/>
            </View>
            </TouchableOpacity>

                      <TouchableOpacity
          onPress={HandleTouch}>

            <View style={styles.boxChat}>
                <View>
                  <Text style={styles.texto1}>Sandra</Text>
                  <Text style={styles.texto}>Te extraño</Text>
                </View>
                <Image
                    style={styles.profileChat}
                    source={{uri: 'https://picsum.photos/270'}}/>
            </View>
            </TouchableOpacity>

                      <TouchableOpacity
          onPress={HandleTouch}>

            <View style={styles.boxChat}>
                <View>
                  <Text style={styles.texto1}>+ 57 3125875634</Text>
                  <Text style={styles.texto}>I don't know</Text>
                </View>
                <Image
                    style={styles.profileChat}
                    source={{uri: 'https://picsum.photos/250'}}/>
            </View>
            </TouchableOpacity>

                      <TouchableOpacity
          onPress={HandleTouch}>

            <View style={styles.boxChat}>
                <View>
                  <Text style={styles.texto1}>Juan Vasquez</Text>
                  <Text style={styles.texto}>?????</Text>
                </View>
                <Image
                    style={styles.profileChat}
                    source={{uri: 'https://picsum.photos/260'}}/>
            </View>
            </TouchableOpacity>
          </ScrollView>
          <View style={styles.footer}>
            <TouchableOpacity
            style={styles.buttons}
            onPress={HandleTouch}
            >
              <Image
              style={styles.imageC}
              source={require('../../assets/loading.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttons}
            onPress={HandleTouch}
            >
              <Image
              style={styles.imageC}
              source={require('../../assets/new-account.png')}
              />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
}

const styles= StyleSheet.create({
  gradient: {
    flex: 1
  },
  container: {
    flex: 1,
    marginTop: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 60,
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  buttons: {
    width: 50,
    height: 50,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  imageC: {
    width: 50,
    height: 50,
    marginLeft: 5,
    marginRight: 5,
  },
  texto1: {
    color: 'white',
    fontFamily: 'serif',
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 15
  },
    texto: {
    color: 'white',
    fontFamily: 'serif',
    textAlign: 'right',
    marginRight: 15
  },
  buscar: {
    textAlign: 'center',
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#192f6a',
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
  },
  profileChat: {
    width: 50,
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#192f6a'
  },
  boxChat: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'black',
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 15,
    borderRadius: 15,
    paddingRight: 15,
    height: 75,
    borderWidth: 1,
    borderColor: '#192f6a',
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
  }
})