'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter(); // Use router to manipulate the URL

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    // Update the URL with the search term
    router.push(`/?search=${value}`); // This will trigger a re-fetch in Home
  };

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleChange}
      placeholder="Search products..."
    />
  );
};

export default Search;
