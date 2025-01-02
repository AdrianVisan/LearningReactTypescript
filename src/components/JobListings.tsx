import { useEffect, useState } from 'react';
import Spinner from './Spinner';
import JobListing from './JobListing';
import Job from '../api/types/Job';

type JobListingsParams = { showFull?: boolean };

function JobListings({ showFull = true }: JobListingsParams) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const apiUrl = `api/jobs${showFull ? '' : '?_limit=3'}`;
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log('Error fetchig data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [showFull]);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {showFull ? 'Browse Jobs' : 'Recent Jobs'}
        </h2>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job: Job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default JobListings;
