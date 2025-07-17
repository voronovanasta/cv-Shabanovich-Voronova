import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { createAppTheme } from '../../shared/theme';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = createAppTheme('dark'); // or use state/context for dynamic mode

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
