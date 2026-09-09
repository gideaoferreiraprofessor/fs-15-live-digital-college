import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import ToDo from './pages/todo/Todo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToDo />
  </StrictMode>,
)
