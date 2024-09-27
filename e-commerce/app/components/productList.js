import Link from "next/link";
import Image from "next/image";
import Info from "../assets/info.png";
import ImageCarousel from "./imageCarousel";

/**
 * ProductList is a functional component that renders a list of products.
 * It takes in an array of products and search parameters as props.
 *
 * @param {Object} props - The component's props
 * @param {Array} props.products - An array of product objects. Each product object should have properties: id, category, images, thumbnail, title, price.
 * @param {Object} props.searchParams - The current search, filter, and sort state.
 * //+
 * @returns {JSX.Element} - A JSX element representing the product list.
 */
const ProductList = ({ products, searchParams }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 mt-10">
      {products.map((product) => (
        <div
          key={product.id}
          className="p-4 shadow-md rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
        >
          <p className="text-orange-600 text-md italic font-medium">
            {product.category}
          </p>

          <div className="h-48 flex items-center justify-center">
            <ImageCarousel
              images={product.images}
              thumbnail={product.thumbnail}
            />
          </div>

          <h2 className="text-lg font-bold">{product.title}</h2>

          <div className="text-md text-orange-600 font-semibold mt-2 flex items-center justify-between">
            <span>€{product.price}</span>
            <button className="w-5">
              {/* Pass current search, filter, and sort state */},
              <Link
                href={{
                  pathname: `/product/${product.id}`,
                  query: searchParams,
                }}
              >
                <Image src={Info} alt="info" />
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
