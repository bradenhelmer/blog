<script lang="ts">
	import type { Post } from "$lib/types";
	let { data }: { data: { posts: Post[] } } = $props();
</script>

<div>
	<h1 style="text-align:center">Posts</h1>
	<ul>
		{#each data.posts as post}
			<li>
				<a href={`/posts/${post.id}`}>{post.title}</a>
			</li>
		{/each}
	</ul>
</div>
