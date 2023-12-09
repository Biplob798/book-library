import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  {
    (" ");
  }
  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-amber-800 underline font-bold text-base"
              : " font-semibold "
          }
          to="/"
        >
          {" "}
          Home{" "}
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-amber-800 underline font-bold text-base"
              : " font-semibold "
          }
          to="/addBook"
        >
          {" "}
          AddBook{" "}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-amber-800 underline font-bold text-base"
              : " font-semibold "
          }
          to="/about"
        >
          {" "}
          About Us{" "}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-amber-800 underline font-bold text-base"
              : " font-semibold "
          }
          to="/allBook"
        >
          {" "}
          AllBook{" "}
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-amber-800 underline font-bold text-base"
              : " font-semibold "
          }
          to="/borrowedBook"
        >
          {" "}
          BorrowedBook{" "}
        </NavLink>
      </li>
      <li>
        {user?.email ? (
          ""
        ) : (
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-amber-800 underline font-bold text-base"
                : " font-semibold "
            }
            to="/login"
          >
            {" "}
            Login{" "}
          </NavLink>
        )}
      </li>
    </>
  );
  return (
    <div>
      {" "}
      <div className="navbar bg-[#603814] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#603814] text-white rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Book Library</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        {/* avatar part  */}

        <div className="navbar-end">
          {user?.email ? (
            <div className="flex justify-center items-center">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt={user?.displayName} />
                </div>
              </label>
              <ul className="flex justify-center items-center gap-1  mt-2 z-[1] p-2  bg-[#603814] h-16 text-white">
                <li>
                  <button className="text-center btn btn-outline text-white rounded-full">
                    {user?.displayName}
                  </button>
                </li>
                <li>
                  <button
                    onClick={logOut}
                    className="text-center btn btn-outline text-white rounded-full"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
