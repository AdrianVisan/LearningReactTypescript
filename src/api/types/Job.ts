import JobSubmission from './JobSubmission';

type Job = JobSubmission & {
  // This should be an int but looks like a
  // limitation in the json-server library forcing us to use string
  id: string;
};

export default Job;
