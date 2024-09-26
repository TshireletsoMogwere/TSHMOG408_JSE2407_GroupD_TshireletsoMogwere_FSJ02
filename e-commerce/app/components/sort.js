'use client';

import { useRouter } from 'next/navigation';

const Sort = ({ sortOrder }) => {
  const router = useRouter();

  const handleSortChange = (e) => {
    const order = e.target.value;
    // Update URL with the selected sort order while preserving other parameters
    const url = new URL(window.location.href);
    url.searchParams.set('sort', order);
    router.push(url.toString());
  };

  return (
    <select value={sortOrder} onChange={handleSortChange}>
      <option value="default">Default</option>
      <option value="lowToHigh">Price: Low to High</option>
      <option value="highToLow">Price: High to Low</option>
    </select>
  );
};

export default Sort;
