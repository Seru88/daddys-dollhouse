import './css/akaPosseFont.css';
import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

// A custom theme for this app
let theme = createMuiTheme({
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
      // default: '#282b2f',
      // paper: '#202023',
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0,
      },
    },
    MuiContainer: {
      root: {
        // boxShadow: theme.shadows[10],
        borderLeft: `${theme.spacing(0.4)}px solid transparent`,
        borderRight: `${theme.spacing(0.4)}px solid transparent`,
        borderImage: `linear-gradient(-135deg, ${theme.palette.primary.light}, ${theme.palette.primary.dark}) 1`,
        minHeight: '100vh',
        padding: 0,
        backgroundColor: theme.palette.background.default,
      },
      maxWidthLg: { padding: 0 },
    },
  },
};

export default theme;
