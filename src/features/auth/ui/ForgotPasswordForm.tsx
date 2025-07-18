import { Typography, TextField, Button, Paper, Link } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  forgotPasswordSchema,
  type ForgotPasswordValues,
} from '../model/validation/forgotPassword.schema.ts';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

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
    <Paper sx={{ p: 4, width: '100%' }}>
      <Typography variant='h5' align='center' sx={{ mb: 1 }}>
        Forgot password
      </Typography>
      <Typography variant='body2' align='center' sx={{ mb: 3 }}>
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
              autoComplete='username'
              InputProps={{ style: { color: '#fff' } }}
              sx={{
                borderRadius: 1,
                mb: 3,
              }}
            />
          )}
        />

        <Button
          type='submit'
          variant='contained'
          sx={{
            width: '50%',
            mx: 'auto',
            display: 'block',
            py: 1.2,
            borderRadius: 10,
            mb: 1,
          }}
        >
          RESET PASSWORD
        </Button>
        <Typography variant='body2' align='center'>
          <Link component={RouterLink} to='/auth/login' underline='hover' sx={{ color: '#777' }}>
            CANCEL
          </Link>
        </Typography>
      </form>
    </Paper>
  );
}
