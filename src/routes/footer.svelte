<script lang="ts">
	import SocialNav from '$lib/components/SocialNav.svelte'

	const year = new Date().getFullYear()
</script>

<footer class="fixed-bottom mt-12 bg-primary-dark text-gray-400">
	<div class="min-h-42 container flex flex-col items-center justify-between p-4">
		<div class="m-8 flex justify-center">
			<SocialNav />
		</div>
		<small class="text-gray-500">site design / content © 2009-{year} Leon Radley</small>
	</div>
</footer>
