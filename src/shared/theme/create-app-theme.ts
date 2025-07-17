import { createTheme } from '@mui/material';

export const createAppTheme = (mode: 'dark' | 'light') => {
  const backgroundColor = mode === 'dark' ? '#353535' : '#ffffff';

  return createTheme({
    cssVariables: true,
    palette: {
      mode: mode,
      primary: {
        main: '#c72f30',
        light: '#d95557',
        dark: '#b71c1c',
      },
      secondary: {
        main: '#767676',
      },
      background: {
        default: backgroundColor,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: { backgroundColor },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 40,
            textTransform: 'uppercase',
            height: 48,
            color: '#ffffff',
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: '#ffffff',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: 'transparent',
            backgroundImage: 'none',
            boxShadow: 'none',
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor: '#d32f2f',
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            color: '#ffffff',
            '&.Mui-selected': {
              color: '#d32f2f',
            },
          },
        },
      },
    },
  });
};
