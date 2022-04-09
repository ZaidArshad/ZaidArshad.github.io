// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import './index.css';
import App from './App';

import { createRoot, Root } from 'react-dom/client';
const container = document.getElementById('root')!;
const root:Root = createRoot(container);
root.render(<App/>);