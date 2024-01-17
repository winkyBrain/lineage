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
  | 'fontWeight' | 'cursor'>;

export type TEdgeStyles = Pick<React.CSSProperties, 'stroke' | 'strokeWidth'>;
// найти возможность задавать перфорацию

export type TConfig = {
  minimapColors: TMinimapColors,
  commonNodeStyles: TCommonNodeStyles,
  selectedNodeStyles: TCustomNodeStyles,
  clickedNodeStyles: TCustomNodeStyles,
  defaultNodeStyles: TCustomNodeStyles,
  tooltipStyles: TTooltipStyles;
  edgeStyles: TEdgeStyles;
  edgeLabelStyles: TEdgeLabelStyles;
};

const config: TConfig = {
  minimapColors: {
    default: '#e2e2e2',
    clicked: '#f74d6f',
    selected: '#43e3e8',
  },
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
  tooltipStyles: {
    border: '1px solid black',
    borderRadius: '6px',
    backgroundColor: 'white',
    padding: '2px 6px',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
  },
  edgeStyles: {
    stroke: '#a742f5',
    strokeWidth: 1,
  },
  edgeLabelStyles: {
    padding: '0px',
    color: 'black',
    backgroundColor: '#eee',
    border: '1px solid #fff',
    cursor: 'pointer',
    borderRadius: '50%',
    fontSize: '12px',
    height: '20px',
    width: '20px',
  },
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App config={config} />
  </React.StrictMode>
);
