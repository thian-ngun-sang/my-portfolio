<template>
	<div class="my-work-item bg-white">
		<h5 class="sub-title">{{ project.name }}</h5>
		<div class="mt-2">
			<img class="w-full my-work-item-img" :src="'/my-works/' + project.id + '/' + project.imageList[0]"/>
		</div>

		<div class="flex justify-between items-center my-2">
			<span class="app-type">{{ project.type }}</span>
			<div class="flex gap-2">
				<a v-if="project.sourceCode !== ''" :href="project.sourceCode" target="_blank" class="flex items-center">
          <Icon name="grommet-icons:github" class="text-2xl app-link"/>
        </a>
				<a v-if="project.liveView !== ''" :href="project.liveView" target="_blank" class="flex items-center">
          <Icon name="grommet-icons:share-rounded" class="text-2xl"/>
        </a>
			</div>
		</div>

		<p class="mb-2">
			{{ project.description }}
		</p>

		<div class="technology-ctn">
			<span v-for="technology in project.technologyList" class="technology-item">{{ technology }}</span>
		</div>
	</div>
</template>

<style scope>
	.sub-title {
		font-size: 1.25rem;
		font-weight: 600;
	}

	.my-work-item {
		padding: 1rem;
		border: 0.0625rem solid var(--outline-color);
		border-radius: 0.25rem;
	}

	.my-work-item-img {
		aspect-ratio: 4/1.6;
		object-fit: contain;
	}

	.app-type{
		display: inline-flex;
		align-items: center;   /* vertical centering */
		justify-content: center;
		border: 0.075rem solid var(--primary-color);
		padding: 0.10rem 0.75rem;
		color: var(--primary-color);
		border-radius: 1.5rem;
	}

	.technology-ctn {
		display: grid;
		gap: 0.5rem;
		grid-template-columns: repeat(auto-fit, minmax(6rem, 8rem));
	}

	.technology-item {
		display: inline-flex;
		align-items: center;   /* vertical centering */
		justify-content: center;
		color: white;
		border-radius: 1rem;
		background-color: var(--surface-color);
		padding: 0.10rem 0.125rem;
	}

	@media(min-width: 1024px){
		.sub-title {
			font-size: 1.5rem;
		}
		p {
			font-size: 1.25rem;
		}
		span {
			font-size: 1.25rem;
		}
	}
</style>

<script setup>
	const props = defineProps({
		project: Object
	})
</script>
