/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import { lazy } from 'react';
import { RouteConfig } from 'react-router-config';

import { MainLayout } from './layouts';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: MainLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: lazy(() => import('views/Quiz'))
      }
    ]
  }
];

export default routes;
