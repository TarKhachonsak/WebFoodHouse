import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Registration from './component/Registration.jsx'
import UserCreate from './component/UserCreate.jsx'
import Login from './component/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Registration />
  },
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/UserCreate',
    element: <UserCreate />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)