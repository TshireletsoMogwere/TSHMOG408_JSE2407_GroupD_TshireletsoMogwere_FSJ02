"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Back from "../../assets/turn-back.png";
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import { FetchProductById } from "../../lib/page";
import Link from "next/link";
import RootLayout from "@/app/layout";
/**
* This function is responsible for rendering the product details page.
* It fetches the product data using the provided `id` from the route parameters.
* The fetched product data is then used to populate the product details page with relevant information.
*
* @param {Object} props - The component props.
* @param {Object} props.params - The route parameters.
* @param {string} props.params.id - The unique identifier of the product.
*@param {Object} props.searchParams - The search parameters from the URL.

* @returns {JSX.Element} - The rendered product details page.
* @throws Will throw an error if the product data fetching fails.
*/
export default function ProductDetails({ params, searchParams }) {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [sortCriteria, setSortCriteria] = useState("date"); // default sort by date

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await FetchProductById(id);
        setProduct(productData);
      } catch (err) {
        console.error("Failed to fetch product details", err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p className="text-red-500 text-center text-xl mt-8">Loading...</p>;
  }

  // Sort reviews based on the selected criteria
  const sortedReviews = [...(product.reviews || [])].sort((a, b) => {
    if (sortCriteria === "date") {
      return new Date(b.date) - new Date(a.date); // most recent first
    } else if (sortCriteria === "rating") {
      return b.rating - a.rating; // highest rating first
    }
    return 0; // default case
  });

  return (
  
      <RootLayout productTitle={product.title}>
        {/* Back button */}
        <div className="mt-5 ml-10 w-14">
          <Link href={{ pathname: "/", query: { ...searchParams } }}>
            <Image src={Back} alt="turn-back" />
          </Link>
        </div>

        {/* Product Details */}
        <div className="max-w-6xl mx-auto p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image Gallery or Single Image */}
            <div>
              {product.images && product.images.length > 1 ? (
                <div className="grid grid-cols-2 gap-4">
                  {product.images.map((img, idx) => (
                    <Image
                      key={idx}
                      src={img}
                      alt={`${product.title} image ${idx + 1}`}
                      width={500}
                      height={500}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  ))}
                </div>
              ) : (
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover rounded-lg"
                />
              )}
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
              <p className="text-orange-600 italic mb-4">{product.category}</p>

              {/* Price */}
              <p className="text-2xl text-orange-600 font-bold mb-4">
                €{product.price.toFixed(2)}
              </p>

              {/* Description */}
              <p className="mb-4">{product.description}</p>

              {/* Tags */}
              {product.tags && (
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-orange-400 text-gray-800 px-2 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Stock Status */}
              <div className="mb-4 p-2 rounded">
                {product.inStock ? "In stock" : "Out of stock!"}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 bg-orange-600 text-white py-2 px-4 rounded-lg flex items-center justify-center">
                  <FaShoppingCart className="mr-2" />
                  Add to Cart
                </button>
                <button className="bg-orange-100 text-gray-800 py-2 px-4 rounded-lg">
                  <FaHeart />
                </button>
              </div>
            </div>
          </div>

          {/* User Reviews */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>

            {/* Sorting Buttons */}
            <div className="flex gap-4 mb-4">
              <button
                onClick={() => setSortCriteria("date")}
                className={`py-2 px-4 rounded-lg ${sortCriteria === "date" ? "bg-orange-600 text-white" : "bg-gray-200"}`}
              >
                Sort by Date
              </button>
              <button
                onClick={() => setSortCriteria("rating")}
                className={`py-2 px-4 rounded-lg ${sortCriteria === "rating" ? "bg-orange-600 text-white" : "bg-gray-200"}`}
              >
                Sort by Rating
              </button>
            </div>

            {sortedReviews.length > 0 ? (
              <div className="space-y-6">
                {sortedReviews.map((review, index) => (
                  <div key={index} className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-bold">
                        {review.reviewerName}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`w-5 h-5 ${
                            i < review.rating
                              ? "text-orange-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">
                No reviews yet. Be the first to review!
              </p>
            )}
          </div>
        </div>
      </RootLayout>
    
  );
}
