import Card from './Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function HomeCards() {
  return (
    <Box paddingTop={2} paddingBottom={2} maxWidth="xl" margin="auto">
      <Grid container spacing={2}>
        <Grid size="grow">
          <Card>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              For Developers
            </Typography>
            <Typography marginTop={1} marginBottom={2}>
              Browse our React jobs and start your career today
            </Typography>
            <Button href="/jobs" variant="contained">
              Browse Jobs
            </Button>
          </Card>
        </Grid>
        <Grid size="grow">
          <Card highlighted={true}>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              For Employers
            </Typography>
            <Typography marginTop={1} marginBottom={2}>
              List your job to find the perfect developer for the role
            </Typography>
            <Button href="/jobs" variant="contained">
              Add Job
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomeCards;
