import { createBrowserRouter, Navigate } from 'react-router-dom';
import PrivateRoute from '../../shared/routing/PrivateRoute';
import MainLayout from '../../shared/ui/MainLayout';
import { Example } from '../../example';
import AuthLayout from '../../widgets/auth-tabs/ui';
import LoginPage from '../../pages/auth/login';

//TODO
// Lazy загрузка страниц
// const LoginPage = lazy(() => import(''));
// const RegisterPage = lazy(() => import(''));

// const UsersPage = lazy(() => import(''));
// const UserProfilePage = lazy(() => import('')); ...

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/auth/login' replace />,
  },
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: /* RegisterPage */ null },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: 'users',
        element: <MainLayout />,
        children: [
          { index: true, element: /* UsersPage */ <Example /> },
          { path: ':userId/profile', element: /* UserProfilePage */ null },
          { path: ':userId/skills', element: /* UserSkillsPage */ null },
          { path: ':userId/languages', element: /* UserLanguagesPage */ null },
          { path: ':userId/cvs', element: /* UserCVsPage */ null },
        ],
      },
      {
        path: 'cvs',
        element: <MainLayout />,
        children: [
          { index: true, element: /* CVsPage */ null },
          { path: ':cvId/details', element: /* CVDetailsPage */ null },
          { path: ':cvId/skills', element: /* CVSkillsPage */ null },
          { path: ':id/projects', element: /* CVProjectPage */ null },
          { path: ':cvId/preview', element: /* CVPreviewPage */ null },
        ],
      },
      {
        path: 'projects',
        element: <MainLayout />,
        children: [
          { index: true, element: /* ProjectsPage */ null },
          { path: ':projectId', element: /* ProjectDetailsPage */ null },
        ],
      },
      {
        path: 'departments',
        element: <MainLayout />,
        children: [{ index: true, element: /* DepartmentPage */ null }],
      },
      {
        path: 'positions',
        element: <MainLayout />,
        children: [{ index: true, element: /* PositionsPage */ null }],
      },
      {
        path: 'skills',
        element: <MainLayout />,
        children: [{ index: true, element: /* SkillsPage */ null }],
      },
      {
        path: 'languages',
        element: <MainLayout />,
        children: [{ index: true, element: /* LanguagesPage */ null }],
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to='/auth/login' replace />,
  },
]);
