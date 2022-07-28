import * as React from 'react';
import { Header } from '../components/UI/header/Header';

export interface IAboutProps {
}

export function About (props: IAboutProps) {
  return (
    <div>
      <Header/>
      About
    </div>
  );
}
