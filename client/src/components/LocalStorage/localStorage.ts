interface ICartData {
  id: number;
  quantity: number;
}
export interface ICart {
  [key: number]: ICartData;
}

export const getlocalStorage = () => {
  const cartData: ICart = JSON.parse(localStorage.getItem('cart') as string) || {}
  return cartData
}

export const addTolocalStorage = (id: number) => {
    let data:ICartData = {id, quantity: 1};
    let cartData: ICart = JSON.parse(localStorage.getItem('cart') as string) || {}
    cartData[id] ? cartData[id].quantity += 1 : cartData[id] = data;
    localStorage.setItem('cart', JSON.stringify(cartData)) 
}

export const deleteFromlocalStorage = (id: number) => {
  let cartData: ICart = JSON.parse(localStorage.getItem('cart') as string) || {}
  if (cartData[id]){
    delete cartData[id]
  }
  localStorage.setItem('cart', JSON.stringify(cartData))    
}

export const clearlocalStorage = () => {
    localStorage.removeItem('cart')    
}

export const updatelocalStorage = (id: number, quantity: number) => {
  let cartData: ICart = JSON.parse(localStorage.getItem('cart') as string) || {}
  if (cartData[id]){
    cartData[id].quantity = quantity
  }
  localStorage.setItem('cart', JSON.stringify(cartData))  
}