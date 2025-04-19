import React, { useEffect, useState } from "react";

// Define CSS styles for animations and layout
const styles = `
  .event-card {
    background: linear-gradient(145deg, #e0f2f1, #f0fdf4);
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    word-wrap: break-word; /* Ensure text wraps */
    overflow-wrap: break-word; /* Ensure text wraps */
    word-break: break-word; /* Break long words to prevent overflow */
    white-space: normal; /* Allow text to wrap */
  }

  .event-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  .event-card:nth-child(odd) {
    background: linear-gradient(145deg, #e0f2f1, #ccfbf1);
  }

  .event-card:nth-child(even) {
    background: linear-gradient(145deg, #f0fdf4, #d1fae5);
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-content {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    max-width: 800px; /* Increased modal width */
    width: 90%;
    position: relative;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-height: 80vh; /* Limit modal height */
    overflow-y: auto; /* Make content scrollable vertically */
    overflow-x: hidden; /* Prevent horizontal scrolling */
    box-sizing: border-box; /* Ensure padding is included in width */
    word-wrap: break-word; /* Ensure text wraps */
    overflow-wrap: break-word; /* Ensure text wraps */
    word-break: break-word; /* Break long words to prevent overflow */
    white-space: normal; /* Allow text to wrap */
  }

  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: red;
    color: white;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .close-button:hover {
    background: darkred;
  }

  .read-more {
    color: #0d9488; /* Teal color */
    cursor: pointer;
    text-decoration: underline;
  }

  .read-more:hover {
    color: #0f766e; /* Darker teal */
  }

  .modal-body {
    white-space: pre-wrap; /* Preserve line breaks and wrap text */
    word-wrap: break-word; /* Break long words to prevent overflow */
    overflow-wrap: break-word; /* Ensure text wraps */
    word-break: break-word; /* Break long words to prevent overflow */
  }
`;

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Fetch events from the API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("https://dept-economics-motilal.onrender.com/UpcomingEvents/all");
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        setEvents(data.events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  // Open modal with selected event
  const openModal = (event) => {
    setSelectedEvent(event);
  };

  // Close modal
  const closeModal = () => {
    setSelectedEvent(null);
  };

  // Truncate text and add "Read More" link
  const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return (
      <>
        {text.slice(0, maxLength)}...
        <span className="read-more" onClick={() => openModal(event)}>
          Read More
        </span>
      </>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-50 to-emerald-50 p-6 mt-10">
      <style>{styles}</style> {/* Inject custom CSS */}
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8 bg-gradient-to-r from-teal-600 to-emerald-600">
          <h1 className="text-4xl font-bold text-white">Upcoming Events</h1>
          <p className="mt-2 text-lg text-teal-100">
            Stay updated with the latest events.
          </p>
        </div>
        <div className="h-[500px] overflow-y-auto p-6">
          {events.map((event) => (
            <div
              key={event._id}
              className="event-card p-6 mb-4 cursor-pointer"
              onClick={() => openModal(event)}
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {event.subject}
              </h2>
              <p className="mt-2 text-gray-600">
                {truncateText(event.body)}
              </p>
              {event.link && (
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700"
                >
                  Learn More
                </a>
              )}
              <div className="mt-4 text-sm text-gray-500">
                Published on:{" "}
                {new Date(event.createdAt).toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              X
            </button>
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedEvent.subject}
            </h2>
            <p className="mt-4 text-gray-600 modal-body">
              {selectedEvent.body}
            </p>
            {selectedEvent.link && (
              <a
                href={selectedEvent.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700"
              >
                Learn More
              </a>
            )}
            <div className="mt-4 text-sm text-gray-500">
              Published on:{" "}
              {new Date(selectedEvent.createdAt).toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;