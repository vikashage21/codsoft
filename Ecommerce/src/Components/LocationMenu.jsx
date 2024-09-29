import React, { useState, useContext } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa"; // Importing the search icon
import { TbZoomCancelFilled } from "react-icons/tb";
import { MyContext } from '../App'; // Import your context

const LocationMenu = ({ hideMenu, location, setLocation }) => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const { countryList } = useContext(MyContext); // Use context to access countryList

    const [countryList2, setCountryList2] = useState(countryList); // Initialize with countryList

    // Handle country selection
    const handleLocationSelect = (selectedLocation) => {
        setLocation(selectedLocation); // Update the location in context
        hideMenu(); // Hide the menu when a location is selected
        setDropdownOpen(false); // Close the dropdown
    };

    // Handle cancel button to clear location
    const handleCancel = () => {
        setLocation(''); // Clear the location
        hideMenu(); // Hide the menu
    };

    // Filter the country list based on user input
    const filterList = (e) => {
        const keywords = e.target.value;
        setLocation(keywords); // Update the location in input
        const filteredList = countryList.filter((item) =>
            item.country.toLowerCase().includes(keywords.toLowerCase())
        );
        setCountryList2(filteredList); // Update the filtered list
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-5 rounded-lg shadow-lg border border-gray-300 max-w-sm w-full mx-4">
                {/* Cancel Button */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className='font-semibold text-center flex-grow'>Choose Your Delivery Location</h2>
                    <button
                        onClick={handleCancel}
                        className="text-black rounded-full p-2 hover:text-red-400 transition"
                    >
                        <TbZoomCancelFilled size={20} />
                    </button>
                </div>

                <p className='text-sm text-center mb-4'>Enter your address to specify the offers for your area.</p>

                <div className="relative mb-3">
                    <FaSearch className="absolute left-3 top-2.5 text-gray-400" /> {/* Search icon */}
                    <input
                        type="text"
                        list='suggestions'
                        value={location}
                        onChange={filterList} // Call filterList to update location and countryList2
                        placeholder='Search your location'
                        className="border-2 border-blue-500 focus:outline-none focus:border-blue-700 rounded-lg p-2 pl-10 w-full"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                hideMenu(); // Hide the menu when Enter is pressed
                            }
                        }}
                    />
                    <datalist id='suggestions'>
                        {
                            countryList2.map((item) => (
                                <option  key={item.country} value={item.country}>
                                    {item.country}
                                </option>
                            ))
                        }
                    </datalist>
                </div>

                <div className="relative">
                    <button
                        onClick={() => setDropdownOpen(!isDropdownOpen)}
                        className="w-full flex justify-between items-center bg-blue-200 rounded-md p-2 mb-2"
                    >
                        <span>Select Country</span>
                        <CiLocationOn className="ml-2" size={16} />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute z-10 bg-white border border-gray-300 rounded-md w-full max-h-60 overflow-y-auto">
                            {countryList.length !== 0 && countryList.map((country) => (
                                <div
                                    key={country.country}
                                    className="cursor-pointer p-2 hover:bg-blue-100"
                                    onClick={() => handleLocationSelect(country.country)} // Select country
                                >
                                    {country.country} {/* Display the country name */}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <p className="mt-3 text-lg font-semibold text-blue-600 text-center">
                    Selected Location: {location || 'None'}
                </p>
            </div>
        </div>
    );
};

export default LocationMenu;
