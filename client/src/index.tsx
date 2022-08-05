import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import ProductStore, {IProductStore} from './store/ProductStore'
import SliderStore, { ISliderStore } from './store/SliderStore';


export interface IContext {
  user: any;
  product: IProductStore;
  slider: ISliderStore;
}

export const Context = createContext<IContext | null>(null)


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    product: new ProductStore(),
    slider: new SliderStore(),
  }}>

    <App />
  </Context.Provider>,

);
