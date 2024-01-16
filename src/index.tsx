import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export type TMinimapColors = {
  default: string,
  clicked: string,
  selected: string
};

export type TCommonNodeStyles = Pick<React.CSSProperties, 'padding' | 'borderRadius' | 'fontFamily' | 'textAlign' | 'overflowWrap'>;

export type TCustomNodeStyles = Pick<React.CSSProperties, 'color' | 'backgroundColor' | 'border' | 'fontSize' | 'fontWeight' | 'boxShadow'>;

export type TTooltipStyles = Pick<React.CSSProperties,
  'padding' | 'borderRadius' | 'fontFamily' | 'overflowWrap' | 'color' | 'backgroundColor'
  | 'border' | 'fontSize' | 'fontWeight' | 'alignItems' | 'justifyContent' | 'gap'>;

export type TEdgeLabelStyles = Pick<React.CSSProperties,
  'height' | 'width' | 'padding' | 'color' | 'backgroundColor' | 'border' | 'borderRadius' | 'fontFamily' | 'fontSize'
  | 'fontWeight' | 'justifyContent' | 'alignItems' | 'cursor'>
// type TEdgeStyles = {
//   color: string,
//   strokeWidth: string,
//   // найти возможность задавать перфорацию
// };

export type TConfig = {
  minimapColors: TMinimapColors,
  edgeColor: string,
  commonNodeStyles: TCommonNodeStyles,
  selectedNodeStyles: TCustomNodeStyles,
  clickedNodeStyles: TCustomNodeStyles,
  defaultNodeStyles: TCustomNodeStyles,
}


const config: TConfig = {
  minimapColors: {
    default: '#e2e2e2',
    clicked: '#f74d6f',
    selected: '#43e3e8',
  },
  edgeColor: '#a742f5',
  commonNodeStyles: {
    padding: '10px',
    borderRadius: '10px',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    overflowWrap: 'break-word',
  },
  defaultNodeStyles: {
    color: 'black',
    backgroundColor: 'white',
    border: '1px solid black',
    fontSize: '10px',
    fontWeight: 400,
    boxShadow: 'none',
  },
  clickedNodeStyles: {
    color: '#50F7AC',
    backgroundColor: '#f74d6f',
    border: '1px solid #50F7D5',
    fontSize: '10px',
    fontWeight: 600,
    boxShadow: 'none',
  },
  selectedNodeStyles: {
    color: '#E84A45',
    backgroundColor: '#43e3e8',
    border: '1px solid #E84A45',
    fontSize: '10px',
    fontWeight: 600,
    boxShadow: 'none',
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
