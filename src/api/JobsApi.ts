import { LoaderFunctionArgs } from 'react-router-dom';
import Job from './types/Job';
import JobSubmission from './types/JobSubmission';

// Add New Job
const addJob = async (newJob: JobSubmission) => {
  await fetch('/api/jobs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newJob),
  });
  return;
};

// Delete Job
const deleteJob = async (id: string) => {
  await fetch(`/api/jobs/${id}`, {
    method: 'DELETE',
  });
  return;
};

// Update Job
const updateJob = async (updatedJob: Job) => {
  await fetch(`/api/jobs/${updatedJob.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedJob),
  });
  return;
};

// Load Job

const loadJob = async (args: LoaderFunctionArgs): Promise<Job | null> => {
  const id = args.params.id;
  if (id == null) {
    return null;
  }

  const rest = await fetch(`/api/jobs/${id}`);
  const data = await rest.json();
  return data;
};

export { addJob, deleteJob, updateJob, loadJob };
