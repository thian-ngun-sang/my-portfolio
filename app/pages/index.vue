<template>
	<div class="app">
		<Nav @openNav="openNav" @closeNav="closeNav" :navBarOpen="navBarOpen"/>
		<div class="bg-white pt-[3.5rem] lg:pt-[3.25rem]" id="home">

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
					<!-- <a target="blank" href="https://wa.me/8119887227">Let's Talk</a> -->
					<a href="#contact-me" @click.prevent="scrollTo('contact-me')">Contact Me</a>
				</button>
			</div>

		</div>

		<div class="intersection">
			<section class="my-work" id="my-work">
				<h4 class="title">My Work</h4>	

				<div class="flex flex-col gap-3">
					<MyWorkItem v-for="project in projectList" :project="project"/>
				</div>
			</section>

			<section class="tools-technologies" id="tools-technologies">
				<h4 class="title">Tools & Technologies</h4>	

				<div>
					<ToolsTechnologyDisplay v-for="tool in toolsList" :tool="tool"/>
				</div>
			</section>

      <section id="contact-me">
        <ContactForm @openToastMessage="openToastMessage" @closeToastMessage="closeToastMessage"/>
      </section>

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

<style>

</style>

<script setup>
	import { ref } from 'vue';

  import { projectList } from '../data/projects';
  import { toolsList } from '../data/tools';

	// const navBarOpen = useState('navBarOpen', () => false)
	const navBarOpen = ref(false);
	const toastMessageIsOn = ref(false);

	function closeNav() {
		navBarOpen.value = false
		if (process.client) { document.body.style.overflowY = "auto" }
	}

	function openNav() {
		navBarOpen.value = true
		if (process.client) { document.body.style.overflowY = "hidden" }
	}

	function scrollTo(id) {
		const el = document.getElementById(id)
		if (el) {
			el.scrollIntoView({ behavior: "smooth" })
		}
	}

	const openToastMessage = () => toastMessageIsOn.value = true;
	const closeToastMessage = () => toastMessageIsOn.value = false;

</script>
