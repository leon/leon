const RANDOM_COLORS = ['#a2c3d3', '#fee818', '#ffd0d4', '#ffc666', '#fb7ea8']

export const randomColor = (): string => {
  const rand = Math.floor(Math.random() * RANDOM_COLORS.length - 1)
  return RANDOM_COLORS[rand]
}
