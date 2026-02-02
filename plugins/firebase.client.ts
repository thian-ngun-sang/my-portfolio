import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig();

  const app = initializeApp(config.public.firebaseConfig)
  const db = getFirestore(app)

  return {
    provide: {
      firebaseApp: app,
      db
    }
  }
})
