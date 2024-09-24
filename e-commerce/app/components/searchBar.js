'use client'
import {useState} from "react";
import { FaSearch } from "react-icons/fa";
export default function Search({onSearch}) {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
      e.preventDefault();
      onSearch(search);
    };


  return (
    <form onSubmit={handleSearch} className="flex justify-center mt-10">
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="align-middle text-center  border rounded-lg h-9 sm:w-56  md:w-96 lg:w-96"
      />
       <button type="submit" className="relative -left-7 top-1">
      <FaSearch />
      </button>
    </form>
  );
}
