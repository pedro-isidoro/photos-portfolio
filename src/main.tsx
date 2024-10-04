import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@/components/App/App'
// import './input.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
