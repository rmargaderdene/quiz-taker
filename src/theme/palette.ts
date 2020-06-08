import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: colors.indigo[900],
    main: colors.indigo[500],
    light: colors.indigo[100]
  },
  secondary: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue['A400'],
    light: colors.blue['A400']
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600]
  },
  background: {
    default: '#F4F6F8',
    paper: white
  },
  link: colors.blue[800],
  icon: colors.blueGrey[600],
  divider: colors.grey[200],
  typography: {
    mainPage: '#37474F',
    primary: '#232735',
    section: '#73BA9B',
    emergency: '#F79221',
    buttonText: '#003E1F'
  },
  buttonPrimary: {
    color: '#FFFFFF',
    default: '#003E1F',
    hover: '#076A38',
    active: '#076A38',
    disabled: '#BCD9CC'
  },
  buttonSecondary: {
    color: '#003E1F',
    default: '#FFFFFF',
    hover: '#FFFFFF',
    active: '#FFFFFF',
    disabled: '#BCD9CC'
  },
  buttonExtraPrimary: {
    color: '#FFFFFF',
    default: '#F79221',
    hover: '#FFD464',
    active: '#FFD464',
    disabled: '#FFE7B8'
  }
};
