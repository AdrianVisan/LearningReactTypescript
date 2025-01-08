import { useNavigate } from 'react-router-dom';
import JobType from '../api/types/JobType';
import JobSubmission from '../api/types/JobSubmission';
import { useShowNotification } from '../hooks/useShowNotification';
import JobForm from '../components/JobForm';

type AddJobParams = { addJobSubmit: (job: JobSubmission) => void };

function AddJobPage(params: AddJobParams) {
  const { addJobSubmit } = params;

  const emptyJob: JobSubmission = {
    title: '',
    type: JobType.FullTime,
    description: '',
    salary: 'Under $50K',
    location: '',
    company: { name: '', description: '', contactEmail: '', contactPhone: '' },
  };

  const showNotification = useShowNotification();

  const navigate = useNavigate();

  const createNewJob = (newJob: JobSubmission) => {
    addJobSubmit(newJob);

    showNotification.success('Job Added');

    navigate('/jobs');
  };

  return (
    <JobForm
      actionName="Add Job"
      startingState={emptyJob}
      onFormSubmit={createNewJob}
    />
  );
}

export default AddJobPage;
