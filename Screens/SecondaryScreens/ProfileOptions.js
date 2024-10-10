import { SafeAreaView, TouchableOpacity, StyleSheet,Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import React, {useContext} from "react";
import { AuthContext } from "../../Context/auth-context";
import { MainContext } from "../../Context/context";


export default function ProfileOptions ({navigation}){
    const {inputEmail} =useContext(MainContext);
    const {inputPass} =useContext(MainContext);
    const authCtx = useContext(AuthContext); 

    const handleLogout = async () => {
        await authCtx.logout();
        navigation.navigate('Welcome');
      };
    return(
        <LinearGradient
        colors={['#4A4947', '#000000', '#000000']}
        style={styles.gradient} 
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.proInfo}>
                    <Text style={styles.texto1}>Profile information</Text>
                    <Text style={styles.texto}>Email: {inputEmail}</Text>
                    <Text style={styles.texto}>Password: {inputPass}</Text>
                </View>
                <TouchableOpacity 
                style={styles.buttons}
                onPress={handleLogout}
                >
                    <Text style={styles.buttonsT}>Logout</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    texto:{
        color: 'white',
        fontFamily: 'serif'
    },
    texto1:{
        color: 'white',
        fontFamily: 'serif',
        fontStyle: 'italic',
        fontSize: 20
    },
    gradient: {
        flex: 1, 
    },
    proInfo: {
        margin: 30
    },
    buttons: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        height: 30,
        backgroundColor: '#4A4947',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#192f6a',
        shadowColor: 'white',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 18,
    },

    buttonsT: {
        color: 'white'
    },
});