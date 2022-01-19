import { createContext, useEffect, useState } from 'react';
import axios from '../config/axios';
import { setToken, clearToken, getToken } from '../services/localStorage';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(false);

  useEffect(() => {
    if (getToken()) {
      setInitializing(true);
      axios
        .get('/users/me')
        .then(res => setUser(res.data.user))
        .catch(err => console.log(err))
        .finally(() => setInitializing(false));
    }
  }, []);

  const login = async (emailOrPhoneNumber, password) => {
    try {
      const res = await axios.post('/users/login', {
        emailOrPhoneNumber,
        password
      });
      setToken(res.data.token);
      setUser(res.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    clearToken();
    setUser(null);
  };

  const updateUser = value => {
    setUser(prev => ({ ...prev, ...value }));
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, updateUser, initializing }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

export { AuthContext };
