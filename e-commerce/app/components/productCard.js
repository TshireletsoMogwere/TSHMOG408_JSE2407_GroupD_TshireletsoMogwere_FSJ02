
import Link from "next/link";
import Image from "next/image";
import Info from "../assets/info.png";
import ImageCarousel from "./imageCarousel";
export default async function ProductCard({product}) {

/**
* A functional component that renders a product card with details and an info button.
* 
* @param {Object} props - The component's properties.//+
* @param {Object} props.product - The product data to be displayed in the card.
* @param {string} props.product.id - The unique identifier of the product.
* @param {string} props.product.category - The category of the product.
* @param {string} props.product.title - The title of the product.
* @param {number} props.product.price - The price of the product.
* @param {Array} props.product.images - An array of image URLs for the product.
* @param {string} props.product.thumbnail - The URL of the product's thumbnail image.
* 
* @returns {JSX.Element} - The rendered product card component.
*/
  return (
  <>
          <p className="text-orange-600 text-md italic font-medium">
            {product.category}
          </p>

          <div className=" h-48 flex items-center justify-center">
          <ImageCarousel 
        images={product.images} 
        thumbnail={product.thumbnail} 
      />
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
      </>

  );
}

