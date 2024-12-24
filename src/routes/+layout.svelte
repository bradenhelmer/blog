<script lang="ts">
	import { currentUser, pb } from "$lib/pb"
	let { children } = $props();	
</script>
<style type="text/css" media="screen">
	.nav_bar {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(2, 1fr);
		padding: 1rem;
	}
	.nav_bar div {
		text-align: center;
		padding: 0.5rem 1rem;
	}
	.nav_bar a {
		text-align: center;
		padding: 0.5rem 1rem;
	}
	.blog_title {
		grid-column-start: 1;
		grid-column-end: 3;
	}

</style>

<div class="page">
	<div class="nav_bar">
		<div class="blog_title">
		<a href="/">
			BH Blog
		</a>
		</div>
		<div>
			Socials	
		</div>
		<a href="/login">
			{#if $currentUser}	
			Account
			{:else}
			Log In	
			{/if}
		</a>
		<a href="/about">
			About	
		</a>
		<a href="/posts">
			Posts
		</a>
		<a href="/projects">
			Projects
		</a>
		<a href="/resume">
			Resume
		</a>
	</div>
</div>

{@render children()}
