import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CidadaoProvider } from './util/CidadaoProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CidadaoProvider>
      <App />
    </CidadaoProvider>
  </StrictMode>,
)
