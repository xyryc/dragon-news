import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-md shrink-0 rounded-md p-10">
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <div className="border-b-[1px] mt-8"></div>
        <form className="card-body">
          {/* name input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>

          {/* photo url */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter your photo url"
              className="input input-bordered"
              required
            />
          </div>

          {/* email input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
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
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            {/* <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label> */}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-md">Register</button>
          </div>
        </form>
        <p className="2xl:font-semibold text-center">
          {`Already Have An Account? `}
          <Link className="text-red-500" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
