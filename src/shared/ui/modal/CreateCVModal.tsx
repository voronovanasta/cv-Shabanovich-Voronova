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
import { useTranslation } from 'react-i18next';

interface CreateCvModalProps {
  open: boolean;
  onClose: () => void;
  onSubmitCv: (data: ICreateCVFormData) => void;
}

export default function CreateCvModal({ open, onClose, onSubmitCv }: CreateCvModalProps) {
  const { t } = useTranslation();
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
        {t('create')} {t('cv.cv')}
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
            label={t('cv.name')}
            fullWidth
            {...register('name', { required: 'Name is required' })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />

          <TextField label={t('cv.education')} fullWidth {...register('education')} />

          <TextField
            label={t('cv.description')}
            fullWidth
            multiline
            rows={5}
            {...register('summary')}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} variant='outlined'>
            {t('cancel')}
          </Button>
          <Button type='submit' variant='contained'>
            {t('create')}
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
