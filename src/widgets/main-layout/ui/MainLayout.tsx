import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../../shared/ui/sidebar/Sidebar';

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ flex: '0 0 20%', minWidth: 200, maxWidth: 280 }}>
        <Sidebar />
      </Box>
      <Box sx={{ flex: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
