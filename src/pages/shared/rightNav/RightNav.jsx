import { FaGoogle, FaGithub } from "react-icons/fa";

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

      <div>
      <h2 className="text-2xl mb-3">Find Us On</h2>

      </div>
    </div>
  );
};

export default RightNav;
