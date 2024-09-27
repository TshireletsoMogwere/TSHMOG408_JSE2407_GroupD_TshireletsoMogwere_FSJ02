"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

/**
 * Search component allows users to search for products.
 * It updates the URL with the current search term whenever the input changes.
 *
 * @param {Object} props - The component props.
 * @param {string} props.initialSearchTerm - The initial search term to pre-fill the input (optional).
 * @returns {JSX.Element} The rendered search input component.
 */

const Search = ({ initialSearchTerm }) => {
  const [searchValue, setSearchValue] = useState(initialSearchTerm || "");
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    router.push(`/?search=${value}`);
    {
      /*This will preserve the search term in the URL*/
    }
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
