import * as React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';

export interface IAppRouterProps {
  // isAuth:boolean;
}

export default class AppRouter extends React.Component<IAppRouterProps> {
  isAuth = true;
  public render() {
    return (
      <Routes>
        {this.isAuth === true && authRoutes.map(({path, Component}) =>
          <Route key={path} path = {path}>{Component}</Route>
        )}
        {publicRoutes.map(({path, Component}) =>
          <Route key={path} path = {path}>{Component}</Route>
        )}
      </Routes>
    );
  }
}

