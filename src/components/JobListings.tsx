import { useEffect, useState } from 'react';
import Spinner from './Spinner';
import JobListing from './JobListing';
import Job from '../api/types/Job';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';

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
    <Box justifyItems="center" padding={2}>
      <Typography variant="h4" color="primary" fontWeight="bold" margin={2}>
        {showFull ? 'Browse Jobs' : 'Recent Jobs'}
      </Typography>
      {loading ? (
        <Spinner />
      ) : (
        <Grid container maxWidth="xl" spacing={3}>
          {jobs.map((job: Job) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <JobListing key={job.id} job={job} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default JobListings;
