import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, signout } = useAuth();
  return (
    <header className="row navbar">
      <Link to="/"> Home </Link>
      <div>
        <a className="logo" href="/">
          <img src="/images/amatira(6).png" alt="Logo" width={500} />
        </a>
      </div>
      <div>
        {isAuthenticated ? (
          <>
            <a href="/cart">Cart</a>
            <Link to="/protected/create-post"> CreatePost </Link>
            <a onClick={signout}>Log out</a>
          </>
        ) : (
          <>
            <Link to="/register"> Register </Link>
            <Link to="/login"> SignIn </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
