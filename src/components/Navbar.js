import { Link } from "react-router-dom";

const Navbar = () => {
    return (          
        <header  className="row navbar">
          <Link to="/"> Home </Link>
          <div>
            <a className="logo" href="/">
              <img src="/images/amatira(6).png" alt="Logo" width={500} />
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <Link to="/register"> Register </Link>
            <Link to="/login"> SignIn </Link>
            <Link to="/create-post"> CreatePost </Link>
          </div>
        </header>      
    );
  };

  export default Navbar;
