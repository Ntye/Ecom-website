/* eslint-disable react-refresh/only-export-components */
import { Navigate, createBrowserRouter } from "react-router-dom";
import Index from "./index/Index"
import { Suspense, lazy } from "react";

const LazyConnex = lazy(() => import('./index/Connexion'))
const LazyLogin = lazy(() => import('./index/Login'))
const LazySignup = lazy(() => import('./index/Signup'))
const LazyClient = lazy(() => import('./users/client/components/ClientInterface'))

const LazyNotFound = lazy(() => import('./index/NotFound'))

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
  {
    path: '/client',
    element: (
      <Suspense fallback={<>Loading...</>}>
        <LazyClient/>
      </Suspense>
    )
  }
])

export default router