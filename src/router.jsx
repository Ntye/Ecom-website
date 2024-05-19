/* eslint-disable react-refresh/only-export-components */
import { Navigate, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Spinner from 'react-bootstrap/Spinner';

import Index from "./index/Index"

//Magasinier Interface
const LazyMagasinier = lazy(() => import('./users/warehouse/components/MagasinierInterface'))
const LazyMLanding =lazy(() => import('./users/warehouse//pages/Landing'))
const LazyAdd =lazy(() => import('./users/warehouse//pages/AddProduct'))
const LazyView =lazy(() => import('./users/warehouse//pages/ViewProduct'))
const LazyModify =lazy(() => import('./users/warehouse/pages/ModifyProduct'))

// Employee Interface pages
const LazyLocation = lazy(() => import('./users/client/pages/Location'))

// Client Interface pages
const LazyClient = lazy(() => import('./users/client/components/ClientInterface'))
const LazyLanding = lazy(() => import('./users/client/pages/Landing'))
const LazyPanier = lazy(() => import('./users/client/pages/Cart'))
const LazyCategory = lazy(() => import('./users/client/pages/Category'))
const LazySingleProduct = lazy(() => import('./users/client/pages/SingleProduct'))
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
            <Navigate to="acceuil"/>
          </Suspense>
        )
      },
      {
        path: 'acceuil',
        element: (
          <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
            <LazyLanding/>
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
        path: 'product/:param',
        element: (
          <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
            <LazySingleProduct/>
          </Suspense>
        )
      },
      {
        path: 'categorie/:param',
        element: (
          <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
            <LazyCategory/>
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
            <LazyMLanding/>
          </Suspense>
        )
      },
      {
        path: 'home',
        element: (
          <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
            <Navigate to="/magasinier"/>
          </Suspense>
        ),
      },
      {
        path: 'add',
        element: (
          <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
            <LazyAdd/>
          </Suspense>
        )
      },
      {
        path: 'view',
        element: (
          <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
            <LazyView/>
          </Suspense>
        )
      },
      {
        path: 'modify',
        element: (
          <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
            <LazyModify/>
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
            <LazyMLanding/>
          </Suspense>
        )
      },
      {
        path: 'home',
        element: (
          <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
            <Navigate to="/magasinier"/>
          </Suspense>
        ),
      }
    ]
  },
  {
    path: '/caissiere',
    element: (
      <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
        <LazyMagasinier/>
      </Suspense>
    ),
    children:[
      {
        path: '/caissiere',
        element: (
          <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
            <LazyMLanding/>
          </Suspense>
        )
      },
      {
        path: 'home',
        element: (
          <Suspense fallback={<><h2>Loading</h2> <br/> <Spinner animation="border" variant="secondary" /></>}>
            <Navigate to="/magasinier"/>
          </Suspense>
        ),
      }
    ]
  }
])

export default router