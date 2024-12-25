import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import JobsPage from './pages/JobsPage';
import JobPage from './pages/JobPage';
import { deleteJob, loadJob } from './api/JobsApi';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />

        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={loadJob}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
