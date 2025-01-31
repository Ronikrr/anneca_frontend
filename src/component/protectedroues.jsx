// ProtectedRoute.js
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
    const location = useLocation();
    const isAuthenticated = () => {
        return localStorage.getItem("token") !== null;
    };
    return isAuthenticated() ? (
        <Outlet />
    ) : (
        <Navigate to="/login" replace state={{ from: location.pathname }} />
    );
};

export default ProtectedRoute;
