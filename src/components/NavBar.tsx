import logo from '../assets/images/logo.png';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';

function NavBar() {
  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
            <Box
              component="img"
              maxHeight="2.5rem"
              src={logo}
              marginRight={2}
            />
            <Link
              variant="h5"
              component="a"
              href="/"
              fontWeight="bold"
              underline="none">
              React Jobs
            </Link>
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
