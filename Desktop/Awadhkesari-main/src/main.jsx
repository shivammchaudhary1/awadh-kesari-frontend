import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Layout } from './Components/index.js';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '',
        element:<App/>,
        children: [
          {
            path: '/',
            element: <Home/>
          },

        ]
      },
    ],
  },
  {
    path: "*",
    element: <p>Page not found</p>
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
