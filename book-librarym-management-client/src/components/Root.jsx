import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto my-4 bg-white">
      <Header />
      <Outlet />
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default Root;
