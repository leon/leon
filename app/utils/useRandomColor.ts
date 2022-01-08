import { useEffect, useState } from 'react'

const RANDOM_COLORS = ['#a2c3d3', '#fee818', '#ffd0d4', '#ffc666', '#fb7ea8']

export const useRandomColor = (): string => {
  const [color, setColor] = useState<string>('#ffffff')
  useEffect(() => {
    const rand = Math.floor(Math.random() * RANDOM_COLORS.length - 1)
    setColor(RANDOM_COLORS[rand])
  }, [])
  return color
}
