import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <CartOverview />
    </>
  );
}

export default AppLayout;
