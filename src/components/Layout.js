import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Layout = () => {
  const { isAuthenticated, user, signout } = useAuth();
  return (
    <>
      <header >
            <Navbar />
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
