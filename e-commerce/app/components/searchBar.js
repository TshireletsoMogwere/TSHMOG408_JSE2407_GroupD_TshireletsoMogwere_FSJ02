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
    <input
      type="text"
      value={searchValue}
      onChange={handleChange}
      placeholder="Search products..."
      className="border rounded p-2"
    />
  );
};

export default Search;
