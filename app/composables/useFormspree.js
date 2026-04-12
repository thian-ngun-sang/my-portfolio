export const useFormspree = () => {
  const config = useRuntimeConfig()
  const formspreeURL = config.public.formspreeURL;

  const loading = ref(false)
  const success = ref(false)
  const error = ref(null)

  const submit = async (formData) => {
    loading.value = true
    error.value = null

    try {
      const res = await fetch(formspreeURL, {
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        // body: JSON.stringify(data)
        body: formData 
      })

      if (!res.ok) throw new Error('Failed to send')

      success.value = true
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return { submit, loading, success, error }
}
