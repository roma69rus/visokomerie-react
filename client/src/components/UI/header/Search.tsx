import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { SEARCH_ROUTE } from '../../../utils/consts';

export interface ISearchProps {
}

export function Search (props: ISearchProps) {
  const navigate = useNavigate()
  return (
    <button className="search" onClick={()=> navigate(SEARCH_ROUTE)}>
            <span>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="19.5138" y="18.5495" width="8" height="2" transform="rotate(45 19.5138 18.5495)" fill="#ececec" />
                <circle cx="11.5" cy="11.5" r="10.5" stroke="#ececec" stroke-width="2" />
              </svg>
            </span>
    </button>
  );
}
