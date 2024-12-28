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
import { addJob, deleteJob, loadJob, updateJob } from './api/JobsApi';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

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
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path="/jobs/edit/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={loadJob}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
