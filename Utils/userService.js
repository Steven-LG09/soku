import { db } from '../Firebase/FirebaseConfig';
import { doc, setDoc } from '@firebase/firestore';

export async function addUserToFirestore(uid, userInfo) {
  try {
    const userDocRef = doc(db, 'users', uid);
    await setDoc(userDocRef, {
      ...userInfo,
      uid: uid,
      createdAt: new Date(),
    });
    console.log('User information added to Firestore');
  } catch (error) {
    console.error('Error adding user to Firestore:', error);
    throw error;
  }
}
