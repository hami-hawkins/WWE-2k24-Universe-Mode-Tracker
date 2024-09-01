import { Router } from 'express'

import * as db from '../db/wrestlers'

const router = Router()

//get all wrestlers
//GET '/api/v1/wrestlers/'
router.get('/', async (req, res) => {
  try {
    const wrestlers = await db.getAllWrestlers()
    res.json(wrestlers).status(200)
  } catch (error) {
    console.error('Could not get wrestlers: ', error)
    res.status(500)
  }
})

//get wrestler by id
//GET '/api/v1/wrestlers/
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const wrestler = await db.getWrestlerById(id)
    res.json(wrestler)
  } catch (error) {
    console.error('Could not find wrestler: ', error)
    res.status(500)
  }
})

//add a new wrestler
//POST '/api/v1/wrestlers/'
router.post('/', async (req, res) => {
  const newWrestler = req.body
  try {
    await db.addWrestler(newWrestler)
    res.status(201)
  } catch (error) {
    console.error('Failed to add wrestler: ', error)
    res.status(500)
  }
})

//delete wrestler
//DELETE '/api/v1/wrestlers/:id'
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await db.deleteWrestler(id)
    res.status(201)
  } catch (error) {
    console.error('Failed to delete wrestler: ', error)
    res.status(500)
  }
})

//draft wrestler to raw
//UPDATE '/api/v1/wrestlers/brand/:id
router.patch('/brand/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await db.draftToRaw(id)
    res.status(201)
  } catch (error) {
    console.error('Failed to draft wrestler to RAW: ', error)
    res.status(500)
  }
})

//draft wrestler to smackdown
//UPDATE '/api/v1/wrestlers/brand/:id
router.patch('/brand/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await db.draftToSmackdown(id)
    res.status(201)
  } catch (error) {
    console.error('Failed to draft wrestler to Smackdown: ', error)
    res.status(500)
  }
})

//draft wrestler to NXT
//UPDATE '/api/v1/wrestlers/brand/:id
router.patch('/brand/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await db.draftToNXT(id)
    res.status(201)
  } catch (error) {
    console.error('Failed to draft wrestler to NXT: ', error)
    res.status(500)
  }
})

//Undraft a wrestler
//UPDATE '/api/v1/wrestlers/brand/:id
router.patch('/brand/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await db.undraft(id)
    res.status(201)
  } catch (error) {
    console.error('Failed to make wrestler Free Agent: ', error)
    res.status(500)
  }
})

export default router
