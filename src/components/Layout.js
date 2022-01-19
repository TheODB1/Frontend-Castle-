import Navbar from "./Navbar";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Layout = () => {
  const { isAuthenticated, user, signout } = useAuth();
  return (
    <>
      <header style={{marginBottom:'30px'}}>
        <Navbar />
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
