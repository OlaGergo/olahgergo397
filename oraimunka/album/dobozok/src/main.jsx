import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Felhasznalok from './Felhasznalok'
import 'tachyon'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Felhasznalok />
  </StrictMode>,
)
