import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


import { Gimoji } from './Gimoji.jsx';
import { GimojiDetail } from './GimojiDetail.jsx';
import { HooksDemo } from './HooksDemo.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Gimoji />,
    // element: <HooksDemo />,
  },
  {
    path: "/gimoji/:gifId",
      element: <GimojiDetail />,
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
