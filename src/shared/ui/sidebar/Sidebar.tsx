import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  ListItem,
} from '@mui/material';
import { PeopleAlt, TrendingUp, Translate, Description, ChevronLeft } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { useState } from 'react';
import UserMenu from '../../../widgets/main-layout/ui/UserMenu';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { label: t('sidebar.employees'), icon: <PeopleAlt />, path: '/employees' },
    { label: t('sidebar.skills'), icon: <TrendingUp />, path: '/skills' },
    { label: t('sidebar.languages'), icon: <Translate />, path: '/languages' },
    { label: t('sidebar.cvs'), icon: <Description />, path: '/cvs' },
  ];

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        color: 'grey.100',
        flex: { xs: '0 0 60px', sm: '0 0 15%', md: '0 0 20%' },
        minWidth: { xs: '60px', sm: '150px' },
        maxWidth: '250px',
        p: 1,
        boxSizing: 'border-box',
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                selected={location.pathname.startsWith(item.path)}
                onClick={() => navigate(item.path)}
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  px: 2,
                  '&.Mui-selected': {
                    bgcolor: 'grey.800',
                    '&:hover': { bgcolor: 'grey.700' },
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'inherit', minWidth: 36 }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Box
          onClick={handlePopoverOpen}
          sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 1 }}
        >
          <Avatar sx={{ bgcolor: 'error.main', width: 32, height: 32 }}>R</Avatar>
          <Typography variant='body2'>Rostislav Harlanov</Typography>
        </Box>
        {open && (
          <UserMenu anchorEl={anchorEl} open={open} handlePopoverClose={handlePopoverClose} />
        )}
        <Box sx={{ p: 2 }}>
          <ChevronLeft fontSize='small' />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
