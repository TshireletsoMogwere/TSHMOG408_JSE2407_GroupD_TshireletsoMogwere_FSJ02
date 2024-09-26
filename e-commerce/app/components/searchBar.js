

const Search = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search by title"
      value={searchTerm}
      onChange={onSearchChange}
    />
  );
};

export default Search;
