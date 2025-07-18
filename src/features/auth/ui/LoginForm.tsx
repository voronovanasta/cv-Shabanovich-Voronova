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
import { Link as RouterLink } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useForm, Controller } from 'react-hook-form';
import useLogin from '../model/useLogin';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginFormValues } from '../model/validation/login.schema';

interface LoginFormInputs {
  email: string;
  password: string;
}

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const loginMutation = useLogin();

  const onSubmit = (data: LoginFormInputs) => {
    loginMutation.mutate({
      input: {
        email: data.email,
        password: data.password,
      },
    });
  };

  return (
    <Paper sx={{ p: 3, width: '100%' }}>
      <Typography variant='h5' sx={{ textAlign: 'center', mb: 1 }}>
        Welcome back
      </Typography>
      <Typography variant='body2' sx={{ textAlign: 'center', mb: 3 }}>
        Hello again! Log in to continue
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
              autoComplete='username'
              InputProps={{ style: { color: '#fff' } }}
              sx={{ mb: 2, borderRadius: 1 }}
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
              autoComplete='current-password'
              slotProps={{
                input: {
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
                },
              }}
              sx={{ mb: 3, borderRadius: 1 }}
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
            borderRadius: 10,
            py: 1.2,
            mb: 2,
          }}
        >
          LOG IN
        </Button>

        <Typography variant='body2' align='center'>
          <Link
            component={RouterLink}
            to='/forgotpassword'
            underline='hover'
            sx={{ color: '#777' }}
          >
            FORGOT PASSWORD
          </Link>
        </Typography>
      </form>
    </Paper>
  );
}
