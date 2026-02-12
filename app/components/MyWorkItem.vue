<template>
	<div class="my-work-item bg-white">
		<div>
			<img class="w-full my-work-item-img" src="/programming-illustration.png"/>
		</div>
		<h5 class="sub-title">Winkchay - Dating App</h5>
		<p class="mb-2">
			A Web app with real-time chatting, matching users by location and interests.
		</p>
		<div class="technology-ctn">
			<span class="technology-item">ExpressJs</span>
			<span class="technology-item">MongoDB</span>
			<span class="technology-item">WebSocket</span>
			<span class="technology-item">ReactJs</span>
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

	.technology-ctn {
		display: grid;
		gap: 0.5rem;
		grid-template-columns: repeat(auto-fit, minmax(6.5rem, 8rem));
	}

	.technology-item {
		display: inline-flex;
		align-items: center;   /* vertical centering */
		justify-content: center;
		color: white;
		border-radius: 1rem;
		background-color: var(--surface-color);
		padding: 0.125rem 0.25rem;
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
