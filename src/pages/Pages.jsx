import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import Questions from "./Questions/Questions";
import Results from "./Results/Results";
import Rules from "./Rules/Rules";

const ProtectedRoutes = () => {
  const { user } = useAuth();
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

const Pages = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>

      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="rules" element={<Rules />} />
        <Route path="questions/:quizId" element={<Questions />}></Route>
        <Route path="results" element={<Results />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default Pages;
