import { Route, Routes } from 'react-router-dom';
import AuthLayout from './components/AuthLayout';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Friend from './pages/Friend';

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="/friend" element={<Friend />} />
      </Route>
    </Routes>
  );
}

export default App;
