<script lang="ts">
  import SocialNav from '$lib/components/SocialNav.svelte'

  const year = new Date().getFullYear()
</script>

<footer class="fixed-bottom bg-primary-dark mt-12 text-gray-400">
  <div class="container flex min-h-42 flex-col items-center justify-between p-4">
    <div class="m-8 flex justify-center">
      <SocialNav />
    </div>
    <small class="text-gray-500">site design / content © 2009-{year} Leon Radley</small>
  </div>
</footer>
