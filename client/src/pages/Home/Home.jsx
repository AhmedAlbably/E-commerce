import { useSelector } from "react-redux";
import "./Home.scss";
import Aside from "../../components/Home/Aside/Aside";
import Footer from "../../components/Footer/Footer";
import MainSection from "../../components/Home/Main/MainSection";

function Home() {
  const {email}= useSelector((state) => state.resetDataPass)
  console.log(email)
  return <div>
    <Aside/>
    <MainSection/>
    <Footer/>
  </div>;
}

export default Home;
