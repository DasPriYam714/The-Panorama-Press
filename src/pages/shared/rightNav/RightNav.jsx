import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";


const RightNav = () => {
  return (
    <div>
      <div className="p-4">
        <h2 className="text-2xl mb-3">Login With</h2>

        <button className="btn btn-outline w-full text-blue-600 mb-2">
          <FaGoogle></FaGoogle>
          Signin  with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Signin  with GitHub
        </button>
      </div>

      <div className="p-4">
      <h2 className="text-2xl mb-3">Find Us On</h2>
      <a className="flex p-4 items-center text-lg border rounded-t-lg" href="">
        <FaFacebookF className="text-blue-700"></FaFacebookF>
        <span className="pl-2">Facebook</span>

      </a>
      <a className="flex p-4 items-center text-lg border-x" href="">
        <FaTwitter className="text-blue-500"></FaTwitter>
        <span className="pl-2">Twitter</span>

      </a>
      <a className="flex p-4 items-center text-lg border rounded-b-lg" href="">
        <FaInstagram className="text-orange-500"></FaInstagram>
        <span className="pl-2">Instagram</span>

      </a>

      </div>
    </div>
  );
};

export default RightNav;
