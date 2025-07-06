<script lang="ts">
  import { page } from '$app/state'
</script>

<div class="flex flex-1 flex-col items-center justify-center gap-4">
  <h1 class="heading-1 text-6xl">{page.status}</h1>
  <p class="text-xl">{page.error?.message}</p>
</div>
