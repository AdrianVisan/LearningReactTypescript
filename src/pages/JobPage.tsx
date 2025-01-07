import { useLoaderData, useNavigate } from 'react-router-dom';
import Job from '../api/types/Job';
import { useShowNotification } from '../hooks/useShowNotification';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ArrowBackSharp, LocationOnSharp } from '@mui/icons-material';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';

type JobPageParams = { deleteJob: (job: string) => void };

function JobPage(params: JobPageParams) {
  const { deleteJob } = params;
  const job = useLoaderData<Job>();
  const navigate = useNavigate();
  const showNotification = useShowNotification();

  const onDeleteClick = (jobId: string) => {
    const confirm = window.confirm('Are you sure?');

    if (!confirm) return;

    deleteJob(jobId);

    showNotification.warn('Job Deleted');

    navigate('/jobs');
  };

  return (
    <>
      <Box margin={'auto'} maxWidth={'xl'} paddingY={2}>
        <Button variant="text" href="/jobs">
          <ArrowBackSharp sx={{ marginRight: 1 }} /> Back to Job Listings
        </Button>
      </Box>

      <Box bgcolor="secondary.light">
        <Box margin="auto" maxWidth={'xl'} paddingY={4}>
          <Grid container spacing={3}>
            <Grid size={8}>
              <Box
                textAlign={{ xs: 'center', md: 'left' }}
                bgcolor={'common.white'}
                padding={3}
                borderRadius={2}>
                <Typography marginBottom={1} color="gray">
                  {job.type}
                </Typography>
                <Typography variant="h4" fontWeight={'bold'} marginBottom={2}>
                  {job.title}
                </Typography>
                <Box display="flex" alignItems="center">
                  <LocationOnSharp color="warning" />
                  <Typography color="warning">{job.location}</Typography>
                </Box>
              </Box>

              <Box
                textAlign={{ xs: 'center', md: 'left' }}
                bgcolor="common.white"
                padding={3}
                borderRadius={2}
                marginTop={3}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  marginBottom={3}
                  color="primary">
                  Job Description
                </Typography>

                <Typography marginBottom={2}>{job.description}</Typography>

                <Typography
                  variant="h6"
                  fontWeight="bold"
                  marginBottom={3}
                  color="primary">
                  Salary
                </Typography>

                <Typography marginBottom={2}>{job.salary} / Year</Typography>
              </Box>
            </Grid>

            <Grid size={4}>
              <Box bgcolor="common.white" padding={3} borderRadius={2}>
                <Typography variant="h6" fontWeight={'bold'} marginBottom={2}>
                  Company Info
                </Typography>

                <Typography variant="h5" marginBottom={2}>
                  {job.company.name}
                </Typography>

                <Typography marginY={2}>{job.company.description}</Typography>

                <Divider sx={{ marginY: 2 }} />

                <Typography variant="h6">Contact Email:</Typography>

                <Typography
                  fontWeight="bold"
                  padding={1}
                  marginY={1}
                  borderRadius={2}
                  bgcolor="secondary.light">
                  {job.company.contactEmail}
                </Typography>

                <Typography variant="h6">Contact Phone:</Typography>

                <Typography
                  fontWeight="bold"
                  padding={1}
                  marginY={1}
                  borderRadius={2}
                  bgcolor="secondary.light">
                  {job.company.contactPhone}
                </Typography>
              </Box>

              <Box
                bgcolor="common.white"
                padding={3}
                borderRadius={2}
                marginTop={3}>
                <Typography variant="h6" fontWeight={'bold'} marginBottom={2}>
                  Manage Job
                </Typography>

                <Button
                  variant="contained"
                  fullWidth
                  href={`/jobs/edit/${job.id}`}
                  sx={{ borderRadius: 2, fontWeight: 'bold', padding: 1 }}>
                  Edit Job
                </Button>

                <Button
                  variant="contained"
                  fullWidth
                  color="error"
                  sx={{
                    borderRadius: 2,
                    fontWeight: 'bold',
                    marginTop: 2,
                    padding: 1,
                  }}
                  onClick={() => {
                    onDeleteClick(job.id);
                  }}>
                  Delete Job
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default JobPage;
