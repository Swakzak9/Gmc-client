import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdCancel } from "react-icons/md"; 
import { CiMenuFries } from "react-icons/ci"; 

function Header() {
  const isUserSignedIn = !!localStorage.getItem('token'); // Correct case
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogOut = () => { // Use const to define the function
    localStorage.removeItem('token');
    navigate('/home');
  };

  return (
    <>
      <header className="bg-green-500 ps-7 text-white">
        <div className="relative">
          <img src="./images/university-education-logo-design-template-free-vector.jpg" alt="" width="70px" />
          <p className="text-pt-5 ml-2 font-sans text-xl">Zayd's University</p>
        </div>

        <button 
          className="md:hidden border bg-slate-50 border-green-500 rounded-lg p-2 text-green-500 text-xl absolute right-1 top-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <MdCancel /> : <CiMenuFries />}
        </button>

        <nav className={`w-full ${isOpen ? "block" : "hidden"} md:flex`}> 
          <ul className="md:flex space-x-12 ml-80 text-lg font-semibold xs:hidden">
            {isUserSignedIn ? (
              <>
                <li>
                  <NavLink to='/biodata'>Profile</NavLink>
                </li>
                <li className='border-y ml-28 md:border-none'>
                  <button onClick={handleLogOut}>Sign Out</button>
                </li>
              </>
            ) : (
              <>
                <li className='border-y ml-28 md:border-none'>
                  <NavLink to='/home'>Home</NavLink>
                </li>
                <li className='pl-12 border-y md:border-none'>
                  <NavLink to='/signup'>Signup</NavLink>
                </li>
                <li className='pl-9 border-y md:border-none'>
                  <NavLink to='/login'>Login</NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
