import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const handleShowNav = () => {
    setShowNav((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <header className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <div
        className="w-full  font-bold text-[#14b8a6] "
        onClick={() => {
          navigate("/");
        }}
      >
        FRONTEND-PREP
      </div>
      <ul className="hidden md:flex">
        <li>
          <NavLink to="/" className="p-4">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="p-4">
            Leaderboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="p-4">
            Profile
          </NavLink>
        </li>
        {user ? (
          <li>
            <NavLink to="/login" onClick={handleLogout}>
              Logout
            </NavLink>
          </li>
        ) : (
          ""
        )}
      </ul>

      {showNav ? (
        <AiOutlineClose
          className="block md:hidden"
          size={24}
          onClick={() => handleShowNav()}
        />
      ) : (
        <AiOutlineMenu
          className="block md:hidden"
          size={24}
          onClick={() => handleShowNav()}
        />
      )}

      <div
        className={
          showNav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-700 bg-[#111827] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <div
          className="w-full  font-bold text-[#14b8a6] mt-5 p-4"
          onClick={() => {
            navigate("/");
          }}
        >
          FRONTEND-PREP
        </div>
        <div className="pt-2 uppercase">
          <NavLink to="/" className="block p-4 border-b border-b-gray-700">
            Home
          </NavLink>

          <NavLink to="/" className="block p-4 border-b border-b-gray-700">
            Leaderboard
          </NavLink>

          <NavLink to="/profile" className="block p-4">
            Profile
          </NavLink>
          {user ? (
            <NavLink
              className="block p-4 border-t border-t-gray-700"
              to="/login"
              onClick={handleLogout}
            >
              Logout
            </NavLink>
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
