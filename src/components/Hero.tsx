import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type HeroProps = { title?: string; subtitle?: string };

function Hero({
  title = 'Become a React Dev',
  subtitle = 'Find the React Job that fits your skill set',
}: HeroProps) {
  return (
    <Box
      paddingTop={8}
      paddingBottom={8}
      marginBottom={4}
      sx={{ backgroundColor: 'primary.main' }}>
      <Box
        maxWidth="xl"
        margin="auto"
        color="primary.contrastText"
        justifyItems="center">
        <Typography variant="h1" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant="h5">{subtitle}</Typography>
      </Box>
    </Box>
  );
}

export default Hero;
