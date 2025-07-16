import { Typography, TextField, Button, Paper } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  forgotPasswordSchema,
  type ForgotPasswordValues,
} from '../model/validation/forgotPassword.schema.ts';
import { Link, useNavigate } from 'react-router-dom';

export function ForgotPasswordForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
  });
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate('auth/login');
  };

  return (
    <Paper sx={{ p: 4, backgroundColor: 'inherit', width: '100%' }}>
      <Typography variant='h5' align='center' sx={{ color: '#fff', mb: 1 }}>
        Forgot password
      </Typography>
      <Typography variant='body2' align='center' sx={{ color: '#ccc', mb: 3 }}>
        We will send you an email with further instructions
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label='Email'
              variant='outlined'
              error={!!errors.email}
              helperText={errors.email?.message}
              InputLabelProps={{ style: { color: '#aaa' } }}
              InputProps={{ style: { color: '#fff' } }}
              sx={{
                backgroundColor: '#2a2a2a',
                borderRadius: 1,
                mb: 3,
              }}
            />
          )}
        />

        <Button
          type='submit'
          variant='contained'
          fullWidth
          sx={{
            py: 1.2,
            borderRadius: 10,
            backgroundColor: '#d32f2f',
            color: '#fff',
            mb: 1,
            '&:hover': {
              backgroundColor: '#b71c1c',
            },
          }}
        >
          RESET PASSWORD
        </Button>

        <Button variant='text' fullWidth sx={{ color: '#777' }} component={Link} to='/auth/login'>
          CANCEL
        </Button>
      </form>
    </Paper>
  );
}
