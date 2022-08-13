import { Admin } from "./pages/Admin"
import {Auth} from "./pages/Auth"
import { Cart } from "./pages/Cart"
import { Product } from "./pages/Product"
import { Shop } from "./pages/Shop"
import { Catalog } from "./pages/Catalog"
import { Delivery } from "./pages/Delivery"
import { About } from "./pages/About"
import { Contacts } from "./pages/Contacts"
import { Policy } from "./pages/Policy"
import { Search } from "./pages/Search"

import { ADMIN_ROUTE, CART_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, SHOP_ROUTE, CATALOG_ROUTE, DELIVERY_ROUTE, ABOUT_ROUTE, CONTACTS_ROUTE, POLICY_ROUTE, SEARCH_ROUTE } from "./utils/consts"

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
    path: CATALOG_ROUTE,
    Component: Catalog
  },
  {
    path: CATALOG_ROUTE + '/:catalog_slug',
    Component: Catalog
  },
  {
    path: DELIVERY_ROUTE,
    Component: Delivery
  },
  {
    path: ABOUT_ROUTE,
    Component: About
  },
  {
    path: CONTACTS_ROUTE,
    Component: Contacts
  },
  {
    path: POLICY_ROUTE,
    Component: Policy
  },
  {
    path: SEARCH_ROUTE,
    Component: Search
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth
  }
]