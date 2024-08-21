import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


// Style
import './index.css';

// Component
import App from './App.jsx';
import DataRoutes from './DataRoutes.jsx';



createRoot(document.getElementById('root')).render(
  <>
  <StrictMode>

    <App />
    <DataRoutes />  {/* Data Routes with createBrowserRouter */}

  </StrictMode>
  </>
)
