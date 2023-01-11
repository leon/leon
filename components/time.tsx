import { format, parseISO } from 'date-fns'

export interface TimeProps {
  date: string
}
export function Time({ date }: TimeProps) {
  if (!date) {
    return null
  }
  const parsedDate = date && parseISO(String(date))
  const dateFormatted = parsedDate && format(parsedDate, 'MMMM yyy')

  return (
    <time className="text-sm" dateTime={date}>
      {dateFormatted}
    </time>
  )
}
