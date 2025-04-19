import React from 'react';

const Developers = () => {
  const developers = [
    {
      name: 'Anshuman Ravi',
      email: '1anshuman2ravi@gmail.com',
      linkedin: 'https://www.linkedin.com/in/anshuman-ravi-76051728b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      pic: '/images/anshuman.jpg', // Path to image in public folder
    },
    {
      name: 'Ravi Shankar Upadhyay',
      email: 'upadhyayravi2005@gmail.com',
      linkedin: 'https://www.linkedin.com/in/raviupadhyay23?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
      pic: '/images/ravi.jpg', // Path to image in public folder
    },
    {
      name: 'Anurag Sinha',
      email: 'anuragsinha067@gmail.com',
      linkedin: 'https://www.linkedin.com/in/anurag-sinha-598310299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ',
      pic: '/images/anurag.jpg', // Path to image in public folder
    },
  ];

  const handleEmailClick = (email) => {
    window.open(`mailto:${email}`);
  };

  const handleLinkedInClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 to-gray-900 flex flex-col items-center justify-center py-10 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 animate-fade-in">
        Meet Our Developers
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {developers.map((dev, index) => (
          <div
            key={index}
            className="relative bg-red-800/20 backdrop-blur-md rounded-lg p-6 w-72 text-center shadow-lg hover:shadow-2xl transition-all duration-300 animate-slide-in group overflow-hidden"
          >
            {/* Shining Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -rotate-45 pointer-events-none"></div>

            {/* Profile Picture */}
            <div className="flex justify-center">
              <img
                src={dev.pic} // Use the path from the public folder
                alt={dev.name}
                className="w-32 h-32 rounded-full border-4 border-red-500 hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Name */}
            <h2 className="text-2xl font-semibold text-white mt-4">{dev.name}</h2>

            {/* Email */}
            <p
              className="text-red-300 mt-2 cursor-pointer hover:text-red-400 transition-colors duration-300 z-10 relative"
              onClick={() => handleEmailClick(dev.email)}
            >
              {dev.email}
            </p>

            {/* LinkedIn Button */}
            <button
              className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300 z-10 relative"
              onClick={() => handleLinkedInClick(dev.linkedin)}
            >
              LinkedIn Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Developers;