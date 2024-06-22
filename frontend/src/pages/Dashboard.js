import { useContext } from "react"; 
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom"; 
import Navbar from "../components/Navbar";

function Dashboard() {
  const { token, loading, access, user } = useContext(AuthContext);
  console.log(access)
  if (loading) {
    return null;
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return(
    <>
    <div className="w-screen h-screen flex justify-evenly items-center bg-[#E0FBFD]">
      <Navbar
        user = {user}
      />
      <div className="w-[83%] h-[98%]"></div>
    </div>
    </>
  );
}

export default Dashboard;