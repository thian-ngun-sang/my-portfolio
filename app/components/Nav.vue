<template>
	<div class="nav-bar">
		<div v-if="!navBarOpen" class="w-full flex justify-end bg-white app lg:hidden">
			<Icon name="mdi:menu" class="bg-dark nuxt-icon cursor-pointer" @click="$emit('openNav')"/>
		</div>
		<div v-if="!navBarOpen" class="w-full hidden lg:block">
				<nav class="w-full flex justify-end bg-white gap-8">
					<a href="#home" @click.prevent="scrollTo('home')">Home</a>
					<a href="#my-work" class="text-nowrap" @click.prevent="scrollTo('my-work')">My Work</a>
					<a href="#tools-technologies" class="text-nowrap" @click.prevent="scrollTo('tools-technologies')">Tools &amp; Technologies</a>
					<a href="#follow-me" class="text-nowrap" @click.prevent="scrollTo('follow-me')">Follow Me</a>
				</nav>
		</div>

		<div v-if="navBarOpen" class="mobile-nav absolute top-0 right-0 left-0 h-[100vh] bg-white app">
			<div class="w-full flex justify-end">
				<Icon name="mdi:close" class="nuxt-icon bg-dark cursor-pointer" @click="$emit('closeNav')"/>
			</div>
			<nav class="flex flex-col items-end">
				<a href="#home" class="text-nowrap" @click.prevent="scrollTo('home')">Home</a>
				<a href="#my-work" class="nowrap" @click.prevent="scrollTo('my-work')">My Work</a>
				<a href="#tools-technologies" @click.prevent="scrollTo('tools-technologies')">Tools &amp; Technologies</a>
				<a href="#contact-me" @click.prevent="scrollTo('contact-me')">Contact Me</a>
			</nav>
		</div>

	</div>
</template>

<style scoped>
	a:hover {
		color: var(--link-color);
	}

	a:focus {
		color: var(--link-color);
	}

	.nuxt-icon{
		font-size: 1.75rem;
	}

	.nav-bar{
		user-select: none;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: white;
		padding-block: 0.75rem;
		z-index: 3;
	}

	.mobile-nav{
		padding-top: 0.75rem;
	}

	nav > * {
		display: block;
	}

	@media(min-width: 1024px){
		.nav-bar {
			padding-inline: 0.75rem;
		}
	}
</style>

<script setup>
	const emit = defineEmits(["openNav", "closeNav"]);

	defineProps({
		navBarOpen: {
			type: Boolean,
			required: true
		}
	});

	function scrollTo(id) {
		emit('closeNav');
		const el = document.getElementById(id)
		if (el) {
			el.scrollIntoView({ behavior: "smooth" })
		}
	}
</script>
