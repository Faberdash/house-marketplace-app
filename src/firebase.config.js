// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAccSCDOyBteg2rO0Qt-2lrayzAAumPLFA',
  authDomain: 'house-marketplace-app-b1186.firebaseapp.com',
  projectId: 'house-marketplace-app-b1186',
  storageBucket: 'house-marketplace-app-b1186.appspot.com',
  messagingSenderId: '312495331696',
  appId: '1:312495331696:web:25b5f14fec5f8f5de8d7b5',
  measurementId: 'G-F7D514KXP2',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const db = getFirestore()
