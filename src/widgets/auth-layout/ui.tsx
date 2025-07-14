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
        backgroundColor: '#1e1e1e',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <Container
        maxWidth='xs'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'center',
        }}
      >
        <Tabs
          value={currentTab}
          // onChange={(_, newValue) => setTab(newValue)}
          textColor='secondary'
          indicatorColor='secondary'
          centered
          sx={{
            color: '#fff',
            mb: 3,
            '& .MuiTabs-indicator': { backgroundColor: '#d32f2f' },
            '& .Mui-selected': { color: '#d32f2f' },
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
          <Container maxWidth='xs'>
            <Outlet />
          </Container>
        </Box>
      </Container>
    </Box>
  );
}
