import Company from './Company';
import JobType from './JobType';

type JobSubmission = {
  title: string;
  type: JobType;
  description: string;
  location: string;
  salary: string;
  company: Company;
};

export default JobSubmission;
