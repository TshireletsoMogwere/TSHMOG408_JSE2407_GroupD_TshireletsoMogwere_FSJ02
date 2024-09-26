

const Sort = ({ sortOrder, onSortChange }) => {
  return (
    <select value={sortOrder} onChange={onSortChange}>
      <option value="default">Sort by Default</option>
      <option value="lowToHigh">Price: Low to High</option>
      <option value="highToLow">Price: High to Low</option>
    </select>
  );
};

export default Sort;
