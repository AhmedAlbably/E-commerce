import { useEffect, useState } from "react";
import "./Forbidden.scss";
import { Link } from "react-router-dom";
import { Axios } from "../../../Api/axios";
import { GET_ME, USERS } from "../../../Api/Api";

function Forbidden() {
  const [user, setUser] = useState("");
  const redirectPath =
    user.role === "employee" || user.role === "admin"
      ? "/dashboard"
      : user.role === "user" && "/";
  useEffect(() => {
    Axios.get(`${USERS}${GET_ME}`)
      .then((res) => {
        setUser(res.data.user);
      })
      .catch(() => {});
  }, []);
  return (
    <div className="error-403">
      <div className="maincontainer">
        <div className="bat">
          <img
            className="wing leftwing"
            src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-wing.png"
            alt=""
          />
          <img
            className="body"
            src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-body.png"
            alt="bat"
          />
          <img
            className="wing rightwing"
            src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-wing.png"
            alt=""
          />
        </div>
        <div className="bat">
          <img
            className="wing leftwing"
            src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-wing.png"
            alt=""
          />
          <img
            className="body"
            src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-body.png"
            alt="bat"
          />
          <img
            className="wing rightwing"
            src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-wing.png"
            alt=""
          />
        </div>
        <div className="bat">
          <img
            className="wing leftwing"
            src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-wing.png"
            alt=""
          />
          <img
            className="body"
            src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-body.png"
            alt="bat"
          />
          <img
            className="wing rightwing"
            src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/bat-wing.png"
            alt=""
          />
        </div>
        <img
          className="foregroundimg"
          src="https://aimieclouse.com/Media/Portfolio/Error403Forbidden/HauntedHouseForeground.png"
          alt="haunted house"
        />
      </div>

      <h1 className="errorcode">ERROR 403</h1>
      <div className="errortext">This area is forbidden. Turn back now!</div>
      <Link
        to={redirectPath}
        className="link_403 d-block text-center btn btn-primary"
      >
        {" "}
        Go To{" "}
        {user.role === "admin" || user.role === "admin"
          ? "Dashboard Page"
          : user.role === "user" && "Home Page"}
      </Link>
    </div>
  );
}

export default Forbidden;
