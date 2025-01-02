import { Box, Button, Typography } from '@mui/material';
import { WarningAmberRounded } from '@mui/icons-material';

function NotFoundPage() {
  return (
    <Box component="section" sx={{ justifyItems: 'center' }}>
      <WarningAmberRounded color="warning" sx={{ fontSize: 200 }} />
      <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
        404 Not Found
      </Typography>
      <Typography variant="h6">This page does not exist</Typography>
      <Button href="/" variant="contained">
        Go Back
      </Button>
    </Box>
  );
}

export default NotFoundPage;
