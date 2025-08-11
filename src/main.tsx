import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { setupStore } from './store/index.ts'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={setupStore()} >
      <App />
    </Provider>
  </StrictMode>,
)
