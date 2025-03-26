import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Toaster } from './components/ui/toaster.tsx'
import { Analytics } from '@vercel/analytics/react'
import GoogleAnalytics from './components/analytics/GoogleAnalytics.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleAnalytics />
    <App />
    <Analytics />
    <Toaster />
  </StrictMode>,
)