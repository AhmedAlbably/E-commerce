import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/Auth/NotFound/NotFound";
import Login from "./pages/Auth/Login/Login";
import Signup from "./pages/Auth/Signup/Signup";
import Forbidden from "./pages/Auth/Forbidden/Forbidden";
import RequireAuth from "./pages/Auth/RequireAuth";
import RequireBack from "./pages/Auth/RequireBack";
import Dashboard from "./pages/Dashboard/Dashboard";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import VerifyPassResetCode from "./pages/Auth/VerifyPassResetCode/VerifyPassResetCode";
import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forbidden" element={<Forbidden />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<RequireBack />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route path="/verify-reset-code" element={<VerifyPassResetCode />}></Route>
          <Route path="/reset-password" element={<ResetPassword />}></Route>
        </Route>

        <Route element={<RequireAuth allowedRole={["admin", "employee"]} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
