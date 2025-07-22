import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from 'react-hook-form';
import type ICreateCVFormData from './types';

interface CreateCvModalProps {
  open: boolean;
  onClose: () => void;
  onSubmitCv: (data: ICreateCVFormData) => void;
}

export default function CreateCvModal({ open, onClose, onSubmitCv }: CreateCvModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICreateCVFormData>();

  const onSubmit = (data: ICreateCVFormData) => {
    onSubmitCv(data);
    reset();
    onClose();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'>
      <DialogTitle>
        Create CV
        <IconButton
          aria-label='close'
          onClick={handleClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <Box component='form' onSubmit={handleSubmit(onSubmit)}>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label='Name'
            fullWidth
            {...register('name', { required: 'Name is required' })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />

          <TextField label='Education' fullWidth {...register('education')} />

          <TextField label='Description' fullWidth multiline rows={5} {...register('summary')} />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} variant='outlined'>
            Cancel
          </Button>
          <Button type='submit' variant='contained'>
            Create
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
