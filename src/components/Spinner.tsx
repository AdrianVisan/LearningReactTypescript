import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

function Spinner() {
  return (
    <Box sx={{ justifyContent: 'center' }} display="flex" padding="3rem">
      <CircularProgress size="15rem" />
    </Box>
  );
}

export default Spinner;
