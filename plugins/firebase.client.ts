import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

export default defineNuxtPlugin(() => {

  const firebaseConfig = {
    apiKey: "AIzaSyB9_esHnb7HBRA6BFn6taXdqbcQyjsefVQ",
    authDomain: "thian-ngun-sang.firebaseapp.com",
    projectId: "thian-ngun-sang",
    storageBucket: "thian-ngun-sang.firebasestorage.app",
    messagingSenderId: "100346596132",
    appId: "1:100346596132:web:0bc9e5ce8191e923ab81b1",
    measurementId: "G-N3F3MDXQ4C"
  }

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  return {
    provide: {
      firebaseApp: app,
      db
    }
  }
})
