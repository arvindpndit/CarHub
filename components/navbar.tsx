import React from "react";

const Navbar = () => {
  return (
    <div className=" flex justify-between p-4 border-b-2 ">
      <h2 className="text-3xl">Carhub</h2>
      <ul className="flex gap-4">
        <li>About us</li>
        <li>Profile</li>
        <li>Signup</li>
      </ul>
    </div>
  );
};

export default Navbar;
