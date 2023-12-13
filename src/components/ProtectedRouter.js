import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ children }) => {
  const authuser = useSelector((store) => store?.users);
  if (!authuser) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRouter;
