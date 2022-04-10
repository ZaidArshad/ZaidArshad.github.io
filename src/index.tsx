import './index.css';
import App from './App';

import { createRoot, Root } from 'react-dom/client';
const container = document.getElementById('root')!;
const root:Root = createRoot(container);
root.render(<App/>);