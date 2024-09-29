import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assests/img/logo.png';
import CountryDropDwon from './CountryDropDwon';
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import SearchBox from './SearchBox';
import SubNabar from './SubNabar';
import LocationMenu from './LocationMenu';
import { MyContext } from '../App';

function Header() {
    const context = useContext(MyContext);
    const [countryDropMenu, setCountryDropDwon] = useState(false);
    const [location, setLocation] = useState('');

    const toggleCountryDropdown = () => {
        setCountryDropDwon(!countryDropMenu);
    };

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const hideLocationMenu = () => {
        setCountryDropDwon(false); // Hide the menu when an option is selected
    };

    return (
        <>
            {/* Top Notification Banner */}
            <div className="headerWrapper bg-blue-500 py-3 text-white text-center">
                <h3 className="font-semibold">
                    Due to the COVID-19 epidemic, orders may be processed with a slight delay.
                </h3>
            </div>

            {/* Main Header */}
            <div className="header py-4 bg-white shadow-md p-8">
                <div className="container mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img className="w-36" src={logo} alt="logo" />
                    </Link>

                    {/* Country Dropdown */}
                    {context.countryList.length !== 0 && (
                        <div className="hidden sm:block relative">
                            <CountryDropDwon location={location} onClick={toggleCountryDropdown} />
                            {countryDropMenu && (
                                <LocationMenu
                                    location={location}
                                    setLocation={setLocation}
                                    handleLocationChange={handleLocationChange}
                                    hideMenu={hideLocationMenu}
                                />
                            )}
                        </div>
                    )}

                    {/* Search Box */}
                    <div className="flex-grow mx-6">
                        <SearchBox />
                    </div>

                    {/* User Actions (Profile, Login, Cart) */}
                    <div className="flex items-center gap-6">
                        <Link to="/profile">
                            <CgProfile size={28} className="text-gray-500 hover:text-blue-500 transition" />
                        </Link>
                        <Link to="/login">
                            <button className="bg-gray-100 hover:bg-blue-500 hover:text-white transition text-gray-500 px-4 py-2 rounded-md">
                                Login
                            </button>
                        </Link>
                        <div className="relative flex items-center">
                            <span className="text-lg font-semibold text-red-500">$200.55</span>
                            <Link to="/cart">
                                <button className="ml-4 relative p-2 rounded-full bg-gray-100 hover:bg-blue-500 text-red-500 border-2 border-blue-500 transition">
                                    <FaCartShopping size={20} />
                                    <span className="absolute top-0 right-0 text-xs text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">1</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            {/* Sub Navigation Bar */}
            <SubNabar />
            </div>

        </>
    );
}

export default Header;
