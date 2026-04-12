import { collection, addDoc, serverTimestamp } from "firebase/firestore"

export const useFirebaseForm = () => {
  const { $db } = useNuxtApp();

  const loading = ref(false)
  const success = ref(false)
  const error = ref(null)

  const submit = async (formData) => {
    const data = Object.fromEntries(formData.entries());
    const { name, email, subject, message } = data;

    loading.value = true
    error.value = null

    try {
			await addDoc(collection($db, "contacts"), {
        ...{ name, email, subject, message },
				createdAt: serverTimestamp()
			})

      success.value = true
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return { submit, loading, success, error }
}
