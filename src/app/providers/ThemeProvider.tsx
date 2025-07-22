import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { createAppTheme } from '../../shared/theme';
import { useThemeStore } from '../../shared/model/store/useThemeStore';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const mode = useThemeStore((state) => state.mode);
  const theme = createAppTheme(mode);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
