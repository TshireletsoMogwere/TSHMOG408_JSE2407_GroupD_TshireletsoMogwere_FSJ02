import Link from "next/link";
import Image from "next/image";
import Info from "../assets/info.png";
import ImageCarousel from "./imageCarousel";

export default async function ProductCard({ product }) {
  return (
    <>
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
    </>
  );
}
