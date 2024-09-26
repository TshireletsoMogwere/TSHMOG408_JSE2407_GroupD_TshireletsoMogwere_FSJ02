'use client';

import { useRouter } from 'next/navigation';

const Filter = ({ categories, selectedCategory }) => {
  const router = useRouter();

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    // Update URL with the selected category while preserving other parameters
    const url = new URL(window.location.href);
    url.searchParams.set('category', category);
    router.push(url.toString());
  };

  return (
    <select value={selectedCategory} onChange={handleCategoryChange}>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default Filter;
