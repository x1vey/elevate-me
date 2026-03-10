import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ExamplesProvider } from './examplesContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ExamplesProvider>
      <App />
    </ExamplesProvider>
  </StrictMode>,
);
