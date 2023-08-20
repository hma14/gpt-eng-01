import React from 'react';
import client from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = client.createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);