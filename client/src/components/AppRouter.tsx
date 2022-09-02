import * as React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Context, IContext } from '../index';
import { authRoutes, publicRoutes } from '../routes';
import { ADMIN_ROUTE, LOGIN_ROUTE } from '../utils/consts';

export interface IAppRouterProps {
}

export function AppRouter(props: IAppRouterProps) {
  const {userData} = React.useContext(Context) as IContext
  return (
    <Routes>
      {userData.isAuth && authRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} element={<Component />} />
      )}
      {publicRoutes.filter(item => item.path!==LOGIN_ROUTE).map(({ path, Component }) =>
        <Route key={path} path={path} element={<Component />} />
      )}
      {userData.isAuth && publicRoutes.filter(item => item.path===LOGIN_ROUTE).map(({ path, Component }) =>
        <Route key={path} path={path} element={<Navigate to={ADMIN_ROUTE} />} />
      )}
      {publicRoutes.filter(item => item.path===LOGIN_ROUTE).map(({ path, Component }) =>
        <Route key={path} path={path} element={<Component />} />
      )}

      <Route path="*" element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}


