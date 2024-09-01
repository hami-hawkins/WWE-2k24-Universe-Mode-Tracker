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

//draft a wrestler to smackdown

//draft a wrestler to nxt

//undraft wrestler
