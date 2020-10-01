import React from "react";
import { Route, RouteProps, Switch } from "react-router-dom";

export interface RoutingProps {
  routes: RouteProps[];
}

export default function RouterOutlet({ routes }: RoutingProps) {
  return (
    <React.Suspense fallback={<div>...</div>}>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path?.toString()} {...route}></Route>
        ))}
      </Switch>
    </React.Suspense>
  );
}
