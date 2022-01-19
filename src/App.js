import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import AuthState from './context/AuthContext';
import Footer from "./components/Footer";
import CastleScreen from "./screens/CastleScreen";
import HomeScreen from "./screens/HomeScreen";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import UserProfile from "./components/UserProfile";
import NotFound from "./components/NotFound";
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import CreateCastle from "./components/CreateCastle";

function App() {
  return (
    <AuthState>
    <ToastContainer />
    <Router>
      <div className="grid-container">
        <main>
          <Routes>
            <Route path="/" element={<Layout />}>             
              <Route index element={<HomeScreen />}  />
              <Route path="login" element={<LogIn />} />
              <Route path="register" element={<Register />} />
              <Route path="castle/:castleId" element={<CastleScreen />} />              
              <Route path="protected" element={<ProtectedRoute />}>
                <Route index element={<UserProfile />} />
                <Route path="create-post" element={<CreateCastle />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  
    </AuthState>
  );
}
export default App;
