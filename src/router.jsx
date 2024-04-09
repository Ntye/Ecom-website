// import { Suspense } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Index from "./index/Index"
import Connexion from "./index/Connexion";
import Login from "./index/Login";
import Signup from "./index/Signup";
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
    path: '/connexion',
    element: <Connexion/>,
    children: [
      {
        path: '/connexion',
        element: <Login/>
      },
      {
        path: 'login',
        element: <Navigate to="/connexion"/>
      },
      {
        path: 'signup',
        element: <Signup/>
      }
    ]
  }
  // {
  //   path: '/ ',
  //   element: (
  //     <Suspense>
  //       <DashboardPage/>
  //     </Suspense>
  //   )
  // }
])

export default router