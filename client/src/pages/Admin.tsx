import * as React from 'react';
import { Header } from '../components/UI/header/Header';

export interface IAdminProps {
}

export function Admin(props: IAdminProps) {
  return (
    <div>
      <Header/>
      Admin
    </div>
  );
}

