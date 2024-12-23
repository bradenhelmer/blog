<script lang="ts">
	import { currentUser, pb } from "../../lib/pb"

	let password: string;

	async function login() {
		await pb.collection('_superusers').authWithPassword("bradenhelmeraus@gmail.com", password);
	}

	function logout() {
		pb.authStore.clear();
	}
</script>

<style type="text/css" media="screen">
	form {
		text-align: center;
	}
</style>
{#if $currentUser}
<p style="text-align: center">
    Currently logged in.
	<button on:click={logout}>Logout</button>
</p>
{:else}
<form on:submit|preventDefault>
		<input
			placeholder="Password"
			type="password"
			bind:value={password}
		/>
		<button on:click={login}>Login</button>
</form>
{/if}
