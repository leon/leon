import { useRandomValue } from './useRandomValue'

export const useRandomColor = (): string => {
  return useRandomValue(['#a2c3d3', '#fee818', '#ffd0d4', '#ffc666', '#fb7ea8'])
}
