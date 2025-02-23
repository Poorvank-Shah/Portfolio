import React from "react";

const Footer = () => {
  return (
    <footer className="flex border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-0 text-white">
      <div className="p-4 w-full sm:p-8 flex justify-between items-center">
        <p className="sm:text-2xl" style={{ fontFamily: "cursive" }}>Poorvank Shah</p>
        <p className="text-slate-600 text-sm sm:text-base ">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
