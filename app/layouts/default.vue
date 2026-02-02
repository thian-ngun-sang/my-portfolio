<template>
	<div class="app">
		<Nav @openNav="openNav" @closeNav="closeNav" :navBarOpen="navBarOpen"/>
		<div class="bg-white pt-[3.25rem] lg:pt-[3.25rem]" id="home">

			<div class="lg:flex lg:flex-row-reverse items-center">
				<div class="bg-white">
					<img src="/male-programmer.svg"/>
				</div>

				<section>
					<h3 class="intro-title">
						Hello World, I am Thian Ngun Sang!
					</h3>
					<article class="intro">
						<p> I am a full-stack developer. </p>
						<p>I build web applications which are just not beautiful, but user-friendly and responsive to different layouts.</p>
						<p>I specialize in design, frontend, backend, and server deployment.</p>
						<p>Speed, security, and user experience are my top priorities.</p>
					</article>
				</section>
			</div>

			<div class="cta-section w-full text-end lg:text-center">
				<button class="cta">
					<a target="blank" href="https://wa.me/8119887227">Let's Talk</a>
				</button>
			</div>

		</div>

		<div class="intersection">
			<section class="my-work" id="my-work">
				<h4 class="title">My Work</h4>	

				<div class="flex flex-col gap-3">
					<MyWorkItem/>
					<MyWorkItem/>
					<MyWorkItem/>
				</div>
			</section>

			<section class="tools-technologies" id="tools-technologies">
				<h4 class="title">Tools & Technologies</h4>	

				<div>
					<ToolsTechnologyDisplay/>
					<ToolsTechnologyDisplay/>
					<ToolsTechnologyDisplay/>
					<ToolsTechnologyDisplay/>
					<ToolsTechnologyDisplay/>
					<ToolsTechnologyDisplay/>
				</div>
			</section>

			<form class="contact-me" id="contact-me" @submit.prevent="handleSubmit">
				<h4 class="title">Contact Me</h4>	

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

			<div class="h-10"></div>

			<section class="follow-me flex justify-end items-center gap-4 mb-3" id="follow-me">
				<a href="https://www.linkedin.com/in/thian-ngun-sang/" target="_blank">
					<Icon name="mdi:linkedin" size="30px" class="bg-dark"/>
				</a>
				<a href="https://github.com/thian-ngun-sang" target="_blank">
					<Icon name="logos:github-icon" size="24px" class="bg-dark"/>
				</a>
				<a href="https://x.com/thianngunsang" target="_blank">
					<Icon name="logos:x" size="20px" class="bg-dark"/>
				</a>
				<a href="https://wa.me/8119887227" target="_blank">
					<Icon name="mdi:whatsapp" size="28px" class="bg-dark"/>
				</a>
			</section>
		</div>

		<div v-if="toastMessageIsOn" class="toast-message">
			<div class="flex items-center justify-between">
				<span>Your message was sent successfully</span>
				<Icon name="mdi:close" class="nuxt-icon bg-dark cursor-pointer" @click="closeToastMessage"/>
			</div>
		</div>

	</div>
</template>

<style scope>
	.app > * {
		padding-inline: var(--app-padding-inline);
	}

	.intro-title {
		font-size: 1.20rem;
		font-family: "Yeseva One";
		font-weight: bold;
	}

	.title {
		font-family: "Abhaya Libre";
		font-size: 1.5rem;
		font-weight: 600;
	}


	.intro {
		font-family: "Xanh Mono";
		line-height: 1.5rem;
		font-size: 1.25rem;
	}

	.intro p {
		margin-block: 0.5rem;
	}

	.cta {
		color: white;
		background-color: black;
		padding: 0.2rem 1rem;
		border-radius: 0.3rem;
	}

	.cta-section {
		padding-bottom: 7rem;
	}

	.intersection {
		margin-top: -5rem;
	}

	.my-work h4, .tools-technologies > h4 {
		margin-bottom: 0.5rem;
	}

	.tools-technologies, .contact-me, .follow-me{
		margin-top: 1.5rem;
	}

	section {
		scroll-margin-top: 3.25rem;
	}

	.tools-technologies > div {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: 0.5rem;
	}

	.contact-me label {
		display: block;
		margin-bottom: 0.25rem;
	}

	.contact-me input, .contact-me textarea{
		padding: 0.25rem 0.5rem;
		width: 100%;
		border-radius: 0.25rem;
	}

	.toast-message{
		bottom: 2rem;
		position: fixed;
		left: var(--app-padding-inline);
		right: var(--app-padding-inline);
		background-color: var(--success-color);
		/* padding-inline: var(--app-padding-inline); */
		padding: 0.5rem 0.5rem;
		border-radius: 0.25rem;
		color: white;
	}

	@media(min-width: 1024px){
		.intro-title {
			font-size: 1.75rem;
		}
		.intro {
			font-size: 1.5rem;
		}
		.intro p {
			margin-block: 1rem;
		}
		.title {
			font-size: 1.75rem;
		}

		.contact-me {
			width: 60%;
		}
		.contact-me label {
			font-size: 1.25rem;
		}
		.contact-me input, .contact-me textarea{
			font-size: 1.25rem;
		}

		.cta {
			font-size: 1.25rem;
		}

		.tools-technologies > div {
			gap: 1rem;
		}

		.follow-me {
			justify-content: flex-end;
		}
	}
</style>

<script setup>
	import { ref } from 'vue';
	import { collection, addDoc, serverTimestamp } from "firebase/firestore"

	const { $db } = useNuxtApp();

	// const navBarOpen = useState('navBarOpen', () => false)
	const navBarOpen = ref(false);
	const form = ref({
		name: "",
		email: "",
		subject: "",
		message: ""
	});
	const submittedOnce = ref(false);
	const toastMessageIsOn = ref(false);
	const lastSubmit = ref(0);
	const submittedCount = ref(0);

	let toastTimeout = null;

	function closeNav() {
		navBarOpen.value = false
		if (process.client) { document.body.style.overflow = "scroll" }
	}

	function openNav() {
		navBarOpen.value = true
		if (process.client) { document.body.style.overflow = "hidden" }
	}

	const openToastMessage = () => toastMessageIsOn.value = true;
	const closeToastMessage = () => toastMessageIsOn.value = false;

	function canSubmit() {
		const now = Date.now();
		if (now - lastSubmit.value < 30_000) return false; // 30 sec
		lastSubmit.value = now;
		return true;
	}

	async function handleSubmit() {
		if(form.value.name === "" || form.value.email === "" || form.value.message === ""){
			submittedOnce.value = true;
			return;
		}

		if ((submittedCount.value >= 3) && !canSubmit()) {
			alert("Please wait before sending again")
			return;
		}

		try {
			await addDoc(collection($db, "contacts"), {
				...form.value,
				createdAt: serverTimestamp()
			})

			submittedOnce.value = false;
			form.value.name = "";
			form.value.email = "";
			form.value.subject = "";
			form.value.message = "";

			openToastMessage();

			toastTimeout && clearTimeout(toastTimeout)
			toastTimeout = setTimeout(() => {
				closeToastMessage()
				toastTimeout = null;
			}, 3000)

			submittedCount.value = submittedCount.value + 1;
		} catch (err) {
			console.error(err)
			closeToastMessage();
		}
	}

	onBeforeUnmount(() => {
		toastTimeout && clearTimeout(toastTimeout)
	})

</script>
