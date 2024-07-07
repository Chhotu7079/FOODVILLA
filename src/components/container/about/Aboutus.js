import React from "react";
import { Link, Outlet } from "react-router-dom";
import reactLogo from "../../../images/reactLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../../Slice/ProfileSlice";
const Aboutus = () => {
  const profile = useSelector((store) => store.profile.profileStatus);
  const dispatch = useDispatch();
  return (
    <div className="min-h-[90vh]">
      <div className=" w-[100%] bg-[#406E00] text-white flex flex-col justify-center items-center rounded-b-lg h-20 mb-4">
        <h1 className=" text-2xl sm:text-5xl font-bold">About Website</h1>
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between lg:mx-3  ">
        <div className=" w-full sm:w-[60%] h-[100%] text-xl text-justify px-5">
          <ul className="list-disc">
            <li>
              Developed a dynamic web application using ReactJS, ReduxJS, and
              Tailwind CSS, showcasing proficiency in modern front-end
              technologies.
            </li>
            <li>
              Implemented over 10 components, each serving a specific function,
              resulting in a modular and scalable codebase.
            </li>
            <li>
              Integrated RESTful APIs from Swiggy seamlessly incorporate
              real-time data, enhancing the user experience with up-to-date
              information.
            </li>
            <li>
              Leveraged ReduxJS for efficient state management, ensuring
              predictable and centralized data flow throughout the application.
            </li>
            <li>
              Crafted custom hooks to encapsulate logic and promote code
              reusability and Incorporated preexisting hooks to streamline
              development and adhere to best practices.
            </li>
            <li>
              Implemented robust routing mechanisms, enhancing navigation within
              the application and providing a smooth user journey.
            </li>
            <li>
              Engineered a sophisticated search feature, allowing users to
              efficiently locate and access relevant content within the
              application. Engineered a sophisticated search feature, allowing
              users to efficiently locate and access relevant content within the
              application.
            </li>
            <li>
              Utilized Tailwind CSS to create a responsive and visually
              appealing user interface, ensuring a consistent experience across
              various devices.
            </li>
          </ul>
        </div>
        <div className="">
          <img src={reactLogo} alt="React Logo" />{" "}
        </div>
      </div>
      <div className="flex justify-center items-center mt-2 mb-4">
        {profile ? (
          <Link
            to="/aboutus"
            onClick={() => {
              dispatch(changeProfile());
            }}
          >
            <button className="rounded-lg bg-[#406E00] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#3d4630] transition-all hover:shadow-lg hover:shadow-[#181F1C] hover:bg-[#181F1C]">
              Hide Profile
            </button>
          </Link>
        ) : (
          <Link
            to="/aboutus/profile"
            onClick={() => {
              dispatch(changeProfile());
            }}
          >
            <button className="rounded-lg bg-[#406E00] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#3d4630] transition-all hover:shadow-lg hover:shadow-[#181F1C] hover:bg-[#181F1C]">
              Show Profile
            </button>
          </Link>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Aboutus;
