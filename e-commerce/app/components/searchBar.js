'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Search = ({ initialSearchTerm }) => {
  const [searchValue, setSearchValue] = useState(initialSearchTerm || '');
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    router.push(`/?search=${value}`); // This will preserve the search term in the URL
  };

  return (
    <div className="flex justify-center mt-5"> 
    <input
      type="text"
      value={searchValue}
      onChange={handleChange}
      placeholder="Search products..."
      className="text-center border rounded-lg h-9 sm:w-56 md:w-96 lg:w-96"
    />
  </div>
  
  );
};

export default Search;
