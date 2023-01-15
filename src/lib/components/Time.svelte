<script lang="ts">
	import { format, parseISO } from 'date-fns'

	export let date: string

	$: parsedDate = date && parseISO(String(date))
	$: dateFormatted = parsedDate && format(parsedDate, 'MMMM yyy')
</script>

<time class="text-sm" dateTime={date}>
	{dateFormatted}
</time>
