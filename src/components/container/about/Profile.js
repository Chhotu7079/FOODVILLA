import React from "react";
import { Link } from "react-router-dom";

class Profile extends React.Component {
  render() {
    return (
      <div className="flex flex-row justify-around items-center bg-[#406E00] h-16 text-white font-semibold text-lg">
        <Link
          to="https://www.linkedin.com/in/chhotu-kumar-2821ba227/"
          className=" px-4 py-2 rounded-lg hover:shadow-sm hover:shadow-[#181F1C] hover:bg-[#181F1C]"
        >
          LinkedIn
        </Link>
        <Link
          to="https://github.com/Chhotu7079"
          className=" px-4 py-2 rounded-lg hover:shadow-sm hover:shadow-[#181F1C] hover:bg-[#181F1C]"
        >
          GitHub
        </Link>
      </div>
    );
  }
}

export default Profile;
