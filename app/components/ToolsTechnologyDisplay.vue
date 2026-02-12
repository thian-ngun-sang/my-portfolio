<template>
	<div class="flex flex-col justify-end items-center bg-white aspect-[1] pb-3 box-content">
		<div class="flex justify-center items-center flex-1">
			<img :src="'/logos/' + tool.path + '.png'" class="w-[45%]"/>
		</div>
		<span class="tools-technology-name">{{ tool.name }}</span>
	</div>
</template>

<style scope>
	.tools-technology-name {
		font-family: "Abhaya Libre";
		font-weight: 700;
	}

	@media(min-width: 1024px){
		.tools-technology-name {
			font-size: 1.5rem;
		}
	}
</style>

<script setup>
	const props = defineProps({
		tool: Object
	})
</script>
