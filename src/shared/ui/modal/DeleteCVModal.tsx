import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  IconButton,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';

interface DeleteCvDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  cvTitle: string;
}

const DeleteCvDialog: React.FC<DeleteCvDialogProps> = ({ open, onClose, onConfirm, cvTitle }) => {
  const { t } = useTranslation();
  return (
    <Dialog open={open} onClose={onClose} maxWidth='sm' fullWidth>
      <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogTitle>
        {t('delete')} {t('cv.cv')}
      </DialogTitle>
      <DialogContent>
        <Typography variant='body1' sx={{ mt: 1 }}>
          {t('cv.sure')} <strong>{cvTitle}</strong>?
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
        <Button variant='outlined' onClick={onClose} sx={{ minWidth: 120, borderRadius: '30px' }}>
          {t('cancel')}
        </Button>
        <Button
          variant='contained'
          color='error'
          onClick={onConfirm}
          sx={{ minWidth: 120, borderRadius: '30px' }}
        >
          {t('confirm')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteCvDialog;
