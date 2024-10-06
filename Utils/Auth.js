import axios from "axios";

const apiKey = 'hola'; 

async function authenticate(mode, email, password) {

    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
    try {

        const response = await axios.post(url, {
          email: email,
          password: password,
          returnSecureToken: true,  
        });
        if (response.status === 200) { 
          
          const token = response.data.idToken;  
          return token; 
        } else {
          Alert.alert("Login Failed", "Invalid email or password.");
        }
      } catch (error) {
        Alert.alert("Login Error", "An error occurred. Please try again.");
        console.error(error);
      } finally {
        //setIsLoading(false);  // esto es para que se quite el loading en caso de que lo quieran implementar luego
      }
}
export async function login(email, password) {
    return authenticate('signInWithPassword', email, password);
}
