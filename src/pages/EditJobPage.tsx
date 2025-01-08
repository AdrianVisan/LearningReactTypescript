import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Job from '../api/types/Job';
import { useShowNotification } from '../hooks/useShowNotification';
import JobForm from '../components/JobForm';
import JobSubmission from '../api/types/JobSubmission';

type EditJobParams = { updateJobSubmit: (job: Job) => void };

function EditJobPage(params: EditJobParams) {
  const { updateJobSubmit } = params;
  const { id } = useParams();
  const job = useLoaderData<Job>();

  const showNotification = useShowNotification();

  const navigate = useNavigate();

  const updateJob = (newJob: JobSubmission) => {
    const jobNotFound = id === undefined || job == null;
    if (jobNotFound) {
      return navigate(`/not-found`);
    }
    const updatedJob = { ...newJob, id };

    updateJobSubmit(updatedJob);

    showNotification.success('Job Added');

    navigate('/jobs');
  };

  return (
    <JobForm
      actionName="Edit Job"
      startingState={job}
      onFormSubmit={updateJob}
    />
  );
}

export default EditJobPage;
