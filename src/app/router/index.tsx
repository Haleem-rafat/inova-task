import { Navigate, createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '@constants/routes';
import App from '@/App';
import ErrorBoundary from '@/shared/Layouts/ErrorBoundary';
import Home from '@/modules/Home/Home';
import Courses from '@/modules/Courses/Courses';
import CoursesDetails from '@/modules/Courses/_view/CoursesDetails';

export const router = createBrowserRouter([
  {
    path: ROUTES.MAIN,

    element: <App />,
    errorElement: <ErrorBoundary isRoot />,
    children: [
      { index: true, element: <Navigate to={ROUTES.HOME} /> },
      { path: ROUTES.HOME, element: <Home /> },
      { path: ROUTES.COURSE, element: <Courses /> },
      { path: ROUTES.COURSEDETAILS, element: <CoursesDetails /> },
    ],
  },
]);
