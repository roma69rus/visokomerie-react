import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { ABOUT_ROUTE, CATALOG_ROUTE, CONTACTS_ROUTE, DELIVERY_ROUTE, POLICY_ROUTE } from '../../../utils/consts';
import { VMCategory } from './VMCategory';




export interface INavBarProps {
  active: boolean;
  setActive: any;
}

export function NavBar(props: INavBarProps) {

  const navigate = useNavigate()
  const [overlay, setOverlay] = React.useState(false)
  const [closeBtn, setCloseBtn] = React.useState(false)

  const navigateTo = (path: string) => {
    setTimeout(() => navigate(path), 400)
  };

  const navClasses = ['nav']
  const overlayClasses = ['menu_overlay']



  React.useEffect(() => {
    if (overlay) {
      props.setActive(false)
      setOverlay(false)
    }

    if (closeBtn) {
      props.setActive(false)
      setOverlay(false)
      setCloseBtn(false)
    }
  }, [overlayClasses, navClasses])

  if (props.active) {
    navClasses.push('burger-active')
    overlayClasses.push('active')
  }

  return (
    <div>
      <nav className={navClasses.join(' ')}>
        <button
          className="menu-close btn-reset"
          onClick={() => setCloseBtn(true)}
        >
        </button>
        <ul className="nav__list list-reset">
          <li className="nav__item"> 
            <VMCategory/>
          </li>
          <li className="nav__item"><a href="#" onClick={() => navigateTo(DELIVERY_ROUTE)} className="nav__link">Доставка и возврат</a></li>
          <li className="nav__item"><a href="#" onClick={() => navigateTo(ABOUT_ROUTE)} className="nav__link">О нас</a></li>
          <li className="nav__item"><a href="#" onClick={() => navigateTo(CONTACTS_ROUTE)} className="nav__link">Контакты</a></li>
          <li className="nav__item"><a href="#" onClick={() => navigateTo(POLICY_ROUTE)} className="nav__link">Политика конфидециальности</a></li>
          {/* <li className="nav__item"><a href="#" onClick={() => navigateTo('/login')} className="nav__link">Корзина</a></li> */}
        </ul>
      </nav>
      <div className={overlayClasses.join(' ')}
        id="overlay-menu"
        onClick={() => setOverlay(true)}
      >
      </div>
    </div>
  );
}
