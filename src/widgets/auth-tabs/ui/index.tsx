import { useState } from 'react';
import { Box, Container, Tab, Tabs } from '@mui/material';
import { Outlet } from 'react-router';

export default function AuthLayout() {
  const [tab, setTab] = useState(0);
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#1e1e1e',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth='xs'>
        <Tabs
          value={tab}
          onChange={(_, newValue) => setTab(newValue)}
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
          <Tab label='LOG IN' />
          <Tab label='SIGN UP' />
        </Tabs>
        <Outlet />
      </Container>
    </Box>
  );
}
