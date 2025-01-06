import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Nav from './Component/Nav.tsx'
import List from './Component/List.tsx'
import Tab from './Component/Tab.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="container">
      <Nav />
      <List />
      <Tab />
    </div>
  </StrictMode>,
)
