"use client";

import { useRouter } from "next/navigation";

/**
 * Sort component allows users to select the sorting order for products.
 * It updates the URL with the selected sort order whenever the selection changes.
 *
 * @param {Object} props - The component props.
 * @param {string} props.sortOrder - The current sort order value, used to control the selected option.
 * @returns {JSX.Element} The rendered sorting dropdown component.
 */

const Sort = ({ sortOrder }) => {
  const router = useRouter();

  const handleSortChange = (e) => {
    const order = e.target.value;
    {
      /*Update URL with the selected sort order while preserving other parameters*/
    }
    const url = new URL(window.location.href);
    url.searchParams.set("sort", order);
    router.push(url.toString());
  };

  return (
    <select
      value={sortOrder}
      onChange={handleSortChange}
      className="border border-gray-300 rounded-lg h-6 w-13 text-center px-3 focus:outline-none focus:border-orange-500"
    >
      <option value="default">Default</option>
      <option value="lowToHigh">Price: Low to High</option>
      <option value="highToLow">Price: High to Low</option>
    </select>
  );
};

export default Sort;
