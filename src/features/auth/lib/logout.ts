import { useNavigate } from 'react-router';
import { useAuthStore } from '../model/store/useAuthStore';

export function useLogout() {
  const navigate = useNavigate();
  const clearAuth = useAuthStore((state) => state.clearAuth);
  return () => {
    clearAuth();
    navigate('/auth/login', { replace: true });
  };
}
