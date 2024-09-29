import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';  // Make sure to import your components
import Headers from './Components/Header.jsx';
import axios from 'axios';

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    getCountry('https://countriesnow.space/api/v0.1/countries/');
  }, []);

  const getCountry = async (url) => {
    try {
      const response = await axios.get(url);
      setCountryList(response.data.data);
    } catch (err) {
      setError('Failed to fetch countries'); // Set error message
      console.error(err);
    } finally {
      setLoading(false); // Set loading to false once API call is complete
    }
  };

  const value = {
    countryList,
    loading,
    error,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={value}>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here as needed */}
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext }; // Export the context so you can use it in other components.
