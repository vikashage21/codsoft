import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CiMenuBurger } from "react-icons/ci";
import { FaArrowDown } from "react-icons/fa6";
import { FaHome, FaTshirt, FaLaptop, FaCogs, FaBook, FaInfoCircle, FaEnvelope } from 'react-icons/fa'; // Changed FaGadget to FaCogs

function SubNabar() {
    return (
        <div className='flex  items-center m-5'>
            {/* All Categories Button */}
            <Button className="hover:bg-blue-200 transition-colors flex text-center justify-center gap-2 bg-blue-300 p-2 m-2 text-white text-sm font-semibold rounded-md">
                <CiMenuBurger /> All Categories <FaArrowDown />
            </Button>

            {/* Navigation Links */}
            <ul className='flex gap-6 font-semibold btn-categories justify-center text-center mx-auto'>
                <li className='flex items-center hover:text-blue-300 transition-colors'>
                    <FaHome className="mr-1" /> 
                    <Link to={'/Home'}>Home</Link>
                </li>
                <li className='flex items-center hover:text-blue-300 transition-colors'>
                    <FaTshirt className="mr-1" />
                    <Link to={'/Fashion'}>Fashion</Link>
                </li>
                <li className='flex items-center hover:text-blue-300 transition-colors'>
                    <FaLaptop className="mr-1" />
                    <Link to={'/Electronics'}>Electronics</Link>
                </li>
                <li className='flex items-center hover:text-blue-300 transition-colors'>
                    <FaCogs className="mr-1" /> {/* Replaced FaGadget with FaCogs */}
                    <Link to={'/Gadgets'}>Gadgets</Link>
                </li>
                <li className='flex items-center hover:text-blue-300 transition-colors'>
                    <FaBook className="mr-1" />
                    <Link to={'/Books'}>Books</Link>
                </li>
                <li className='flex items-center hover:text-blue-300 transition-colors'>
                    <FaInfoCircle className="mr-1" />
                    <Link to={'/About'}>About</Link>
                </li>
                <li className='flex items-center hover:text-blue-300 transition-colors'>
                    <FaEnvelope className="mr-1" />
                    <Link to={'/Contact'}>Contact</Link>
                </li>
            </ul>
        </div>
    );
}

export default SubNabar;
