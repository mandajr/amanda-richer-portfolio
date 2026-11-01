import { renderToString } from 'react-dom/server';
import App from './App.jsx';

export { pages } from './pages.js';

export const renderTab = tab => renderToString(<App initialTab={tab} />);
