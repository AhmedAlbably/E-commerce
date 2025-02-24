import { useSelector } from "react-redux";
import "./Home.scss";
import Aside from "../../components/Home/Aside/Aside";

function Home() {
  const {email}= useSelector((state) => state.resetDataPass)
  console.log(email)
  return <div>
    <Aside/>
  </div>;
}

export default Home;
