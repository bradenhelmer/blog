<script lang="ts">
	import type { Post } from "$lib/types";
	let { data }: { data: { post: Post } } = $props();
</script>

<article>
	<div class="wrapper">
		<h1>{data.post.title}</h1>
		<article>{@html data.post.content}</article>
	</div>
</article>

<style>
	.wrapper {
		text-align: center;
	}
</style>
