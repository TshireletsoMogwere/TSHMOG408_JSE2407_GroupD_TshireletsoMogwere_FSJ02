"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * A React functional component that displays a carousel of images.
 *
 * @param {Object} props - The component's props.
 * @param {Array} props.images - An array of image URLs to be displayed in the carousel.
 * @param {Array} props.thumbnail - An array of thumbnail URLs to be used as placeholders for the images.
 *
 * @returns {JSX.Element} - The rendered ImageCarousel component.
 */
export default function ImageCarousel({ images, thumbnail }) {
  {
    /*takes two props, thumbnail will be used as placeholder*/
  }
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0 || !thumbnail || thumbnail.length === 0) {
    {
      /*checks for empty or undefined arrays*/
    }
    return (
      <div className="relative w-32 h-32 bg-gray-200 flex items-center justify-center">
        <p>No images available</p>
      </div>
    );
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    {
      /* modulo operator ensures wrapping back to 0 */
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <Image
        src={images[currentIndex]}
        alt="Product image"
        width={150}
        height={150}
        className="object-cover"
        placeholder="blur"
        blurDataURL={thumbnail[currentIndex]}
      />

      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1"
          >
            &#10094;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1"
          >
            &#10095;
          </button>
        </>
      )}
    </div>
  );
}
