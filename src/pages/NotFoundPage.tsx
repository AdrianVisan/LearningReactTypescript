import { WarningAmberRounded } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function NotFoundPage() {
  return (
    <Box sx={{ justifyItems: 'center' }}>
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
