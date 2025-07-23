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

interface DeleteCvDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  cvTitle: string;
}

const DeleteCvDialog: React.FC<DeleteCvDialogProps> = ({ open, onClose, onConfirm, cvTitle }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth='sm' fullWidth>
      <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogTitle>Delete CV</DialogTitle>
      <DialogContent>
        <Typography variant='body1' sx={{ mt: 1 }}>
          Are you sure you want to delete CV <strong>{cvTitle}</strong>?
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
        <Button variant='outlined' onClick={onClose} sx={{ minWidth: 120, borderRadius: '30px' }}>
          Cancel
        </Button>
        <Button
          variant='contained'
          color='error'
          onClick={onConfirm}
          sx={{ minWidth: 120, borderRadius: '30px' }}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteCvDialog;
