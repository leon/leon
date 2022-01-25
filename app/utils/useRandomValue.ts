import { useEffect, useState } from 'react'

export const useRandomValue = (values: any[]): string => {
  const [color, setColor] = useState<string>(values[0])
  useEffect(() => {
    const rand = Math.floor(Math.random() * values.length)
    setColor(values[rand])
  }, [])
  return color
}
