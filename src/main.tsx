import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.tsx'
import List from './Component/List.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <List />
  </StrictMode>,
)
