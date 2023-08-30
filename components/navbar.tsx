import React from "react";

const Navbar = () => {
  return (
    <div className=" flex justify-between py-4 border-b-2 ">
      <h2 className="text-xl font-bold">CarHub</h2>
      <ul className="flex gap-4">
        <li>About us</li>
        <li>Signup</li>
      </ul>
    </div>
  );
};

export default Navbar;
