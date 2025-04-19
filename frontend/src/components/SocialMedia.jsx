import React, { useEffect, useRef } from 'react';

const SocialMedia = () => {
  // Array of image paths in the public/scroll folder
  const imagePaths = Array.from({ length: 9 }, (_, index) => `/Scroll/${index + 1}.jpg`);

  // Create refs for each image
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in'); // Add animation class
          } else {
            entry.target.classList.remove('fade-in'); // Remove animation class
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    // Observe each image
    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      // Cleanup observer
      imageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="m-4 border rounded-lg flex justify-center items-center">
      <div className="flex flex-col max-md:flex-col md:flex-row p-4 gap-4 w-full max-w-6xl">
        {/* First Cell (80% width) */}
        <div className="flex-[2] flex flex-col gap-4">
          <div className="flex justify-center items-center h-20">
            <h2 className="text-xl md:text-2xl font-bold text-center">View our Social Media</h2>
          </div>
          <div className="flex flex-col gap-4 md:h-[600px] h-auto">
            {/* Instagram Profile with Scroll */}
            <div className="flex-1 border rounded-lg overflow-auto">
              <iframe
                src="https://www.instagram.com/arthaveda_mlnce/embed"
                title="Instagram"
                className="w-full h-[300px] md:h-[500px]"
                loading="lazy"
                scrolling="auto"
              ></iframe>
            </div>
            {/* LinkedIn Preview Card */}
            <div className="flex-1 border rounded-lg overflow-hidden flex items-center justify-center bg-blue-100 p-4">
              <a
                href="https://www.linkedin.com/company/arthashastra-the-economics-society-of-mlnce-du/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-bold hover:underline text-center"
              >
                Visit our LinkedIn Page
              </a>
            </div>
          </div>
        </div>

        {/* Second Cell (20% width) */}
        <div className="flex-[3] flex flex-col gap-4">
          <div className="flex justify-center items-center h-20">
            <h2 className="text-xl md:text-2xl font-bold text-center">Glimpse of Arthaveda Department</h2>
          </div>
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {imagePaths.map((src, index) => (
              <a
                key={index}
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className={`aspect-square bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden transition-all duration-1000 ease-out opacity-0 ${
                  index >= 6 ? 'delay-200' : 'delay-500' // Delay for images 7-9
                }`}
                ref={(el) => (imageRefs.current[index] = el)} // Assign ref to each image
              >
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        `}
      </style>
    </div>
  );
};

export default SocialMedia;
