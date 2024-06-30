import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Page/Root';

import MainBody from './Page/MainBody';
import Joinin from './Component/Joinin';
import AddnNew from './Component/AddnNew';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<MainBody></MainBody>,
      },
        
          {
            path:'/join',
            element:<Joinin></Joinin>
          },
          
        
     
    ]
  },
  {
    path:'/add',
    element:<AddnNew></AddnNew>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
