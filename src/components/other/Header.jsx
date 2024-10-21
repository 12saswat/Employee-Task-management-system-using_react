import React, { useState } from "react";
import { setLocalStorage } from "../../utils/LocalStorage";

const Header = (props) => {
  // const [username, setUserName] = useState("");
  // if (!data) {
  //   setUserName("Admin");
  // } else {
  //   setUserName(data.firstName);
  // }

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
    // window.location.reload();
  };
  return (
    <div className="flex items-end justify-evenly">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">saswat 🖐️</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-500 text-lg text-white font-medium px-5 py-2 rounded-sm"
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
