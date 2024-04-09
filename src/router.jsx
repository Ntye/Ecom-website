import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
const DashboardPage = lazy(() => import('./views/Dashboard'));
// (
//   <Suspense fallback={<>Loading...</>}>
//     <DashboardPage />
//   </Suspense>
// ),

const router = createBrowserRouter ([
  {
    path: '/ ',
    element: (
      <Suspense>
        <DashboardPage/>
      </Suspense>
    )
  }
])

export default router