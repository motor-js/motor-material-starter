import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import DashboardApp from './pages/DashboardApp';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import Login from './pages/Login';
import NotFound from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // {
    //   path: '/dashboard',
    //   element: <DashboardLayout />,
    //   children: [
    //     { element: <Navigate to="/dashboard/app" replace /> },
    //     { path: 'app', element: <DashboardApp /> },
    //     { path: 'user', element: <PageOne /> }
    //   ]
    // },
    {
      path: '/login',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/login', element: <Login /> },
        { path: '*', element: <PageTwo /> },
        // { element: <Navigate to="/dashboard/app" replace /> },
        // { path: 'app', element: <DashboardApp /> },
        // { path: 'user', element: <PageOne /> },
      ],
    },
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: 'login', element: <PageTwo /> },
        { path: 'register', element: <PageThree /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/app" /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <PageOne /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
