import logo from '../assets/images/logo.png';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function NavBar() {
  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
            <Icon sx={{ height: '2.5rem', width: '2.5rem' }}>
              <img src={logo} />
            </Icon>
            <Typography
              variant="h5"
              component="a"
              href="/"
              fontWeight="bold"
              marginLeft={2}>
              React Jobs
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button variant="contained" href="/" sx={{ marginRight: 2 }}>
              Home
            </Button>
            <Button variant="contained" href="/jobs" sx={{ marginRight: 2 }}>
              Jobs
            </Button>
            <Button variant="contained" href="/add-job">
              Add Job
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
