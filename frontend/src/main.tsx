// main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom'; // ✅ add this

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter> {/* wrap App */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
