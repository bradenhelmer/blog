<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData; 
</script>

<article>
	<h1>{data.post.title}</h1>
	<p>{@html data.post.content}</p>
</article>

