import { createContext, useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import axios from '../config/axios';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setUser(jwtDecode(localStorage.getItem('token')));
    }
  }, []);

  const login = (emailOrPhoneNumber, password) => {
    setError('');
    axios
      .post('/users/login', { emailOrPhoneNumber, password })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        setUser(jwtDecode(res.data.token));
      })
      .catch(err => {
        setError(err.response.data.message);
      });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

export { AuthContext };
