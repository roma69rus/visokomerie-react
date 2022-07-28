import * as React from 'react';

export interface IBurgerProps {
  onClick: () => void;
}

export function Burger(props: IBurgerProps) {

  return (
    <button className="burger btn-reset" onClick={props.onClick}>
      <span className="burger__line"></span>
      <span className="burger__line"></span>
      <span className="burger__line"></span>
    </button>
  );
}
