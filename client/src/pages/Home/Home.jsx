import { useSelector } from "react-redux";
import "./Home.scss";

function Home() {
  const {email}= useSelector((state) => state.email)
  console.log(email)
  return <div>Home</div>;
}

export default Home;
