import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function ViewAllJobs() {
  return (
    <Box paddingTop={4} display="flex">
      <Box
        maxWidth="xl"
        margin="auto"
        color="primary.contrastText"
        justifyItems="center">
        <Button
          href="/jobs"
          variant="contained"
          color="secondary"
          sx={{
            padding: 2,
            paddingLeft: '10rem',
            paddingRight: '10rem',
            borderRadius: 2,
          }}>
          View All Jobs
        </Button>
      </Box>
    </Box>
  );
}

export default ViewAllJobs;
