import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";
function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      <Header />
      {isLoading && <Loader />}
      {!isLoading && <Outlet />}
      <CartOverview />
    </div>
  );
}

export default AppLayout;
