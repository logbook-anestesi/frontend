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
import CreateStase from "./CreateStase";
import CasesPage from "./Cases";
import AddCasesPage from "./AddCases";
import AddCasePacu from "./AddCasePacu";
import AddCaseNora from "./AddCaseNora";
import CaseDetails from "./CaseDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/notifications" element={<NotificationsPage />} />

        <Route path="/stase" element={<StasePage />} />
        <Route path="/stase/create" element={<CreateStase />} />

        <Route path="/cases" element={<CasesPage />} />
        <Route path="/cases/add/ok" element={<AddCasesPage />} />
        <Route path="/cases/add/pacu" element={<AddCasePacu />} />
        <Route path="/cases/add/nora" element={<AddCaseNora />} />
        <Route path="/cases/details" element={<CaseDetails />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default MainRoutes;
