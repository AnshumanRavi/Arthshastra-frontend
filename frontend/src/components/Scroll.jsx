import React, { useState, useEffect, useRef } from "react";

const Scroll = () => {
  const images = [...Array(7).keys()].map((i) => `/Scroll/${i + 1}.jpg`);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerHeight, setContainerHeight] = useState("auto");
  const [paddingTop, setPaddingTop] = useState("50px");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (imageRef.current) {
        const img = imageRef.current;
        const aspectRatio = img.naturalHeight / img.naturalWidth;
        const containerWidth = containerRef.current.clientWidth;
        const newHeight = containerWidth * aspectRatio;

        // Adjust padding-top based on window width
        const newPaddingTop = window.innerWidth <= 767 ? "0px" : "60px"; // Increased padding
        setPaddingTop(newPaddingTop);

        // Set container height (image height + padding-top)
        setContainerHeight(`${newHeight + parseInt(newPaddingTop, 10)}px`);
      }
    };

    if (imageRef.current) {
      const img = imageRef.current;
      img.addEventListener("load", updateDimensions);
    }

    const handleResize = () => {
      updateDimensions();
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    updateDimensions();

    return () => {
      if (imageRef.current) {
        imageRef.current.removeEventListener("load", updateDimensions);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.touches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;

    if (deltaX > 50) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      touchStartX.current = null;
    } else if (deltaX < -50) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      touchStartX.current = null;
    }
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="mx-8 my-0">
      <div
        ref={containerRef}
        className={`relative w-full overflow-hidden bg-white ${
          isMobile ? "rounded-2xl" : "rounded-2xl"
        }`} // Rounded corners for wider screens
        style={{ height: containerHeight, paddingTop }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          onClick={goToPrevious}
          style={{ display: isMobile ? "none" : "block" }}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
        >
          &lt;
        </button>

        <button
          onClick={goToNext}
          style={{ display: isMobile ? "none" : "block" }}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
        >
          &gt;
        </button>

        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              ref={index === currentIndex ? imageRef : null}
              src={src}
              alt={`Image ${index + 1}`}
              className="h-full w-full flex-shrink-0 object-contain"
            />
          ))}
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scroll;
