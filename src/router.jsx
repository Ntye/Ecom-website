/* eslint-disable react-refresh/only-export-components */
import { Navigate, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Spinner from 'react-bootstrap/Spinner';

import Index from "./index/Index"
// import Loading from "./index/Loading/Loading";


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
      <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
        <LazyConnexion/>
      </Suspense>
    ),
    children:[
      {
        path: '/connexion',
        element: (
          <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
            <LazyLogin/>
          </Suspense>
        )
      },
      {
        path: 'login',
        element: (
          <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
            <Navigate to="/connexion"/>
          </Suspense>
        )
      },
      {
        path: 'signup',
        element: (
          <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
            <LazySignup/>
          </Suspense>
        )
      }
    ]
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
        <LazyNotFound/>
      </Suspense>
    )
  },
  {
    path: '/client',
    element: (
      <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
        <LazyClient/>
      </Suspense>
    ),
    children:[
      {
        path: 'acceuil',
        element: (
          <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
            <LazyAcceuil/>
          </Suspense>
        )
      },
      {
        path: '/client',
        element: (
          <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
            <Navigate to="acceuil"/>
          </Suspense>
    ),
      },
      {
        path: 'panier',
        element: (
          <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
            <LazyPanier/>
          </Suspense>
        )
      },
      {
        path: 'compte',
        element: (
          <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
            <LazyCompte/>
          </Suspense>
        )
      },
      {
        path: 'search',
        element: (
          <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
            <LazySearch/>
          </Suspense>
        )
      }
    ]
  }
])

export default router