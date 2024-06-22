import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpenReader,
  faClipboard,
  faClipboardCheck,
  faClipboardQuestion,
  faHouseChimney,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Navbutton = (props) => {
  return (
    <>
      <NavLink
        className={({ isActive }) => {
          return !isActive
            ? "my-1 w-[10%] sm:w-[18%] xl:w-[98%] h-full xl:h-[10%] flex justify-evenly items-center text-center xl:p-[8%] text-lg rounded-lg text-white hover:bg-white hover:bg-opacity-50"
            : "my-1 w-[10%] sm:w-[18%] xl:w-[98%] h-full xl:h-[10%] flex justify-evenly items-center bg-white bg-opacity-50 text-center xl:p-[8%] text-white text-lg rounded-lg";
        }}
        to={props.route}
      >
        <div className="w-full h-full flex justify-evenly items-center">
          <FontAwesomeIcon icon={props.icon} />
          <div className="">{props.name}</div>
        </div>
      </NavLink>
    </>
  );
};

const Navbar = ({ user }) => {
  return (
    <div className="w-[15%] h-[98%] bg-[#2196F3] rounded-xl flex flex-col items-center justify-evenly">
      <div className="w-full h-[10%] flex justify-evenly items-center">
        <FontAwesomeIcon
          icon={faBookOpenReader}
          className="text-white h-1/2 w-[30%]"
        />
        <div className="w-[68%] text-white text-xl truncate text-center">
          Hey, {user}
        </div>
      </div>
      <div className="w-full h-[88%] flex flex-col items-center justify-start ">
        <Navbutton icon={faHouseChimney} name="Dashboard" route="/dashboard" />
        <Navbutton
          icon={faClipboardQuestion}
          name="Add Questions"
          route="/addquestions"
        />
        <Navbutton
            icon={faClipboard}
            name="Add Test"
            route="/addtest"
        />
        <Navbutton
            icon={faClipboardCheck}
            name="Evaluate Results"
            route="/evaluatetest"
        />
      </div>
    </div>
  );
};

export default Navbar;
