import React from 'react';

const Syllabus = () => {
  // Array of semester data
  const semesters = [
    {
      id: 1,
      title: "Semester 1",
      link: "https://drive.google.com/drive/folders/16EdukxSB8WVy1CpOePPNSGx7ZSJ2ZbDT",
    },
    {
      id: 2,
      title: "Semester 2",
      link: "https://drive.google.com/drive/folders/1bg_VheDX4iUf408hPZ9lLJcaXoB8G9Fs",
    },
    {
      id: 3,
      title: "Semester 3",
      link: "https://drive.google.com/drive/folders/1ws7I58uVDOcwbPJ4RTYpNakzAO4LCG37",
    },
    {
      id: 4,
      title: "Semester 4",
      link: "https://drive.google.com/drive/folders/1oBl3rAG11Lbq0L1_Ig77jvbwFUkdWFIU",
    },
    {
      id: 5,
      title: "Semester 5",
      link: "https://drive.google.com/drive/folders/1Kq8mzoXH5GwzF5zylimPFBmkZ_Kxvg61",
    },
    {
      id: 6,
      title: "Semester 6",
      link: "https://drive.google.com/drive/folders/1h8VQuTnhgMJRUOvdsCvBBKYRsvFHCJF1",
    },
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <div 
        className="relative py-20 text-center text-white"
        style={{ backgroundColor: 'rgb(129, 25, 25)' }}
      >
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-red-900/50 to-red-800/30"
          aria-hidden="true"
        ></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Syllabus</h1>
          <p className="text-xl font-light">
            Explore the syllabus for each semester of the Economics Department.
          </p>
        </div>

        {/* Decorative Element */}
        <div 
          className="absolute -bottom-1 left-0 right-0 h-16 bg-white transform skew-y-2"
          aria-hidden="true"
        ></div>
      </div>

      {/* Syllabus Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {semesters.map((sem) => (
            <a
              key={sem.id}
              href={sem.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 bg-red-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-center">
                {/* Semester Heading */}
                <h2 
                  className="text-2xl font-bold mb-4"
                  style={{ color: 'rgb(129, 25, 25)' }}
                >
                  {sem.title}
                </h2>
                <p className="text-gray-600">
                  Click to view the syllabus for {sem.title}.
                </p>
                {/* Button */}
                <div className="mt-6">
                  <button 
                    className="px-6 py-2 rounded-lg font-semibold transition duration-300"
                    style={{ 
                      backgroundColor: 'rgb(129, 25, 25)', 
                      color: 'white',
                    }}
                  >
                    View Syllabus
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Syllabus;