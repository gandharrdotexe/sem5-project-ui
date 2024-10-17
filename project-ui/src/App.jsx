import React from 'react';
import Home from './components/home'
import Get_Started from './components/get-started';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Home/>
    },
    {
      path:'/get-started',
      element: <Get_Started/>
    }
  ]) 
  return (
    
    <div>
      <Home/>
      <RouterProvider router={router}/>
    </div>
  );
}

 export default App;
