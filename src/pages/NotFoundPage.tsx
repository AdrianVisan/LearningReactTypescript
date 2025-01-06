import WarningAmberRounded from '@mui/icons-material/WarningAmberRounded';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { boldText, justifyItems } from '../styles/CommonStyles';
import { getFontSizeStyle } from '../styles/FastStyles';

function NotFoundPage() {
  const textSize200 = getFontSizeStyle(200);

  return (
    <Box sx={justifyItems}>
      <WarningAmberRounded color="warning" sx={textSize200} />
      <Typography variant="h2" sx={boldText}>
        404 Not Found
      </Typography>
      <Typography variant="h6">This page does not exist</Typography>
      <Button href="/" variant="contained" sx={boldText}>
        Go Back
      </Button>
    </Box>
  );
}

export default NotFoundPage;
