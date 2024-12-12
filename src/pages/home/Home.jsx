import Header from "../shared/header/Header";
import LeftNavbar from "../shared/leftNavbar/LeftNavbar";
import Navbar from "../shared/navbar/Navbar";
import RightNav from "../shared/rightNav/RightNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>

      <div className="grid grid-cols-1  md:grid-cols-4 gap-6">
        <div className="border">
          <LeftNavbar></LeftNavbar>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl">News coming soon.</h2>
        </div>
        <div className="border">
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
