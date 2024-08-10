import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, browserLocalPersistence, initializeAuth  } from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";

export { collection, doc, getDoc, setDoc, getDocs, query, updateDoc, deleteDoc, addDoc, where, onSnapshot, limit } from "firebase/firestore";
export { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, fetchSignInMethodsForEmail, sendEmailVerification } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_API_KEY,
    authDomain: process.env.EXPO_PUBLIC_PROJECT_ID + '.firebaseapp.com',
    projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
    storageBucket: process.env.EXPO_PUBLIC_PROJECT_ID + ".appspot.com",
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();

// export const auth = initializeAuth(firebaseApp, {
//     persistence: getReactNativePersistence(AsyncStorage),
// });