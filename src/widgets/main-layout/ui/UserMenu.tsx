import {
  Popover,
  MenuList,
  MenuItem,
  Divider,
  // ...
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useLogout } from '../../../features/auth/lib/logout';

interface UserMenuProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  handlePopoverClose: () => void;
}

export default function UserMenu({ anchorEl, open, handlePopoverClose }: UserMenuProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const logout = useLogout();
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handlePopoverClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      disableRestoreFocus
      sx={{
        zIndex: 1300, // Ensure it appears above other elements
      }}
    >
      <MenuList dense>
        <MenuItem
          onClick={() => {
            navigate('/profile');
            handlePopoverClose();
          }}
        >
          {t('menu.profile')}
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate('/settings');
            handlePopoverClose();
          }}
        >
          {t('menu.settings')}
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            logout();
            handlePopoverClose();
          }}
        >
          {t('menu.logout')}
        </MenuItem>
      </MenuList>
    </Popover>
  );
}
