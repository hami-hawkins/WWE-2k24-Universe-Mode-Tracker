export interface Wrestler {
  id: number
  name: string
  brand: string | null
  gender: string
  alignment: string
  fightingStyle: string
  faction: string | null
  dlc: boolean
  isLegend: boolean
}
