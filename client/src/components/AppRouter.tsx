import * as React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Context, IContext } from '../index';
import { authRoutes, publicRoutes } from '../routes';

export interface IAppRouterProps {
}

export function AppRouter(props: IAppRouterProps) {
  const {user} = React.useContext(Context) as IContext
  console.log(user)
  return (
    <Routes>
      {user.isAuth && authRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} element={<Component />} />
      )}
      {publicRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} element={<Component />} />
      )}
      <Route path="*" element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}


