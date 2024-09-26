

const Filter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <select value={selectedCategory} onChange={onCategoryChange}>
      {categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default Filter;
