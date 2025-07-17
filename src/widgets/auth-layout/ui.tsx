import { Box, Container, Tab, Tabs } from '@mui/material';
import { Link, Outlet, useLocation } from 'react-router';

export default function AuthLayout() {
  const location = useLocation();
  const currentTab = location.pathname.includes('/register') ? 1 : 0;
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'center',
        }}
      >
        <Tabs
          value={currentTab}
          centered
          sx={{
            mb: 3,
          }}
        >
          <Tab label='LOG IN' component={Link} to='/auth/login' />
          <Tab label='SIGN UP' component={Link} to='/auth/register' />
        </Tabs>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Container maxWidth='sm'>
            <Outlet />
          </Container>
        </Box>
      </Container>
    </Box>
  );
}
