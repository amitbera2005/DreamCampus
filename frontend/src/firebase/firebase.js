import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBJS6fjYJKwgxByEKsFsCfTUpWlT1l1Kbw",
  authDomain: "dreamcampus-eed4d.firebaseapp.com",
  projectId: "dreamcampus-eed4d",
  storageBucket: "dreamcampus-eed4d.firebasestorage.app",
  messagingSenderId: "639316262647",
  appId: "1:639316262647:web:2af8928db3b3d722a25df2",
  measurementId: "G-WT5SY2TF1F"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)