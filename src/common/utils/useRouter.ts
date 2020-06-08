import { useContext } from 'react';
import { __RouterContext, RouteComponentProps } from 'react-router';

export default (): RouteComponentProps => useContext(__RouterContext);
