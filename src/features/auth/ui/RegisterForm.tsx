import { useState } from 'react';
import {
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Link,
  Paper,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, type RegisterFormValues } from '../model/validation/register.schema';
import useRegister from '../model/useRegister';

interface RegisterFormInputs {
  email: string;
  password: string;
}

export default function RegisterForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const registerMutation = useRegister();

  const onSubmit = (data: RegisterFormInputs) => {
    registerMutation.mutate({
      input: {
        email: data.email,
        password: data.password,
      },
    });
  };

  return (
    <Paper sx={{ p: 3, backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Typography variant='h5' sx={{ color: '#fff', textAlign: 'center', mb: 1 }}>
        Register now
      </Typography>
      <Typography variant='body2' sx={{ color: '#aaa', textAlign: 'center', mb: 3 }}>
        Welcome! Sign up to continue
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='email'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              variant='outlined'
              label='Email'
              error={!!errors.email}
              helperText={errors.email?.message}
              InputLabelProps={{ style: { color: '#aaa' } }}
              InputProps={{ style: { color: '#fff' } }}
              sx={{ mb: 2, backgroundColor: '#2a2a2a', borderRadius: 1 }}
            />
          )}
        />

        <Controller
          name='password'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              variant='outlined'
              label='Password'
              type={showPassword ? 'text' : 'password'}
              error={!!errors.password}
              helperText={errors.password?.message}
              InputLabelProps={{ style: { color: '#aaa' } }}
              InputProps={{
                style: { color: '#fff' },
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge='end'
                      sx={{ color: '#aaa' }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 3, backgroundColor: '#2a2a2a', borderRadius: 1 }}
            />
          )}
        />

        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{
            backgroundColor: '#d32f2f',
            color: '#fff',
            borderRadius: 10,
            py: 1.2,
            mb: 2,
            '&:hover': {
              backgroundColor: '#b71c1c',
            },
          }}
        >
          CREATE ACCOUNT
        </Button>

        <Typography variant='body2' align='center' sx={{ color: '#777' }}>
          <Link href='#' underline='hover' sx={{ color: '#777' }}>
            I HAVE AN ACCOUNT
          </Link>
        </Typography>
      </form>
    </Paper>
  );
}
