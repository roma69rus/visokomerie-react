import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import ProductStore, {IProductStore} from './store/ProductStore'
import SliderStore, { ISliderStore } from './store/SliderStore';


export interface IContext {
  userData: any;
  productData: IProductStore;
  sliderData: ISliderStore;
}

export const Context = createContext<IContext | null>(null)
console.log("REACT_APP_API_URL", process.env.REACT_APP_API_URL)


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Context.Provider value={{
    userData: new UserStore(),
    productData: new ProductStore(),
    sliderData: new SliderStore(),
  }}>

    <App />
  </Context.Provider>,

);
