/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Homepage from './components/Homepage'

const router = createBrowserRouter(
  createRoutesFromElements([<Route path="/" element={<Homepage />} />]),
)

export default router
