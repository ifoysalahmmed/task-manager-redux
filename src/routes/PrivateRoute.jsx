import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/shared/Loading";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();



  // if (isLoading) {
  //   return <Loading />;
  // }

  // if (!isLoading && !email) {
  //   return <Navigate to="/login" state={{ path: pathname }} />;
  // }

  return children;
};

export default PrivateRoute;
