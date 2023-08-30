import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './ui/Home';
import Error from './ui/Error';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import Order, { loader as orderLoader } from './features/order/Order';
import { action as updateOrderAction } from './features/order/UpdateOrder';
import AppLayout from './ui/AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error title="error" />,

    children: [
      {
        path: '/',
        element: <Home title="Pizza Hum | Home" />,
      },
      {
        path: '/menu',
        element: <Menu title="Pizza Hum | Menu" />,
        loader: menuLoader,
        errorElement: <Error title="error" />,
      },
      { path: '/cart', element: <Cart title="Pizza Hum | Cart" /> },
      {
        path: '/order/new',
        element: <CreateOrder title="Pizza Hum | Create Order" />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order title="Pizza Hum | Order" />,
        loader: orderLoader,
        errorElement: <Error title="Pizza Hum | Error" />,
        action: updateOrderAction,
      },
      {
        path: '*',
        element: <Error title="Pizza Hum | Error" />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
