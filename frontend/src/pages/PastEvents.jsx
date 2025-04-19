import React, { useState, useEffect } from 'react';

const PastEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Fetch past events data from the API
  useEffect(() => {
    const fetchPastEvents = async () => {
      try {
        const response = await fetch('https://dept-economics-motilal.onrender.com/pastEvents/events');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        data.reverse();
        // Ensure Google Drive links are properly formatted
        const formattedEvents = data.map(event => ({
          ...event,
          googleDriveLink: event.googleDriveLink?.startsWith('http') 
            ? event.googleDriveLink 
            : event.googleDriveLink ? `https://${event.googleDriveLink}` : null
        }));
        setEvents(formattedEvents);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPastEvents();
  }, []);

  // Handle image click
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Close image modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-red-50 flex items-center justify-center">
        <p className="text-red-600 text-2xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-red-50 flex items-center justify-center">
        <p className="text-red-600 text-2xl">Error: {error}</p>
      </div>
    );
  }

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
          <h1 className="text-5xl font-bold mb-4">Past Events</h1>
          <p className="text-xl font-light">
            Relive the memories of our past events and explore the moments that made them special.
          </p>
        </div>

        {/* Decorative Element */}
        <div
          className="absolute -bottom-1 left-0 right-0 h-16 bg-white transform skew-y-2"
          aria-hidden="true"
        ></div>
      </div>

      {/* Events Container */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {events.map((event) => (
            <div
              key={event._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Event Header */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-red-800">{event.eventName}</h2>
              </div>

              {/* Event Images - Only shown if there are images or a Google Drive link */}
              {(event.cloudinaryLinks?.length > 0 || event.googleDriveLink) && (
                <div className="p-4 border-t border-red-200">
                  <div className="flex overflow-x-auto space-x-4">
                    {event.cloudinaryLinks?.map((image, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 w-48 h-48 rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
                        onClick={() => handleImageClick(image)}
                      >
                        <img
                          src={image}
                          alt={`Event ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    {/* View More Box - Only shown if Google Drive link exists */}
                    {event.googleDriveLink && (
                      <a
                        href={event.googleDriveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 w-48 h-48 bg-red-300 rounded-lg flex items-center justify-center text-white text-lg font-bold hover:bg-red-700 transition-colors duration-300"
                      >
                        View More
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full mx-4">
            <img
              src={selectedImage}
              alt="Selected Event"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PastEvents;