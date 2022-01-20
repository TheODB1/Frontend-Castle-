import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Searchbar } from "./Searchbar";

const Navbar = () => {
  const { isAuthenticated, signout } = useAuth();
  return (
    <header className="row navbar">
      <Link to="/"> Home </Link>
      <Searchbar />
      <div>
        <a className="logo" href="/">
          <img src="/images/amatira(6).png" alt="Logo" width={500} />
        </a>
      </div>
      <div>
        {isAuthenticated ? (
          <>
            <Link to="/protected/create-post"> CreateCastle </Link>
            <a onClick={signout}>LogOut</a>
            <Link to="/Contact"> Contact </Link>
            <Link to="/About"> About </Link>
          </>
        ) : (
          <>
            <Link to="/register"> Register </Link>
            <Link to="/login"> LogIn </Link>
            <Link to="/Contact"> Contact </Link>
            <Link to="/About"> About </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
