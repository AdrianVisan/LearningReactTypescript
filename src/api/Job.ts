import Company from './Company';
import JobType from './JobType';

type Job = {
  id: number;
  title: string;
  type: JobType;
  description: string;
  location: string;
  salary: string;
  company: Company;
};

export default Job;
