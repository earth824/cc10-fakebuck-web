import { Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import PublicLayout from '../components/layouts/PublicLayout';
import Friend from '../pages/Friend';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

function RouteConfig() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route path="" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      {/* <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="friend" element={<Friend />} />
      </Route> */}
    </Routes>
  );
}

export default RouteConfig;
