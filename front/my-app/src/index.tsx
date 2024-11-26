import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import App from './App';


const rootElement = document.getElementById('root');
const queryClient = new QueryClient();

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </QueryClientProvider>
  );
} else {
  console.error('Elemento root não encontrado no DOM');
}
