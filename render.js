import { renderToString } from 'react-dom/server';
import App from './src/App.jsx';
import React from 'react';

try {
  const html = renderToString(React.createElement(App));
  console.log("SUCCESS");
} catch (e) {
  console.error("REACT RENDER ERROR:", e.message);
  console.error(e.stack);
}
