import React, { useEffect, useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { TiArrowSortedDown } from "react-icons/ti";
import { MyContext } from '../App'; // Import the context

const CountryDropDwon = ({ onClick, location }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    onClick(); // Call the passed onClick function if necessary
  };

  const handleCountrySelect = (country) => {
    // Handle country selection
    console.log('Selected Country:', country);
    // You can set the selected country to state or do something else
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative">
      <Button
        onClick={toggleDropdown} // Toggle dropdown
        className='flex flex-col m-2 text-gray-400 border-2 p-2 rounded-lg hover:bg-slate-200 w-40'
      >
        <span className='font-semibold text-sm flex justify-center items-center'>
          Your Location 
          <TiArrowSortedDown className='m-2' />
        </span>
        <span className='flex-start'>
  {location 
    ? (location.length > 5 
        ? location.substr(0, 5) + '....' // Truncate the string after 5 characters
        : location) 
    : 'Select Location' // Display 'Select Location' if location is empty or null
  }
</span>

      </Button>

      {/* Dropdown Menu */}
     
    </div>
  );
};

export default CountryDropDwon;
