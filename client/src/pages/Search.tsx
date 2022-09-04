import * as React from 'react';
import { Header } from '../components/UI/header/Header';

export interface ISearchProps {
}

export function Search (props: ISearchProps) {
  return (
    <div>
      <Header color='BLACK'/>
      Search
    </div>
  );
}
