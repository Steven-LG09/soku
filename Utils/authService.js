import { auth } from '../Firebase/FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { addUserToFirestore } from './userService';

export async function signUp(email, password, userInfo) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await addUserToFirestore(user.uid, userInfo);

    console.log('User signed up and added to Firestore:', user.uid);
    return user;
  } catch (error) {
    console.error('Error signing up user:', error);
    throw error;
  }
}

export async function signIn(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error('Error signing in user:', error);
    throw error;
  }
}
