import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";
import { GET_ME, USERS } from "../../Api/Api";
import Loading from "../../Components/Loading/Loading";
import { Axios } from "../../Api/axios";

function RequireAuth({ allowedRole }) {
  // User
  const [user, setUser] = useState("");

  // Token & Cookie
  const cookie = Cookie();
  const token = cookie.get("ECT");
  const location = useLocation();

  // Navigate
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get(`${USERS}${GET_ME}`)
      .then((res) => {
        setUser(res.data.user);
      })
      .catch(() => {
        navigate("/login", {
          replace: true,
          state: { path: location.pathname },
        });
      });
  }, []);
  return token ? (
    user === "" ? (
      <Loading />
    ) : allowedRole.includes(user.role) ? (
      <Outlet />
    ) : (
      <Navigate to="/forbidden" replace={true} />
    )
  ) : (
    <Navigate to="/login" replace={true} state={{ path: location.pathname }} />
  );
}

export default RequireAuth;
