import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export type TNodeColors = {
  default: string,
  clicked: string,
  selected: string
};

export type TConfig = {
  nodeColors: TNodeColors;
}

const config: TConfig = {
  nodeColors: {
    default: 'rgb(226, 226, 226)',
    clicked: '#f74d6f',
    selected: '#43e3e8',
  },
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App config={config} />
  </React.StrictMode>
);
