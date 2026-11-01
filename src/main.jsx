import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const root = document.getElementById('root');
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// The built pages already hold the tab's words, so React picks those up. An old
// link like /#work lands on the home page's HTML, so that one is drawn fresh.
if (root.hasChildNodes() && !window.location.hash) hydrateRoot(root, app);
else createRoot(root).render(app);
