import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import QzPic1 from '../../../assets/swimming.png'
import QzPic2 from '../../../assets/class.png'
import QzPic3 from '../../../assets/playground.png'

const RightNav = () => {
  return (
    <div>
      <div className="p-4">
        <h2 className="text-2xl mb-3">Login With</h2>

        <button className="btn btn-outline w-full text-blue-600 mb-2">
          <FaGoogle></FaGoogle>
          Signin with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Signin with GitHub
        </button>
      </div>

      <div className="p-4">
        <h2 className="text-2xl mb-3">Find Us On</h2>
        <a
          className="flex p-4 items-center text-lg border rounded-t-lg"
          href=""
        >
          <FaFacebookF className="text-blue-700"></FaFacebookF>
          <span className="pl-2">Facebook</span>
        </a>
        <a className="flex p-4 items-center text-lg border-x" href="">
          <FaTwitter className="text-blue-500"></FaTwitter>
          <span className="pl-2">Twitter</span>
        </a>
        <a
          className="flex p-4 items-center text-lg border rounded-b-lg"
          href=""
        >
          <FaInstagram className=" bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]"></FaInstagram>
          <span className="pl-2">Instagram</span>
        </a>
      </div>
      <div className="flex flex-col p-4 items-center">
      <h2 className="text-2xl mb-3">Q-Zone</h2>
      <div>
        <img src={QzPic1} alt="" />
      </div>
      <div>
        <img src={QzPic2} alt="" />
      </div>
      <div>
        <img src={QzPic3} alt="" />
      </div>

      </div>
    </div>
  );
};

export default RightNav;
