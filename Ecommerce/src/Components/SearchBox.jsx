import React from 'react'
import { CiSearch } from "react-icons/ci";


function SearchBox() {
    return (


        <>

            {/* searchBar start here */}
            <div className="search w-full flex justify-center items-center text-center border-2 rounded-md h-16 mt-2 m-2 ">
                <input type="text" placeholder="Search products..." className="w-full px-2 h-10 m-5 py-2 text-gray-700 border-none focus:outline-none" />
                <button className='p-2 flex ' >
                    <CiSearch size={30} className='text-gray-300 ml-2  ' />    &nbsp; <i className="fas fa-caret-down"></i>  &nbsp;
                </button>

            </div>
            {/* searchBar end here */}
        </>
    )
}

export default SearchBox
