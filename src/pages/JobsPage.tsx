import Box from '@mui/material/Box';
import JobListings from '../components/JobListings';

function JobsPage() {
  return (
    <Box sx={{ backgroundColor: 'secondary.light' }}>
      <JobListings />
    </Box>
  );
}

export default JobsPage;
