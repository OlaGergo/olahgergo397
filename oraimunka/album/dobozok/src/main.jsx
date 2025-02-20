import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Felhasznalok from './Felhasznalok'
import 'tachyons'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Felhasznalok />
  </StrictMode>,
)
