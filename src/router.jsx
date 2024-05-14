/* eslint-disable react-refresh/only-export-components */
import { Navigate, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Spinner from 'react-bootstrap/Spinner';

import Index from "./index/Index"

//Magasinier Interface
const LazyMagasinier = lazy(() => import('./users/magasinier/components/MagasinierInterface.jsx'))
const LazyMLanding =lazy(() => import('./users/magasinier/pages/Landing.jsx'))
const LazyAdd =lazy(() => import('./users/magasinier/pages/Landing.jsx'))
const LazyView =lazy(() => import('./users/magasinier/pages/Landing.jsx'))
const LazyModify =lazy(() => import('./users/magasinier/pages/Landing.jsx'))

// Employee Interface pages
const LazyLocation = lazy(() => import('./users/client/pages/Location.jsx'))

// Client Interface pages
const LazyClient = lazy(() => import('./users/client/components/ClientInterface'))
const LazyLanding = lazy(() => import('./users/client/pages/Landing'))
const LazyPanier = lazy(() => import('./users/client/pages/Cart'))
const LazyCompte = lazy(() => import('./users/client/pages/Profile'))
const LazySearch = lazy(() => import('./users/client/pages/Search'))

// Connexion pages
const LazyConnexion = lazy(() => import('./index/Connexion'))
const LazyLogin = lazy(() => import('./index/Login'))
const LazyLoginEmp = lazy(() => import('./index/LoginEmp'))
const LazySignup = lazy(() => import('./index/Signup'))
const LazySignupEmp = lazy(() => import('./index/SignupEmp'))

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
        path: 'login-employee',
        element: (
          <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
            <LazyLoginEmp/>
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
      },
      {
        path: 'signup-employee',
        element: (
          <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
            <LazySignupEmp/>
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
        path: '/client',
        element: (
          <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
            <LazyLanding/>
          </Suspense>
        )
      },
      {
        path: 'acceuil',
        element: (
          <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
            <Navigate to="/client"/>
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
        path: 'location',
        element: (
          <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
            <LazyLocation/>
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
  },
  {
    path: '/magasinier',
    element: (
      <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
        <LazyMagasinier/>
      </Suspense>
    ),
    children:[
      {
        path: '/magasinier',
        element: (
          <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
            <LazyLanding/>
          </Suspense>
        )
      },
      {
        path: 'acceuil',
        element: (
          <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
            <Navigate to="/magasinier"/>
          </Suspense>
        ),
      },
      {
        path: 'location',
        element: (
          <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
            <LazyLocation/>
          </Suspense>
        )
      }
    ]
  }
])

export default router