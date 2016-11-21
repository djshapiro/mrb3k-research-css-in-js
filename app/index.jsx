import React from 'react';
import { Style, StyleRoot } from 'radium';
import ReactDOM from 'react-dom';
import App from './components/App';
// import '../node_modules/todomvc-common/base.css';
// import '../node_modules/todomvc-app-css/index.css';

const baseStyles = {
  html: {
    margin: 0,
    padding: 0,
  },
  get body() {
    return Object.assign({}, this.html, {
      fontSize: 14,
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      lineHeight: '1.4em',
      background: '#f5f5f5',
      color: '#4d4d4d',
      minWidth: 230,
      maxWidth: 550,
      margin: '0 auto',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      fontWeight: 300,
    });
  },
  ':focus': {
    outline: 0,
  },
  button: {
    margin: 0,
    padding: 0,
    border: 0,
    background: 'none',
    fontSize: '100%',
    verticalAlign: 'baseline',
    fontFamily: 'inherit',
    fontWeight: 'inherit',
    color: 'inherit',
    WebkitAppearance: 'none',
    appearance: 'none',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  hr: {
    marginTop: 20,
    marginRight: 0,
    marginBottom: 20,
    marginLeft: 0,
    border: 0,
    borderTop: '1px dashed #c5c5c5',
    borderBottom: '1px dashed #f7f7f7',
  },
};


const Index = (
  <StyleRoot>
    <Style rules={baseStyles} />
    <App />
  </StyleRoot>
);

ReactDOM.render(Index, document.getElementById('app'));
