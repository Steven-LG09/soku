import { SafeAreaView, TouchableOpacity, StyleSheet,Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


export default function ProfileOptions (){
    return(
        <LinearGradient
        colors={['#4A4947', '#000000', '#000000']}
        style={styles.gradient} 
        >
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.buttons}>
                    <Text style={styles.buttonsT}>Logout</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    gradient: {
        flex: 1, 
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
    }
});