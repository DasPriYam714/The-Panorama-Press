import { Link } from "react-router";
import Navbar from "../../shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const Login = () => {
    const{loginUser}=useContext(AuthContext)
    const handleLogin =(e)=>{
        e.preventDefault();
        const login = new FormData(e.currentTarget)
        const email = login.get('email')
        const password = login.get('password')
        console.log(login.get('email'))

        // user login
        loginUser(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .then(error=>{
            console.log(error)
        }
        )
    }
  return (
    <div>
      <Navbar></Navbar>

      <div className="w-1/2 mx-auto mt-5">
        <h2 className="text-2xl text-center font-semibold">Please Login</h2>

        <div>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="text-center">
            <p>Do not have an account? <Link className="text-blue-600" to={'/register'}>Register</Link></p>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Login;
