/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Homepage from './components/Homepage'
import Draft from './components/Draft'
import AutoDraft from './components/AutoDraft'

const router = createBrowserRouter(
  createRoutesFromElements([
    <>
      <Route path="/" element={<Homepage />} />
      {/* Add routes below here */}
      <Route path="/draft" element={<Draft />} />
      <Route path="/autodraft" element={<AutoDraft />} />
    </>,
  ]),
)

export default router
