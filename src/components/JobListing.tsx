import { useState } from 'react';

import Job from '../api/types/Job';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Place from '@mui/icons-material/Place';

function JobListing(input: { job: Job }) {
  const [showFullDescription, setShowFullDescription] =
    useState<boolean>(false);
  const { job } = input;
  let description = job.description;
  if (!showFullDescription) {
    description = description.substring(0, 90) + '...';
  }
  const jobLocationPath = `/jobs/${job.id}`;
  const toggleDescription = () =>
    setShowFullDescription((previousState) => !previousState);
  return (
    <Card>
      <CardContent>
        <Typography marginTop={1} marginBottom={1}>
          {job.type}
        </Typography>
        <Typography variant="h6" fontWeight="bold">
          {job.title}
        </Typography>
        <Typography marginTop={3} marginBottom={2}>
          {description}
        </Typography>
        <Button variant="outlined" onClick={toggleDescription}>
          {showFullDescription ? 'Less' : 'More'}
        </Button>
        <Typography marginTop={2} marginBottom={2} color="primary.main">
          {job.salary}
        </Typography>
        <Box display="flex">
          <Box
            flexGrow={1}
            alignItems="center"
            display="flex"
            flexDirection="row">
            <Place color="warning" />
            <Typography color="warning">{job.location}</Typography>
          </Box>
          <Button href={jobLocationPath} variant="contained">
            Read More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default JobListing;
