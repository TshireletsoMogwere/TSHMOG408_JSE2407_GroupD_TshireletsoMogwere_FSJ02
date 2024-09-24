import ProductCard from "./components/productCard";
import Paginate from "./components/pagination";
import Fetch from "./lib/page";
import Search from "./components/searchBar";
import Sort from "./components/sort";
import Filter from "./components/filter";


/**
* The Home component is responsible for rendering the product list and pagination.
* It fetches products based on the current page and renders them using the ProductCard component.
*
* @param {Object} props - The component's props.
* @param {Object} props.searchParams - The search parameters from the URL.
* @returns {JSX.Element} - The rendered Home component.
*/
export default async function Home({ searchParams }) {

  const productsPerPage = 20;
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;

  const skip = (currentPage - 1) * productsPerPage;

  // Fetch products for the current page
  const products = await Fetch(skip);

  return (
    <>
    <Search/>
    <div className="flex justify-center mt-10 space-x-3">
    <Sort />
    <Filter />
    </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 mt-10">
        {products.map((product, index) => (
          <div
            className="p-4 shadow-md rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
            key={index}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <Paginate
        totalProducts={194}  
        productsPerPage={productsPerPage}
        currentPage={currentPage}
      />
    </>
  );
}

