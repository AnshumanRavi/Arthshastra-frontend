import React from 'react';

const OfficeBearers = () => {
  const officeBearers = [
    {
      name: 'Aryan Raj',
      post: 'President',
      linkedin: 'https://www.linkedin.com/in/aryan-raj-24661b26a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      pic: '/images/aryan.jpg', // Path to image in public folder
    },
    {
      name: 'Sarthak Singh',
      post: 'Vice President',
      linkedin: 'https://www.linkedin.com/in/sarthak-singh-406a40211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      pic: '/images/sarthak.jpg', // Path to image in public folder
    },
    {
      name: 'Utsav Anand',
      post: 'Secretary',
      linkedin: 'https://www.linkedin.com/in/utsavanand5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      pic: '/images/utsav.jpg', // Path to image in public folder
    },
    {
      name: 'Aditya Choudhary',
      post: 'Joint Secretary',
      linkedin: 'https://www.linkedin.com/in/aditya-choudhary-28aug2006',
      pic: '/images/aditya.jpg', // Path to image in public folder
    },
    {
      name: 'Gaurav Kumar',
      post: 'Treasurer',
      linkedin: 'https://in.linkedin.com/in/gaurav-kumar-1887a9345',
      pic: '/images/gaurav.jpg', // Path to image in public folder
    },
    {
      name: 'Ashutosh Kumar',
      post: 'Union Advisor',
      linkedin: 'https://www.linkedin.com/in/ashutosh-kumar-8a1a7b255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      pic: '/images/ashutosh.jpg', // Path to image in public folder
    },
    {
      name: 'Srishti Bhattacharya',
      post: 'Union Advisor',
      linkedin: 'https://www.linkedin.com/in/srishti-bhattacharya-77b076234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      pic: '/images/shrishti.jpg', // Path to image in public folder
    },
  ];

  const handleLinkedInClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 to-gray-900 flex flex-col items-center justify-center py-10 px-4 mt-5">
      {/* Dark red gradient background */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 animate-fade-in">
        Office Bearers
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {officeBearers.map((bearer, index) => (
          <div
            key={index}
            className="relative bg-red-800/20 backdrop-blur-md rounded-lg p-6 w-72 text-center shadow-lg hover:shadow-2xl transition-all duration-300 animate-slide-in group overflow-hidden"
          >
            {/* Shining Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -rotate-45 pointer-events-none"></div>

            {/* Profile Picture */}
            <div className="flex justify-center relative z-10">
              <img
                src={bearer.pic}
                alt={bearer.name}
                className="w-32 h-32 rounded-full border-4 border-red-500 hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Name */}
            <h2 className="text-2xl font-semibold text-white mt-4 relative z-10">
              {bearer.name}
            </h2>

            {/* Post */}
            <p className="text-red-300 mt-2 relative z-10">{bearer.post}</p>

            {/* LinkedIn Button */}
            <button
              className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300 relative z-10"
              onClick={() => handleLinkedInClick(bearer.linkedin)}
            >
              LinkedIn Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficeBearers;