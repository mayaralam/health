import { Link, useNavigate } from "react-router-dom";
export default function nav() {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="../health">Services</Link>
              </li>
              <li>
                <Link to="../about">About</Link>
              </li>
              <li>
                <Link to="../contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className=" flex items-center">
            <div className="md:w-10 h-10 w-20 flex items-center justify-center rounded-xl bg-blue-500 dark:bg-blue-400 text-white dark:text-black  shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="1.5"
                >
                  <path d="M12 5.5C7.5.826 2 4.275 2 9.138s4.02 7.454 6.962 9.774C10 19.729 11 20.5 12 20.5" />
                  <path
                    d="M12 5.5C16.5.826 22 4.275 22 9.138s-4.02 7.454-6.962 9.774C14 19.729 13 20.5 12 20.5"
                    opacity="0.5"
                  />
                </g>
              </svg>
            </div>
            <a className="btn btn-ghost text-lg">HealthCare Plus</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="../health">Services</Link>
            </li>
            <li>
              <Link to="../about">About</Link>
            </li>
            <li>
              <Link to="../contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-3 items-center">
          <a
            onClick={() => navigate("/login")}
            className="btn py-2 px-4 cursor-pointer text-gray-500 dark:text-gray-300 bg-white dark:bg-black rounded-lg"
          >
            Sign In
          </a>
          <a
            onClick={() => navigate("/health")}
            className="btn py-2 px-4 cursor-pointer  bg-blue-500 dark:bg-blue-400 text-white dark:text-black rounded-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </>
  );
}
