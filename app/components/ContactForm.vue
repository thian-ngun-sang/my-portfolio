<template>
    <form class="contact-me" @submit.prevent="handleSubmit" ref="formRef">
      <h4 class="title">Contact Me</h4>	

      <input type="text" name="_gotcha" tabindex="-1" class="honeypot">

      <div class="mb-2">
        <label>Name</label>
        <input placeholder="Your name" v-model="form.name" type="text" name="name"/>
        <small v-if="submittedOnce && form.name === ''" class="text-red-600">Name field is required</small>
      </div>
      <div class="mb-2">
        <label>Email</label>
        <input placeholder="Your Email" v-model="form.email" type="email" name="email"/>
        <small v-if="submittedOnce && form.email=== ''" class="text-red-600">Email field is required</small>
      </div>
      <div class="mb-2">
        <label>Subject</label>
        <input placeholder="Your Subject" v-model="form.subject" type="text" name="subject"/>
      </div>
      <div class="mb-2">
        <label>Message</label>
        <textarea placeholder="Your message" v-model="form.message" name="message"></textarea>
        <small v-if="submittedOnce && form.message === ''" class="text-red-600">Message field is required</small>
      </div>
      <div class="text-end">
        <button class="cta">Submit</button>
      </div>
    </form>
</template>

<script setup>
	import { ref } from 'vue';

  import { useFormspree } from '../composables/useFormspree';
  // import { useFirebaseForm } from '../composables/useFirebaseForm';

  const { submit, loading, success, error } = useFormspree();
  // const { submit, loading, success, error } = useFirebaseForm();

	const lastSubmit = ref(0);
  const COOLDOWN = 10000 // 10 seconds
	const submittedOnce = ref(false);
	const submittedCount = ref(0);

	const form = ref({
		name: "",
		email: "",
		subject: "",
		message: ""
	});

  const gotcha = ref("");
  const formRef = ref(null);
	let toastTimeout = null;

	const emit = defineEmits(["openToastMessage", "closeToastMessage"]);

	if (import.meta.client) {
		const lastSubmitStr = localStorage.getItem("lastSubmit");
		if(lastSubmitStr){
			const lastSubmitInt = Number.parseInt(lastSubmitStr);
			if(!Number.isNaN(lastSubmitInt)){
				lastSubmit.value = lastSubmitInt;
			}
		}
	}

	function canSubmit() {
		const now = Date.now();
		if (now - lastSubmit.value < COOLDOWN) return false; // 10 sec
		lastSubmit.value = now;

		if (import.meta.client) {
			localStorage.setItem("lastSubmit", now.toString());
		}

		return true;
	}

	async function handleSubmit() {
    submittedOnce.value = false;
		if(form.value.name === "" || form.value.email === "" || form.value.message === ""){
			submittedOnce.value = true;
			return;
		}

		if ((submittedCount.value >= 2) && !canSubmit()) {
			alert("Please wait before sending again")
			return;
		}

    if (!formRef.value) return
    const formData = new FormData(formRef.value)

    await submit(formData);

    if(!loading.value && success.value){
      form.value.name = "";
      form.value.email = "";
      form.value.subject = "";
      form.value.message = "";

      emit('openToastMessage');

      toastTimeout && clearTimeout(toastTimeout)
      toastTimeout = setTimeout(() => {
        emit('closeToastMessage');
        toastTimeout = null;
      }, 3000)
    }else if(!loading.value && error.value){
      console.error(error.value);
      emit('closeToastMessage');
    }

    submittedCount.value = submittedCount.value + 1;
	}

	onBeforeUnmount(() => {
		toastTimeout && clearTimeout(toastTimeout)
	})
</script>
