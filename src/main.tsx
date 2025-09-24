import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CidadaoProvider } from './util/CidadaoProvider.tsx';
import { AuthProvider } from './util/AuthContext.tsx';
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
    <CidadaoProvider>
      <App />
    </CidadaoProvider>
    </AuthProvider>
  </StrictMode>,
)
