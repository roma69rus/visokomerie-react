import { Admin } from "./pages/Admin"
import Auth from "./pages/Auth"
import { Cart } from "./pages/Cart"
import { Product } from "./pages/Product"
import { Shop } from "./pages/Shop"
import { ADMIN_ROUTE, CART_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, SHOP_ROUTE } from "./utils/consts"

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  }
]

export const publicRoutes = [
  {
    path: CART_ROUTE,
    Component: Cart
  },
  {
    path: PRODUCT_ROUTE + '/:product_slug',
    Component: Product
  },
  {
    path: SHOP_ROUTE,
    Component: Shop
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
]