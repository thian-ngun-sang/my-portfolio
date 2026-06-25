<template>
	<div class="nav-bar">

    <div :class="navBarOpen?'h-[100vh] bg-white lg:hidden':''">
      <div class="w-full flex justify-end bg-white lg:hidden">
        <Icon name="mdi:menu" :class="!navBarOpen?'bg-dark nuxt-icon cursor-pointer':'hidden'" @click="$emit('openNav')"/>
        <Icon name="mdi:close" :class="navBarOpen?'bg-dark nuxt-icon cursor-pointer':'hidden'" @click="$emit('closeNav')"/>
      </div>

      <nav :class="navBarOpen?'flex flex-col items-end gap-4 text-lg':'hidden'">
        <NuxtLink to="/" @click="scrollTo('home')">Home</NuxtLink>
        <a href="#my-work" class="nowrap" @click.prevent="scrollTo('my-work')">My Work</a>
        <a href="#tools-technologies" @click.prevent="scrollTo('tools-technologies')">Tools &amp; Technologies</a>
        <a href="#contact-me" @click.prevent="scrollTo('contact-me')">Contact Me</a>
      </nav>
    </div>

		<div class="w-full hidden lg:block">
      <nav class="w-full flex justify-end bg-white gap-8">
        <NuxtLink to="/" @click="scrollTo('home')">Home</NuxtLink>
        <a href="#my-work" class="text-nowrap">My Work</a>
        <a href="#tools-technologies" class="text-nowrap">Tools &amp; Technologies</a>
        <a href="#contact-me" class="text-nowrap">Contact Me</a>
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
		font-size: 2rem;
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
      if(id !== "home"){
        window.location.hash = id
      }
			el.scrollIntoView({ behavior: "smooth" })
		}
	}
</script>
