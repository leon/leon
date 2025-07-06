<script lang="ts">
  interface Props {
    href: string
    image: string
    title: string
    description: string
  }
  let { href, image, title, description }: Props = $props()
</script>

<a class="group flex flex-col gap-2" {href} target="_blank" rel="noreferrer">
  <img class="aspect-[16/10] rounded object-cover object-top" src={image} alt="" />
  <h4 class="font-heading mt-4 text-xl font-semibold group-hover:underline">{title}</h4>
  <p>{description}</p>
</a>
