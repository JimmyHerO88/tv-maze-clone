import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
/* components */
import Paths from './router'
/* styles */
//import 'bootstrap/dist/css/bootstrap.min.css'
//import './styles/index.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <BrowserRouter>
      <Paths />
    </BrowserRouter>
  </StrictMode>
)
