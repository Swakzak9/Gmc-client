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
    navigate('/');
  };

  return (
    <>
      <header className="bg-slate-500 p-7 h-24 flex text-white sticky top-0 z-10">
        <div className="relative flex">
       <NavLink to='/'> <img src="./images/university-education-logo-design-template-free-vector.jpg" alt="" width="70px" /></NavLink>
        <p className="text-pt-3 ml-2 font-sans text-xl">Zayd's University</p>
        </div>

        <button 
          className="md:hidden border bg-slate-50 border-green-500 rounded-lg p-2 text-green-500 text-xl absolute right-1 top-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <MdCancel /> : <CiMenuFries />}
        </button>

        <nav className={`w-full ${isOpen ? "block" : "hidden"} md:flex`}> 
         <ul className="md:flex space-x-8 ml-80 text-[10px] md:text-lg text-white font-semibold xs:hidden">
 
        {isUserSignedIn ? (
            <>
              <li>
                  <NavLink to='/biodata'>Profile</NavLink>
             </li>

              <li className='border-y- ml-28 md:border-none'>
                  <button onClick={handleLogOut}>Sign Out</button>
             </li>
              </>
            ) : (
              <>
                <li className='border-y ml-28 md:border-none'>
                  <NavLink to='/'>Home</NavLink>
                </li>
                <li className='pl-12 border-y md:border-none'>
                  <NavLink to='/signup'>Signup</NavLink>
                </li>
                <li className='pl-9 border-y md:border-none'>
                  <NavLink to='/login'>Login</NavLink>
                </li>
                <li className='pl-4  border-y md:border-none'>
                  <NavLink to='/courses'>Courses</NavLink>
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
