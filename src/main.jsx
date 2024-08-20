import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"

// Style
import './index.css';

// Component
import App from './App.jsx';
import NormalRoutes from './NormalRoutes.jsx';
import BasicDataRoute from './BasicDataRoute.jsx';
import DataRoutes from './DataRoutes.jsx';
import UseRoutesDataRoute from './UseRoutesDataRoute.jsx';


createRoot(document.getElementById('root')).render(
  <>
  <StrictMode>

    <App />
    <BasicDataRoute />  {/* Data Routes with createBrowserRouter */}
    <DataRoutes />  {/* Data Routes with createBrowserRouter */}


{/*
    Uncaught Error: useLoaderData must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.

    The error you're encountering happens because useLoaderData() requires a data router like createBrowserRouter(), which 
    is specifically designed to work with route loaders. The useRoutes() hook, while it allows defining routes as an array 
    of objects, does not provide the necessary context for loaders.
    To fix this issue, you need to use createBrowserRouter() instead of useRoutes(). Here’s how you can adjust your code:

    Convert useRoutes() to createBrowserRouter()
    You can keep the same route configuration but change the implementation to use createBrowserRouter().

    Remark: "useRoutes()" hook is equivalent to "<Routes>" component. They don’t support Data API, such like “useLoaderData()” hook. 
*/}
    <BrowserRouter>
      <NormalRoutes />
    </BrowserRouter>
    
    <BrowserRouter>
      <UseRoutesDataRoute />
    </BrowserRouter>

  </StrictMode>
  </>
)
