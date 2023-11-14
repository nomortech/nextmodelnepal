import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="flex justify-between  items-center h-24 max-w-[1240px] mx-auto px-4 text-black">
      <Link to="/" className="w-full text-3xl font-bold text-blue-600">
        Next Model Nepal    </Link>
      <ul className="hidden md:flex">
        <Link to="/" className="p-4">
          Home
        </Link>
        <Link to="/contact" className="p-4">
          Contact
        </Link>
        <Link to="/admin" className="p-4">
          Dashboard
        </Link>

        <Link
          to="/signup"
          className="p-4 text-center font-medium rounded-md w-24 px-3 text-white bg-blue-600"
          style={{
            height: '40px',
            paddingTop: '9px',
            marginTop: '6px',
          }}
        >
          SignUp
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;