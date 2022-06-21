import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  const [activeTab, setActiveTab] = useState(true);

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="max-w-[500px] mx-auto my-4 p-4 text-white ">
      <h1 className="text-center text-4xl font-semibold mb-8">Profile</h1>
      <ul className=" text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow flex dark:divide-gray-700 dark:text-gray-400">
        <li className="w-full">
          <a
            href="#"
            className={`inline-block py-4 px-8 w-full  bg-gray-100 rounded-l-lg dark:hover:text-white ${
              activeTab
                ? "dark:bg-gray-700 dark:text-white"
                : "dark:bg-gray-800 dark:hover:bg-gray-700"
            }  `}
            aria-current="page"
            onClick={() => {
              setActiveTab((prev) => !prev);
            }}
          >
            User Details
          </a>
        </li>

        <li className="w-full">
          <a
            href="#"
            className={`inline-block py-4 px-8 w-full bg-white rounded-r-lg hover:text-gray-700  dark:hover:text-white ${
              !activeTab
                ? "dark:bg-gray-700 dark:text-white"
                : "dark:bg-gray-800 dark:hover:bg-gray-700"
            } `}
            onClick={() => {
              setActiveTab((prev) => !prev);
            }}
          >
            History
          </a>
        </li>
      </ul>

      {/**
       * Feature to be added:
       *
       * Store User name in firestore and display here
       *
       * JSX given below
       */}
      {/* <div className="name text-lg pl-4 mt-8">
        <span className="inline-block w-24 text-right ">Full Name :</span>
        <span className="pl-2">Guest User {user.displayName}</span>
      </div> */}

      <div className="email text-lg pl-4 mt-4">
        <span className="pl-2">Email :</span>
        <span className="pl-2">{user.email}</span>
      </div>
      <button
        type="button"
        className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 w-full sm:max-w-[150px] sm:ml-6 mt-8"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
