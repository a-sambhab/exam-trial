import { useContext } from "react"; 
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom"; 

function Dashboard() {
  const { token, loading, access } = useContext(AuthContext);
  console.log(access)
  if (loading) {
    return null;
  }

  if (!token && access !== "superadmin") {
    return <Navigate to="/login" replace />;
  }

  return <h1>Dashboard: Protected Content Here</h1>;
}

export default Dashboard;