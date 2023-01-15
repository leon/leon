<script lang="ts">
	import type { Thing, WithContext } from 'schema-dts'

	export let schema: Thing | WithContext<Thing>
</script>

{@html '<script type="application/ld+json">' + JSON.stringify(schema) + '</script>'}
