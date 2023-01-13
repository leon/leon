<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData
  
  const { title } = data.meta
  </script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<article>
  {@html data.MdContent}
</article>