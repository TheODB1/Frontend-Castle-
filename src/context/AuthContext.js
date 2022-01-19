import { useState, useEffect, useContext, createContext } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthState = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState();
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const autoSignIn = async () => {
      try {
        setLoading(true);
        const { data: user } = await axios.get(`${process.env.REACT_APP_BLOG_API}/auth/me`, {
          headers: { Authorization: token }
        });
        setUser(user);
        setIsAuthenticated(true);
        setLoading(false);
      } catch (error) {
        toast.error(error.response?.data.error || error.message);
        localStorage.removeItem('token');
        setLoading(false);
      }
    };
    token && autoSignIn();
  }, [token]);

  const signup = async formData => {
    try {
      setLoading(true);
      const {
        data: { token }
      } = await axios.post(`${process.env.REACT_APP_BLOG_API}/auth/signup`, formData);
      localStorage.setItem('token', token);
      setToken(token);
      setLoading(false);
    } catch (error) {
      toast.error(error.response?.data.error || error.message);
      setLoading(false);
    }
  };

  const signin = async formData => {
    try {
      setLoading(true);
      const {
        data: { token }
      } = await axios.post(`${process.env.REACT_APP_BLOG_API}/auth/signin`, formData);
      localStorage.setItem('token', token);
      setToken(token);
      setLoading(false);
    } catch (error) {
      toast.error(error.response?.data.error || error.message);
      setLoading(false);
    }
  };

  const signout = () => {
    localStorage.removeItem('token');
    setUser();
    setToken(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, loading, signup, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;