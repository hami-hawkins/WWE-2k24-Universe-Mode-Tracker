import request from 'superagent'
import { Wrestler } from '../../models/wrestler'

//get all wrestlers
export async function getWrestlers(): Promise<Wrestler[]> {
  const wrestlers = await request.get('/api/v1/wrestlers')
  return wrestlers.body as Wrestler[]
}

//get wrestler by id
export async function getWrestlerById(id: number): Promise<Wrestler> {
  const wrestler = await request.get(`/api/v1/wrestlers/${id}`)
  return wrestler.body as Wrestler
}

//add a wrestler
export async function addNewWrestler(newWrestler: Wrestler) {
  return await request.post('/api/v1/wrestlers/').send(newWrestler)
}

//delete a wrestler
export async function deleteWrestler(id: number) {
  return await request.delete(`/api/v1/wrestlers/${id}`)
}

//draft a wrestler to raw
export async function draftToRaw(id: number) {
  return await request
    .patch(`/api/v1/wrestlers/brand/${id}`)
    .send({ brand: 'Raw' })
}

//draft a wrestler to smackdown
export async function draftToSmackdown(id: number) {
  return await request
    .patch(`/api/v1/wrestlers/brand/${id}`)
    .send({ brand: 'Smackdown' })
}

//draft a wrestler to nxt
export async function draftToNXT(id: number) {
  return await request
    .patch(`/api/v1/wrestlers/brand/${id}`)
    .send({ brand: 'NXT' })
}

//undraft wrestler
export async function undraftWrestler(id: number) {
  return await request
    .patch(`/api/v1/wrestlers/brand/${id}`)
    .send({ brand: '' })
}
