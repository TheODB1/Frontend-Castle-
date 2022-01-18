import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import CastleScreen from "./screens/CastleScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Router>
      <div className="grid-container">
        <header className="row navbar">
          <Link to="/"> Home </Link>
          <div>
            <a className="logo" href="/">
              <img src="/images/amatira(6).png" alt="Logo" width={500} />
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">SignIn</a>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="castle">
              <Route path=":castleId" element={<CastleScreen />} />
            </Route>
          </Routes>
          <footer className="row center  footerMainDiv ">
            <Footer />
          </footer>
        </main>
      </div>
    </Router>
  );
}
export default App;
