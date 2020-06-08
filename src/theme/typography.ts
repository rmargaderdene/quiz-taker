import palette from './palette';

export default {
  /** Main page title */
  h1: {
    fontFamily: 'Scada',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '30px',
    lineHeight: '37px',
    color: palette.typography.mainPage
  },
  /** goal, journal, edit title */
  h2: {
    fontFamily: 'Scada',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '30px',
    color: palette.typography.primary
  },
  /** section */
  h3: {
    fontFamily: 'Scada',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '22px',
    color: palette.typography.section
  },
  /** card heading */
  h4: {
    fontFamily: 'Scada',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '22px',
    color: palette.typography.primary
  },
  /** emergency numbers */
  h5: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '30px',
    lineHeight: '35px',
    color: palette.typography.emergency
  },
  /** Safety plan heading */
  h6: {
    fontFamily: 'Scada',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '28px',
    lineHeight: '35px',
    color: palette.typography.primary
  },
  /** Body 1 - description */
  body1: {
    fontFamily: 'Scada',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '127.69%',
    color: palette.typography.primary
  },
  /** Body 2 - User input */
  body2: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '127.69%',
    color: palette.typography.primary
  },
  /** Body 2 - semi bold */
  subtitle1: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '127.69%',
    color: palette.typography.primary
  },
  /** Button text */
  button: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '21px',
    color: palette.typography.buttonText
    // textTransform: 'none'
  },
  /** Label - Navigation */
  subtitle2: {
    fontFamily: 'Scada',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '12px',
    lineHeight: '15px',
    color: palette.typography.primary
  },
  /** Label - Goal status */
  caption: {
    fontFamily: 'Scada',
    fontStyle: 'italic',
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '17px',
    color: palette.typography.primary
  }
};
