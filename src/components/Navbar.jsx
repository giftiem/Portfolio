
import logo from "../assets/giftlogo.png"
import { FaLinkedin } from "react-icons/fa";
import {FaGithub } from "react-icons/fa";

const Navbar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
    <img className="mx-2 w-100" style={{ marginTop: "-55px" }} src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-7 text-2xl">
        <FaLinkedin />
        <FaGithub />
    </div>
  </nav>;
};

export default Navbar