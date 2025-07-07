<script lang="ts">
  import type { Article } from '$lib/data'
  import { format, parseISO } from 'date-fns'
  import GithubIcon from '../icons/GithubIcon.svelte'
  import TagList from '../TagList.svelte'

  interface Props {
    article: Article
    randomColor: string
    class?: string
  }

  let { article, randomColor, class: className }: Props = $props()

  const parsedDate = article.date && parseISO(article.date)
  const dateFormatted = parsedDate && format(parsedDate, 'MMMM yyy')
</script>

<div
  class={[
    'not-prose w-prose-full header-offset-mobile lg:header-offset-desktop relative',
    'flex h-[30vh] min-h-fit items-end justify-center',
    'bg-[#a2c3d3]',
    className,
  ]}
  style:background-color={randomColor}
>
  {#if article.image}
    <img class="absolute h-full w-full object-cover" {...article.image} />
  {/if}
  <div class="z-10 my-8 flex flex-col items-center">
    {#if article.tags}
      <TagList url="/articles" tags={article.tags} />
    {/if}
    <h1 class="heading-1">{article.title}</h1>
    <time class="text-2xl font-bold" dateTime={article.date}>
      {dateFormatted}
    </time>
  </div>

  {#if article.githubUrl}
    <a
      class="absolute right-3 -bottom-4 flex items-center gap-2 rounded-md bg-gray-200 px-3 py-2 text-xs font-semibold"
      href={article.githubUrl}
    >
      <GithubIcon />
      <span class="hidden md:inline">View on Github</span>
    </a>
  {/if}
</div>
