import React from 'react';
import Home from './components/home';
import Get_Started from './components/get-started';
import FetchHTML from './components/fetchHtml';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/get-started',
      element: <Get_Started />
    },
    {
      path: '/fetch',
      element: <FetchHTML />
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
