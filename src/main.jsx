import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import {AuthProvider} from "./users/client/components/Auth.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
