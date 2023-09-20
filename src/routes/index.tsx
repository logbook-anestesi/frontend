import { Route, Routes } from 'react-router-dom';
import PrivateRoutes from '../components/PrivateRoutes';
import About from './About';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Home from './Home';
import NotificationsPage from './Notifications';
import ProfilePage from './Profile';
import StasePage from './Stase';
import UsersPage from './Users';
import CreateStase from './CreateStase';
import CasesPage from './Cases';
import AddCasesPage from './AddCases';
import CompetencePage from './Competence';
import CasesReviewDashboardPage from './CasesReviewDashboard';
import StationDashboardPage from './StationDashboard';
import AddCasePacu from './AddCasePacu';
import AddCaseNora from './AddCaseNora';
import CaseDetails from './CaseDetails';
import StaseAllList from './StaseAllList';
import PendingApproval from './PendingApproval';
import ApprovingProcess from './ApprovingProcess';
import ApprovingProcessEdit from './ApprovingProcessEdit';
import IlmiahPage from './Ilmiah';
import IlmiahDetail from './IlmiahDetail';
import AddCaseICU from './AddCasesICU';
import AddCaseResus from './AddCaseResus';
import AddCaseProcedureConsultation from './AddCaseProcedureConsultation';
import AddCasePoliPerioperative from './AddCasePoliPerioperative';
import AddCasePainService from './AddCasePainService';
import ProfilePageOtherUser from './ProfilePageOtherUser';
import UploadImageToStorage from './UploadImage';
import ExamPage from './Exam';
import ExamAdd from './ExamAdd';
import ExamList from './ExamList';
import StaseApproval from './StaseApproval';

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/other-user" element={<ProfilePageOtherUser />} />
        <Route path="/notifications" element={<NotificationsPage />} />

        <Route path="/stase" element={<StasePage />} />
        <Route path="/stase/create" element={<CreateStase />} />
        <Route path="/stase/all" element={<StaseAllList />} />
        <Route path="/stase/approval" element={<StaseApproval />} />

        <Route path="/competence" element={<CompetencePage />} />

        <Route path="/review/cases" element={<CasesReviewDashboardPage />} />
        <Route path="/review/process" element={<ApprovingProcess />} />
        <Route path="/review/process/edit" element={<ApprovingProcessEdit />} />

        <Route path="/dashboard/station" element={<StationDashboardPage />} />

        <Route path="/cases" element={<CasesPage />} />
        <Route path="/cases/add/ok" element={<AddCasesPage />} />
        <Route path="/cases/add/pacu" element={<AddCasePacu />} />
        <Route path="/cases/add/nora" element={<AddCaseNora />} />
        <Route path="/cases/add/icu" element={<AddCaseICU />} />
        <Route path="/cases/add/resus" element={<AddCaseResus />} />
        <Route
          path="/cases/add/procedure-consultation"
          element={<AddCaseProcedureConsultation />}
        />
        <Route
          path="/cases/add/poli-perioperative"
          element={<AddCasePoliPerioperative />}
        />
        <Route
          path="/cases/add/pain-service"
          element={<AddCasePainService />}
        />
        <Route path="/cases/details" element={<CaseDetails />} />
        <Route path="/approval" element={<PendingApproval />} />

        <Route path="/ilmiah" element={<IlmiahPage />} />
        <Route path="/ilmiah/details" element={<IlmiahDetail />} />

        <Route path="/exam" element={<ExamPage />} />
        <Route path="/exam/add" element={<ExamAdd />} />
        <Route path="/exam/all" element={<ExamList />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* TODO: adjust here */}
      <Route path="/upload-test" element={<UploadImageToStorage />} />
    </Routes>
  );
};

export default MainRoutes;
