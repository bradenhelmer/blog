<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();

</script>
<div class="wrapper">
	<ul>
		{#each data.posts as post}
			<li>
				<a href={`/posts/${post.id}`}>{post.title}</a>
			</li>	
		{/each}
	</ul>
</div>
