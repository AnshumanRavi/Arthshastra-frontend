import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// Tile Button Component
const TileButton = ({ text, backgroundColor, imageSrc, onClick, href }) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={text}
        className="w-[120px] h-[120px] max-[767px]:w-[90px] max-[767px]:h-[90px] flex flex-col justify-center items-center 
        text-center font-semibold text-sm max-[767px]:text-xs rounded-xl shadow-xl 
        transition-all transform hover:scale-105 hover:shadow-2xl hover:brightness-110"
        style={{
          backgroundColor,
          color: backgroundColor === "#BA210E" ? "#FFFFFF" : "#000000",
        }}
      >
        {imageSrc && (
          <img
            src={imageSrc}
            alt={`Icon for ${text}`}
            className="w-12 h-12 max-[767px]:w-9 max-[767px]:h-9 mb-2"
            onError={(e) => {
              e.target.src = "/fallback-image.jpg";
            }}
          />
        )}
        {text}
      </a>
    );
  }

  return (
    <button
      aria-label={text}
      className="w-[120px] h-[120px] max-[767px]:w-[90px] max-[767px]:h-[90px] flex flex-col justify-center items-center 
      text-center font-semibold text-sm max-[767px]:text-xs rounded-xl shadow-xl 
      transition-all transform hover:scale-105 hover:shadow-2xl hover:brightness-110"
      style={{
        backgroundColor,
        color: backgroundColor === "#BA210E" ? "#FFFFFF" : "#000000",
      }}
      onClick={onClick}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={`Icon for ${text}`}
          className="w-12 h-12 max-[767px]:w-9 max-[767px]:h-9 mb-2"
          onError={(e) => {
            e.target.src = "/fallback-image.jpg";
          }}
        />
      )}
      {text}
    </button>
  );
};

// Custom Hook for Slide-Up Animation
const useSlideUpAnimation = (ref) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-up");
          } else {
            entry.target.classList.remove("slide-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref]);
};

// Tiles Component
const Tiles = () => {
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const navigate = useNavigate();
  const [magazineLink, setMagazineLink] = useState("");

  useSlideUpAnimation(leftImageRef);
  useSlideUpAnimation(rightImageRef);

  // Fetch magazine link
  useEffect(() => {
    const fetchMagazineLink = async () => {
      try {
        const res = await fetch("https://dept-economics-motilal.onrender.com/magzine/magazines");
        const data = await res.json();

        if (data.length > 0) {
          setMagazineLink(data[0].magazineLink);
        }
      } catch (error) {
        console.error("Failed to fetch magazine link:", error);
      }
    };

    fetchMagazineLink();
  }, []);

  const data = [
    { text: "FACULTY", bg: "#BA210E", image: "STUDENT.png", route: "/faculty" },
    { text: "ALUMNI", bg: "#F0CACA", image: "ALUMNI.png", route: "/alumni" },
    { text: "COURSES", bg: "#BA210E", image: "COURSES.png", route: "/courses" },
    {
      text: "MAGAZINE",
      bg: "#F0CACA",
      image: "MAGAZINE.png",
      href: magazineLink, // Dynamically fetched link
    },
    { text: "PLACEMENT", bg: "#F0CACA", image: "RECRUITMENT.png", route: "/placement" },
    { text: "COMMITTEES", bg: "#BA210E", image: "FACULTY.png", route: "/committees" },
    { text: "OFFICE BEARERS", bg: "#F0CACA", image: "ob1.png", route: "/office-bearers" },
  ];

  const handleTileClick = (route) => {
    navigate(route);
  };

  return (
    <div className="my-5">
      <div
        className="flex flex-col md:flex-row justify-center items-center w-full px-4 md:px-10 py-5"
        style={{
          background: "linear-gradient(135deg,rgb(249, 226, 228),rgb(249, 226, 228))",
        }}
      >
        {/* Left Image */}
        <div
          ref={leftImageRef}
          className="pr-5 max-[936px]:hidden flex justify-center items-center w-[200px] md:w-[300px] opacity-0 transform translate-y-[100px] transition-all duration-[2400ms] ease-out"
        >
          <img
            src="/tiles/1.jpg"
            alt="Left"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Center Tiles */}
        <div className="flex flex-col items-center gap-2 md:gap-4">
          {/* First Row */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {data.slice(0, 4).map((item, index) => (
              <TileButton
                key={index}
                text={item.text}
                backgroundColor={item.bg}
                imageSrc={`/tiles/${item.image}`}
                onClick={item.route ? () => handleTileClick(item.route) : undefined}
                href={item.href}
              />
            ))}
          </div>

          {/* Second Row */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {data.slice(4, 7).map((item, index) => (
              <TileButton
                key={index + 4}
                text={item.text}
                backgroundColor={item.bg}
                imageSrc={`/tiles/${item.image}`}
                onClick={item.route ? () => handleTileClick(item.route) : undefined}
                href={item.href}
              />
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div
          ref={rightImageRef}
          className="pl-5 max-[936px]:hidden flex justify-center items-center w-[200px] md:w-[300px] opacity-0 transform translate-y-[100px] transition-all duration-[2400ms] ease-out"
        >
          <img
            src="/tiles/2.jpg"
            alt="Right"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <style>
          {`
            .slide-up {
              opacity: 1 !important;
              transform: translateY(0) !important;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Tiles;
