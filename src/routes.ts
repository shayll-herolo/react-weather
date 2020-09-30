import React from "react";
import { RouteProps } from "react-router-dom";

export const routes: RouteProps[] = [{
    path: '/',
    exact: true,
    component: React.lazy(() => import('./pages/Home')) 
  }, {
    path: '/favorites',
    component: React.lazy(() => import('./pages/Favorites'))
  }
];