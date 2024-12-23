<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();

</script>
<div class="wrapper">
	<ul>
		{#each data.posts as post}
			<li>{post.title}</li>	
		{/each}
	</ul>
</div>
