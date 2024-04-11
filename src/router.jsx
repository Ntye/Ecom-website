/* eslint-disable react-refresh/only-export-components */
import { Navigate, createBrowserRouter } from "react-router-dom";
import Index from "./index/Index"
import { Suspense, lazy } from "react";

const LazyNotFound = lazy(() => import('./index/NotFound'))
const LazyConnex = lazy(() => import('./index/Connexion'))
// const LazyHome = lazy(() => import('./users/client/pages/Home'))
// const LazyClientInterface = lazy(() => import('./users/client/components/ClientInterface'))
const LazySignup = lazy(() => import('./index/Signup'))
const LazyLogin = lazy(() => import('./index/Login'))
// const LazySign = lazy(() => import('./index/Sign'))
// const LazyYo = lazy(() => import('./index/Yo'))
const router = createBrowserRouter ([
  {
    path: '/',
    element: <Index/>
  },
  {
    path: '/connexion',
    element: (
      <Suspense fallback={<>Loading...</>}>
        <LazyConnex/>
      </Suspense>
    ),
    children:[
      {
        path: '/connexion',
        element: (
          <Suspense fallback={<>Loading...</>}>
            <LazyLogin/>
          </Suspense>
        )
      },
      {
        path: 'login',
        element: (
          <Suspense fallback={<>Loading...</>}>
            <Navigate to="/connexion"/>
          </Suspense>
        )
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
    path: '*',
    element: <LazyNotFound/>
  },
])

export default router