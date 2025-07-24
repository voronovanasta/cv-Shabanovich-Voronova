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
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, type RegisterFormValues } from '../model/validation/register.schema';
import useRegister from '../model/useRegister';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const registerMutation = useRegister();

  const onSubmit = (data: RegisterFormInputs) => {
    registerMutation.mutate({
      auth: {
        email: data.email,
        password: data.password,
      },
    });
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant='h5' sx={{ textAlign: 'center', mb: 1 }}>
        {t('auth.register.title')}
      </Typography>
      <Typography variant='body2' sx={{ textAlign: 'center', mb: 3 }}>
        {t('auth.register.subtitle')}
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
              label={t('auth.email')}
              autoComplete='username'
              error={!!errors.email}
              helperText={errors.email?.message}
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
              label={t('auth.password')}
              type={showPassword ? 'text' : 'password'}
              error={!!errors.password}
              helperText={errors.password?.message}
              autoComplete='current-password'
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
          {t('auth.register.button')}
        </Button>

        <Typography variant='body2' align='center'>
          <Link component={RouterLink} to='auth/login' underline='hover' sx={{ color: '#777' }}>
            {t('auth.haveAccount')}
          </Link>
        </Typography>
      </form>
    </Paper>
  );
}
