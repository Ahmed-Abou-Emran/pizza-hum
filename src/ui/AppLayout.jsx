import Header from './Header';
import Loader from './Loader';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />
      <AnimatePresence>
        <div className=" main-container overflow-auto">
          <main className="mx-auto flex max-w-3xl flex-col justify-center p-10">
            <Outlet />
          </main>
        </div>
      </AnimatePresence>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
