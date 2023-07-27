import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import store from './store.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import PrivateRoute from './components/PrivateRoute.jsx';
import AdminRoute from './components/AdminRoute.jsx';
import Loader from './components/Loader.jsx';

// import HomeScreen from './screens/HomeScreen';
const HomeScreen = lazy(() => import('./screens/HomeScreen.jsx'));
// import ProductScreen from './screens/ProductScreen';
const ProductScreen = lazy(() => import('./screens/ProductScreen'));
// import CartScreen from './screens/CartScreen';
const CartScreen = lazy(() => import('./screens/CartScreen'));
// import LoginScreen from './screens/LoginScreen.jsx';
const LoginScreen = lazy(() => import('./screens/LoginScreen.jsx'));
// import RegisterScreen from './screens/RegisterScreen.jsx';
const RegisterScreen = lazy(() => import('./screens/RegisterScreen.jsx'));
// import ShippingScreen from './screens/ShippingScreen.jsx';
const ShippingScreen = lazy(() => import('./screens/ShippingScreen.jsx'));
// import PlaceOrderScreen from './screens/PlaceOrderScreen.jsx';
const PlaceOrderScreen = lazy(() => import('./screens/PlaceOrderScreen.jsx'));
// import OrderScreen from './screens/OrderScreen.jsx';
const OrderScreen = lazy(() => import('./screens/OrderScreen.jsx'));
// import ProfileScreen from './screens/ProfileScreen.jsx';
const ProfileScreen = lazy(() => import('./screens/ProfileScreen.jsx'));
// import OrderListScreen from './screens/admin/OrderListScreen.jsx';
const OrderListScreen = lazy(() =>
  import('./screens/admin/OrderListScreen.jsx')
);
// import ProductListScreen from './screens/admin/ProductListScreen.jsx';
const ProductListScreen = lazy(() =>
  import('./screens/admin/ProductListScreen.jsx')
);
// import ProductEditScreen from './screens/admin/ProductEditScreen.jsx';
const ProductEditScreen = lazy(() =>
  import('./screens/admin/ProductEditScreen.jsx')
);
// import UserListScreen from './screens/admin/UserListScreen.jsx';
const UserListScreen = lazy(() => import('./screens/admin/UserListScreen.jsx'));
// import UserEditScreen from './screens/admin/UserEditScreen.jsx';
const UserEditScreen = lazy(() => import('./screens/admin/UserEditScreen.jsx'));
// import PageNotFoundScreen from './screens/PageNotFoundScreen.jsx';
const PageNotFoundScreen = lazy(() =>
  import('./screens/PageNotFoundScreen.jsx')
);

// dist/assets/index-c1001910.css  233.92 kB │ gzip:  32.19 kB
// dist/assets/index-fe76ccf0.js   464.75 kB │ gzip: 150.46 kB

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/search/:keyword" element={<HomeScreen />} />
      <Route path="/page/:pageNumber" element={<HomeScreen />} />
      <Route
        path="/search/:keyword/page/:pageNumber"
        element={<HomeScreen />}
      />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />

      <Route path="" element={<PrivateRoute />}>
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route path="/order/:id" element={<OrderScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Route>

      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/orderlist" element={<OrderListScreen />} />
        <Route path="/admin/productlist" element={<ProductListScreen />} />
        <Route
          path="/admin/productlist/:pageNumber"
          element={<ProductListScreen />}
        />
        <Route path="/admin/product/:id/edit" element={<ProductEditScreen />} />
        <Route path="/admin/userlist" element={<UserListScreen />} />
        <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
      </Route>
      <Route path="*" element={<PageNotFoundScreen />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router} />
        </Suspense>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
