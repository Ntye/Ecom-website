/* eslint-disable react-refresh/only-export-components */
import { Navigate, createBrowserRouter } from "react-router-dom";
import Index from "./index/Index"
import Connexion from "./index/Connexion";
import Login from "./index/Login";
import { Suspense, lazy } from "react";

const LazyHome = lazy(() => import('./users/client/pages/Home'))
const LazyClientInterface = lazy(() => import('./users/client/components/ClientInterface'))
const LazySignup = lazy(() => import('./index/Signup'))
// import Signup from "./index/Signup";
// const DashboardPage = lazy(() => import('./views/Dashboard'));
// (
//   <Suspense fallback={<>Loading...</>}>
//     <DashboardPage />
//   </Suspense>
// ),

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Index/>
  },
  {
    path: 'connexion',
    element: <Connexion/>,
    children: [
      {
        path: 'connexion',
        element: <Login/>
      },
      {
        path: 'login',
        element: <Navigate to="/connexion"/>
      },
      {
        path: 'signup',
        element: (
          <Suspense fallback={<>Loading...</>}>
            <LazySignup/>
          </Suspense>
        )
      }
    ]
  },
  {
    path: 'client',
    element: <LazyClientInterface/>,
    children:[
      {
        path: 'client',
        element: <LazyHome/>
      },
      {
        path: 'home',
        element: (
          <Suspense fallback={<>Loading...</>}>
            <Navigate to="client"/>
          </Suspense>
        )
      }
    ]
  }
])

export default router