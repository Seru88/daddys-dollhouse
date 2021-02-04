import './css/akaPosseFont.css';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
let theme = createMuiTheme({
  typography: { fontFamily: "'Courier New', Georgia, serif" },
  palette: {
    type: 'dark',
    primary: {
      main: '#D79459',
    },
    secondary: {
      main: '#2b2927',
    },
    error: {
      main: '#793030',
    },
    warning: {
      main: '#793030',
    },
    info: {
      main: '#2b2927',
    },
    success: {
      main: '#637927',
    },
    background: {
      default: '#202023',
      paper: '#282b2f',
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0,
        fontFamily: "'AKA Posse','Courier New', Georgia, serif",
      },
    },
    MuiContainer: {
      root: {
        borderLeft: `3px solid transparent`,
        borderRight: `3px solid transparent`,
        borderImage: `linear-gradient(-135deg, ${theme.palette.primary.light}, ${theme.palette.primary.dark}) 1`,
        minHeight: '100vh',
        padding: 0,
        backgroundColor: theme.palette.background.default,
        position: 'relative',
      },
      maxWidthLg: { padding: 0 },
    },
    MuiDivider: {
      root: {
        height: 1,
        backgroundColor: theme.palette.primary.main,
      },
    },
    MuiTypography: {
      h4: {
        fontFamily: "'AKA Posse','Courier New', Georgia, serif",
      },
      h5: {
        fontFamily: "'AKA Posse','Courier New', Georgia, serif",
      },
    },
  },
};

export default theme;
