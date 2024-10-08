import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { AddToCartButton } from './components/Buttons/AddToCartButton';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AddToCartButton />
  </React.StrictMode>
);
