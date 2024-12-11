import { Link } from "react-router";
import Navbar from "../../shared/navbar/Navbar";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log(form.get("name"));
  };
  return (
    <div>
      <Navbar></Navbar>

      <div className="w-1/2 mx-auto mt-5">
        <h2 className="text-2xl text-center font-semibold">Please Register</h2>

        <div>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                name="name"
                className="input input-bordered"
                required
              />
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Enter photo URL"
                name="photoURL"
                className="input input-bordered"
                required
              />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label flex ">
                <input type="checkbox" />
                <p className="pl-2">
                  accept{" "}
                  <span className="font-semibold">Terms and Conditions</span>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="text-center">
            <p>
              Already have an account?
              <Link className="pl-2 text-blue-600" to={"/login"}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
