import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface CreateCVModalProps {
  open: boolean;
  onClose: () => void;
  onCreate: (data: { name: string; education?: string; description?: string }) => void;
}

export default function CreateCVModal({ open, onClose, onCreate }: CreateCVModalProps) {
  const [name, setName] = useState('');
  const [education, setEducation] = useState('');
  const [description, setDescription] = useState('');
  const [nameError, setNameError] = useState(false);

  const handleCreate = () => {
    if (name.trim() === '') {
      setNameError(true);
      return;
    }
    onCreate({ name, education, description });
    setName('');
    setEducation('');
    setDescription('');
    setNameError(false);
    onClose();
  };

  const handleClose = () => {
    setName('');
    setEducation('');
    setDescription('');
    setNameError(false);
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth='sm' fullWidth>
      <DialogTitle>
        Create CV
        <IconButton
          aria-label='close'
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          error={nameError}
          helperText={nameError ? 'Name is required' : ''}
          margin='dense'
          label='Name'
          type='text'
          fullWidth
          variant='outlined'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setNameError(false);
          }}
        />
        <TextField
          margin='dense'
          label='Education'
          type='text'
          fullWidth
          variant='outlined'
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        />
        <TextField
          margin='dense'
          label='Description'
          type='text'
          fullWidth
          multiline
          minRows={4}
          variant='outlined'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='secondary' variant='outlined'>
          Cancel
        </Button>
        <Button
          onClick={handleCreate}
          color='primary'
          variant='contained'
          disabled={name.trim() === ''}
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}
