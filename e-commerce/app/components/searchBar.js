import { FaSearch } from "react-icons/fa";

export default function Search({ searchTerm = '' }) {
  return (
    <form method="GET" action="/" className="flex justify-center mt-10">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        defaultValue={searchTerm} // Populate input with the current search term
        className="align-middle text-center border rounded-lg h-9 sm:w-56 md:w-96 lg:w-96"
      />
      <button type="submit" className="relative -left-7 top-1">
        <FaSearch />
      </button>
    </form>
  );
}
