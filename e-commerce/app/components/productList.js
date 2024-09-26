import Link from "next/link";
import Image from "next/image";
import Info from "../assets/info.png";
import ImageCarousel from "./imageCarousel";

const ProductList = ({ products }) => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 mt-10">
        {products.map((product) => (
          <div key={product.id} className="p-4 shadow-md rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105">
                <p className="text-orange-600 text-md italic font-medium">
        {product.category}
      </p>
      
      <div className="h-48 flex items-center justify-center">
        <ImageCarousel images={product.images} thumbnail={product.thumbnail} />
      </div>
      
           <h2 className="text-lg font-bold">{product.title}</h2>
        
      <div className="text-md text-orange-600 font-semibold mt-2 flex items-center justify-between">
        <span>€{product.price}</span>
        <button className="w-5">
          <Link href={`/product/${product.id}`}>
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
  