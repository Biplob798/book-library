import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaTwitter,
} from "react-icons/fa";
import logo from "../../assets/images/logo (2).png";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="footer flex justify-center items-center bg-[#603814] text-white p-4 my-6 gap-6">
          {/* left side  */}
          <div className="flex-[1] ">
            <img className="h-16" src={logo} alt="" />
            <p className="text-base font-semibold">Book Library</p>
            <p className="text-sm font-light">
              Cultivating Knowledge, One Page at a Time: Your Gateway to
              Infinite Worlds
            </p>

            <p>Get in Touch</p>

            <div className="flex justify-center items-center gap-2">
              <FaLocationArrow></FaLocationArrow>
              <p>72, Wall street, King Road, Dhaka</p>
            </div>
          </div>
          <div className="flex-[1] justify-center items-center gap-6 border-y-2 p-4 text-2xl">
            <FaFacebook></FaFacebook>
            <FaTwitter></FaTwitter>
            <FaInstagram></FaInstagram>
            <FaLinkedin></FaLinkedin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
