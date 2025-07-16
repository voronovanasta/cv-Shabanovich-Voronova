import { Container, Box } from '@mui/material';
import { ForgotPasswordForm } from '../../../features/auth/ui/ForgotPasswordForm';

export default function ForgotPasswordPage() {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: '#1e1e1e',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth='sm'>
        <ForgotPasswordForm />
      </Container>
    </Box>
  );
}
