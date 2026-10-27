import { useContext, useState } from "react";
import Login from "./components/Auth/Login";
import { AuthContext } from "./context/AuthProvider";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";

const App = () => {
  const [session, setSession] = useState(() => {
    const storedSession = localStorage.getItem("loggedInUser");
    return storedSession ? JSON.parse(storedSession) : null;
  });
  const [userData] = useContext(AuthContext);
  const employeeData = session?.role === "employee"
    ? userData?.find((employee) => employee.email === session.email)
    : null;
  const user = session?.role === "admin" ? "admin" : employeeData ? "employee" : null;

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      const adminSession = { role: "admin" };
      setSession(adminSession);
      localStorage.setItem("loggedInUser", JSON.stringify(adminSession));
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      if(employee){
        const employeeSession = { role: "employee", email: employee.email };
        setSession(employeeSession);
        localStorage.setItem("loggedInUser", JSON.stringify(employeeSession));
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard changeUser={setSession} /> : (user == "employee"?<EmployeeDashboard changeUser={setSession} data={employeeData}  /> : null)}
    </>
  );
};

export default App;
