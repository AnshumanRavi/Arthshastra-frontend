import React, { useEffect, useState } from 'react';

const Faculty = () => {
  const [facultyMembers, setFacultyMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch faculty data from the API
  useEffect(() => {
    const fetchFacultyData = async () => {
      try {
        const response = await fetch('https://dept-economics-motilal.onrender.com/faculties/professors');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setFacultyMembers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFacultyData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-red-600 text-2xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-red-600 text-2xl">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-6 sm:py-20 px-4">
      {/* Adjusted vertical padding: py-6 for small screens, sm:py-20 for medium and larger screens */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-6 sm:mb-10 animate-fade-in">
        Faculty Members
      </h1>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-10">
        {facultyMembers.map((faculty) => (
          <div
            key={faculty._id}
            className="relative bg-white rounded-xl p-4 sm:p-8 w-full sm:w-72 md:w-80 text-center shadow-lg hover:bg-red-50 transition-all duration-300 animate-slide-in group overflow-hidden border-2 border-red-100 hover:border-red-600"
          >
            {/* Red Band Design */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 to-red-500"></div>

            {/* Profile Picture */}
            <div className="flex justify-center relative z-10">
              <img
                src={faculty.imageUrl}
                alt={faculty.name}
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full border-4 border-red-100 hover:border-red-600 hover:scale-110 transition-all duration-300"
              />
            </div>

            {/* Name */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-red-800 mt-4 relative z-10 group-hover:text-red-900">
              {faculty.name}
            </h2>

            {/* Department */}
            <p className="text-red-600 mt-2 relative z-10 group-hover:text-red-700">
              <span className="font-bold text-red-700 group-hover:text-red-800">Department:</span> {faculty.department}
            </p>

            {/* Bio */}
            <p className="text-red-600 mt-2 relative z-10 group-hover:text-red-700">
              <span className="font-bold text-red-700 group-hover:text-red-800">Bio:</span> {faculty.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;