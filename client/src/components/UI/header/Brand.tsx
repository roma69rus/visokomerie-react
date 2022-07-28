import * as React from 'react';
import { SHOP_ROUTE } from '../../../utils/consts';

export interface IBrandProps {

}

export function Brand(props: IBrandProps) {


  return (
    <a href={SHOP_ROUTE} className="header__brand">
      <span className="header__brand_text">
        VISOKOMERIE
      </span>
    </a>
  );
}
