<script lang="ts">
  import { format, parseISO } from 'date-fns'

  interface Props {
    date: string
  }
  let { date }: Props = $props()

  let parsedDate = $derived(date && parseISO(String(date)))
  let dateFormatted = $derived(parsedDate && format(parsedDate, 'MMMM yyy'))
</script>

<time class="text-sm" dateTime={date}>
  {dateFormatted}
</time>
