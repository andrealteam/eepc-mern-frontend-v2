import { Navigate, useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  // console.log(user);

  if (loading) return <Skeleton width={1200} />;

  if (!user) {
    return <Navigate to="/auth/login" replace state={{ from: location }} />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
