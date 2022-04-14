import React, { useEffect } from 'react';
import { RouteProps, Route, useLocation } from 'react-router';
interface PrivateRouteProps extends RouteProps {
  path: string | string[];
  fallback: React.FunctionComponent;
  isPermission?: boolean;
}

export const PrivateRoute = (props: PrivateRouteProps) => {
  const { component, fallback, isPermission, ...rest } = props;
  const { pathname } = useLocation();

  const checkAuth = () => {
    if (isPermission !== true) {
      sessionStorage.setItem('connectedLink', pathname);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return <Route {...rest} component={isPermission ? component : fallback} />;
};
