import logo from "../../assets/images/logo (2).png";
import DarkMode from "../DarkMode";
import Navbar from "./navbar/Navbar";

const Header = () => {
  return (
    <div>
      <div
        className="flex
       justify-center items-center border gap-4"
      >
        <img className="h-16" src={logo} alt="" />
        <DarkMode></DarkMode>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
