import React from "react";

const Footer = () => {
  return <div className="flex justify-between flex-wrap my-4 border-t-2 pt-4">
    <div>
      <div className="font-bold">Carhub</div>
      <div>Carhub2023</div>
      <div>All right reservered @ Arvind.corp</div>
    </div>
    <div>
      <div  className="font-bold">About</div>
      <div>
        <li>How it works</li>
        <li>Featured</li>
        <li>Parternship</li>
        <li>Bussiness Relation</li>
      </div>
    </div>
    <div>
      <div  className="font-bold">Company</div>
      <div>
        <li>Events</li>
        <li>Blog</li>
        <li>Podcast</li>
        <li>Invite a friend</li>
      </div>
    </div>
  </div>
};

export default Footer;
