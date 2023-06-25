import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "../components/PrivateRoutes";
import About from "./About";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Home from "./Home";
import NotificationsPage from "./Notifications";
import ProfilePage from "./Profile";
import StasePage from "./Stase";
import UsersPage from "./Users";
import CreateStase from "./Stase/pages/CreateStase";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/users" element={<UsersPage />} />
      </Route>

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/notifications" element={<NotificationsPage />} />
      <Route path="/stase" element={<StasePage />} />
      <Route path="/stase/create" element={<CreateStase />} />
    </Routes>
  );
};

export default MainRoutes;
