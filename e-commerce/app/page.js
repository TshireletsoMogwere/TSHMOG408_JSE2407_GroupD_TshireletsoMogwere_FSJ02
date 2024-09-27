import Search from "./components/searchBar";
import Filter from "./components/filter";
import Sort from "./components/sort";
import ProductList from "./components/productList";
import Paginate from "./components/pagination";

/**
 * Fetches products from the API with pagination.
 *
 * @param {number} skip - The number of products to skip.
 * @param {number} limit - The number of products to fetch.
 * @returns {Promise<Array>} - A promise that resolves to an array of products.
 * @throws {Error} - Throws an error if the fetch request fails.
 */
const fetchProducts = async (skip = 0, limit = 20) => {
  const response = await fetch(
    `https://next-ecommerce-api.vercel.app/products?skip=${skip}&limit=${limit}`,
    {
      cache: "force-cache",
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
};

/**
 * Fetches unique categories from the products.
 *
 * @param {Array} products - The array of product objects.
 * @returns {Array} - An array of unique categories, with "All" included.
 */
const fetchCategories = (products) => {
  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );
  return ["All", ...uniqueCategories];
};

/**
 * Filters products based on the search term and selected category.
 *
 * @param {Array} products - The array of product objects.
 * @param {string} searchTerm - The search term for filtering.
 * @param {string} selectedCategory - The selected category for filtering.
 * @returns {Array} - An array of filtered products.
 */
const filterProducts = (products, searchTerm, selectedCategory) => {
  return products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
};

/**
 * Sorts products based on the specified sort order.
 *
 * @param {Array} products - The array of product objects.
 * @param {string} sortOrder - The order to sort the products (e.g., "lowToHigh", "highToLow").
 * @returns {Array} - An array of sorted products.
 */

const sortProducts = (products, sortOrder) => {
  return products.sort((a, b) => {
    if (sortOrder === "lowToHigh") return a.price - b.price;
    if (sortOrder === "highToLow") return b.price - a.price;
    return 0; // Default sorting
  });
};

/**
 * Main Home component that renders the product listing page.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.searchParams - The search parameters from the URL.
 * @returns {JSX.Element} - The rendered Home component.
 */
const Home = async ({ searchParams }) => {
  const page = parseInt(searchParams.page, 10) || 1;
  const limit = 20; 
  const skip = (page - 1) * limit; 

  // Extract search, filter, and sort parameters from the query
  const searchTerm = searchParams.search || ""; // Get search term from URL
  const selectedCategory = searchParams.category || "All";
  const sortOrder = searchParams.sort || "default";

  const products = await fetchProducts(skip, limit); // Fetch products with pagination
  const categories = fetchCategories(products); // Fetch categories based on products

  // Filter and sort products
  const filteredProducts = filterProducts(
    products,
    searchTerm,
    selectedCategory
  );
  const sortedProducts = sortProducts(filteredProducts, sortOrder);

  return (
    <div>
      <Search initialSearchTerm={searchParams.search} />
      <div className="flex justify-center mt-10 space-x-2">
        <Filter categories={categories} selectedCategory={selectedCategory} />
        <Sort sortOrder={sortOrder} />
        <a
          href="/?page=1" // Adjust the URL to reset filters
          className="inline-block bg-white text-black rounded border border-gray-300 rounded-lg h-6 w-13 text-center px-3 focus:outline-none focus:border-orange-500'"
        >
          Reset Filters
        </a>
      </div>

      <ProductList products={sortedProducts} searchParams={searchParams} />

      <Paginate
        currentPage={page}
        totalProducts={194}
        productsPerPage={limit}
      />
    </div>
  );
};

export default Home;
