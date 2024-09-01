import connection from './connection'

import { Wrestler } from '../../models/wrestler'

const db = connection

//get all wrestlers
export function getAllWrestlers(): Promise<Wrestler[]> {
  return db('wrestlers').select(
    'id',
    'name',
    'brand',
    'gender',
    'alignment',
    'fighting_style as fightingStyle',
    'faction',
    'dlc',
    'is_legend as isLegend',
  )
}

//get wrestler by ID
export function getWrestlerById(id: number): Promise<Wrestler> {
  return db('wrestlers')
    .where({ id })
    .select(
      'id',
      'name',
      'brand',
      'gender',
      'alignment',
      'fighting_style as fightingStyle',
      'faction',
      'dlc',
      'is_legend as isLegend',
    )
    .first()
}

//add a new wrestler
export function addWrestler(newWrestler: Wrestler) {
  return db('wrestlers').insert(newWrestler)
}

//delete a wrestler
export function deleteWrestler(id: number) {
  return db('wrestlers').where({ id }).delete()
}

//update a wrestler
//draft wrestler to raw
export function draftToRaw(id: number) {
  return db('wrestlers').where({ id }).update('brand', 'Raw')
}

//draft wrestler to smackdown
export function draftToSmackdown(id: number) {
  return db('wrestlers').where({ id }).update('brand', 'Smackdown')
}

//draft wrestler to nxt
export function draftToNXT(id: number) {
  return db('wrestlers').where({ id }).update('brand', 'NXT')
}
//undraft wrestler
export function undraft(id: number) {
  return db('wrestlers').where({ id }).update('brand', '')
}
