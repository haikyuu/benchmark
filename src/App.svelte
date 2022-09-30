<script>
	import './app.css'
	let mult = 1;
	const items = Array.from(Array(10000).keys());
	function handleClick() {
		mult += 1;
	}
</script>

<div class="container">
	<h1>Hello Svelte</h1>
	{#each items as item, i}
	<button class='item svelte' data-testid="svelte-{i}" on:click={handleClick} key={item}>
		{item * mult}
	</button>
	{/each}
</div>