/* eslint-disable react-refresh/only-export-components */
import { Navigate, createBrowserRouter } from "react-router-dom";
import Index from "./index/Index"
import { Suspense, lazy } from "react";
import Loading from "./index/Loading/Loading";


const LazyAcceuil = lazy(() => import('./users/client/pages/Acceuil'))
const LazyPanier = lazy(() => import('./users/client/pages/Panier'))
const LazyCompte = lazy(() => import('./users/client/pages/Compte'))
const LazySearch = lazy(() => import('./users/client/pages/Search'))
const LazyConnexion = lazy(() => import('./index/Connexion'))
const LazyLogin = lazy(() => import('./index/Login'))
const LazySignup = lazy(() => import('./index/Signup'))
const LazyClient = lazy(() => import('./users/client/components/ClientInterface'))
// const LazyLoading = lazy(() => import('./index/Loading/Loading'))
const LazyNotFound = lazy(() => import('./index/NotFound'))

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Index/>
  },
  {
    path: '/connexion',
    element: (
      <Suspense fallback={<><Loading/></>}>
        <LazyConnexion/>
      </Suspense>
    ),
    children:[
      {
        path: '/connexion',
        element: (
          <Suspense fallback={<><Loading/></>}>
            <LazyLogin/>
          </Suspense>
        )
      },
      {
        path: 'login',
        element: (
          <Suspense fallback={<><Loading/></>}>
            <Navigate to="/connexion"/>
          </Suspense>
        )
      },
      {
        path: 'signup',
        element: (
          <Suspense fallback={<><Loading/></>}>
            <LazySignup/>
          </Suspense>
        )
      }
    ]
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<><Loading/></>}>
        <LazyNotFound/>
      </Suspense>
    )
  },
  {
    path: '/client',
    element: (
      <Suspense fallback={<><Loading/></>}>
        <LazyClient/>
      </Suspense>
    ),
    children:[
      {
        path: 'acceuil',
        element: (
          <Suspense fallback={<><Loading/></>}>
            <LazyAcceuil/>
          </Suspense>
        )
      },
      {
        path: '/client',
        element: (
          <Suspense fallback={<><Loading/></>}>
            <Navigate to="acceuil"/>
          </Suspense>
    ),
      },
      {
        path: 'panier',
        element: (
          <Suspense fallback={<><Loading/></>}>
            <LazyPanier/>
          </Suspense>
        )
      },
      {
        path: 'compte',
        element: (
          <Suspense fallback={<><Loading/></>}>
            <LazyCompte/>
          </Suspense>
        )
      },
      {
        path: 'search',
        element: (
          <Suspense fallback={<><Loading/></>}>
            <LazySearch/>
          </Suspense>
        )
      }
    ]
  }
])

export default router