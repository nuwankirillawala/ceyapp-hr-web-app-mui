import { lazy, Suspense } from 'react';
import { Outlet, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const PopUpPage = lazy(() => import('src/pages/popups'));
export const CreateUserPage = lazy(() => import('src/pages/createuser'));
export const PopupReadersPage = lazy(() => import('src/pages/popup-readers'));
export const CreatePopupView = lazy(() => import('src/pages/createpopup'));
export const AccessDeniedView = lazy(() => import('src/pages/access-denied'));
export const DepartmentPage = lazy(() => import('src/pages/department'));
export const CreateDepartmentPage = lazy(()=>import('src/pages/createdepartment'));
export const UserRolePage = lazy(() => import('src/pages/userrole'));
export const CreateUserRolePage = lazy(()=>import('src/pages/createuserrole'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '',
      element: <LoginPage />,
    },
    {
      path: 'dashboard',
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'employees', element: <UserPage /> },
        { path: 'departments', element: <DepartmentPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'popups', element: <PopUpPage /> },
        { path: 'create-employee', element: <CreateUserPage /> },
        { path: 'create-department', element: <CreateDepartmentPage/>},
        { path: 'popup-readers/:id', element: <PopupReadersPage /> },
        { path: 'create-popup', element: <CreatePopupView /> },
        { path: 'userrole', element: <UserRolePage /> },
        { path: 'create-userrole', element: <CreateUserRolePage/>},
      ],
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: 'access-denied',
      element: <AccessDeniedView />,
    },
    // {
    //   path: '*',
    //   element: <Navigate to="/access-denied" replace />,
    // },
  ]);

  return routes;
}
