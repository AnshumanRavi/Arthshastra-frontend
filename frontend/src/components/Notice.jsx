import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Define the blinking animation using CSS
const styles = `
  @keyframes blink {
    0%, 100% { background-color: #fee2e2; } /* Light red */
    50% { background-color: #dbeafe; } /* Light blue */
  }
  .blink-red-blue {
    animation: blink 2s infinite;
  }
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const Modal = ({ content, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <style>
        {`
          @media (max-width: 767px) {
            .modal-container {
              padding-left: 1rem;
              padding-right: 1rem;
              max-height: 80vh; /* Limit height to 80% of viewport height */
              overflow-y: auto; /* Enable vertical scrolling */
            }
          }
        `}
      </style>
      <div className="modal-container bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full mx-4 relative">
        <button
          className="absolute top-2 right-2 text-red-500 hover:text-red-700"
          onClick={onClose}
        >
          X
        </button>
        <div className="font-semibold">{content.subject}</div>
        <div className="text-sm text-gray-600 mt-2 whitespace-pre-wrap break-words">
          {content.body}
        </div>
        {content.link && (
          <a
            href={content.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 mt-4 inline-block"
          >
            Learn More
          </a>
        )}
      </div>
    </div>
  );
};

const ScrollableList = ({ items, title, navigateTo, bgColors }) => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    const container = scrollRef.current;
    const scrollHeight = container.scrollHeight / 2;
    let timeoutId;

    const scrollAnimation = () => {
      if (!isPaused) {
        container.scrollBy({ top: 1, behavior: "auto" });

        if (container.scrollTop >= scrollHeight) {
          container.scrollTop = 0;
        }
      }
      timeoutId = setTimeout(scrollAnimation, 30);
    };

    scrollAnimation();

    return () => {
      clearTimeout(timeoutId);
      container.scrollTop = 0;
    };
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    scrollRef.current.scrollTop = 0;
  };

  const handleItemClick = (item) => {
    setModalContent(item);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="flex-1 p-6 border border-gray-200 rounded-lg shadow-md bg-white" style={{ width: '300px' }}>
      <style>{styles}</style> {/* Inject the CSS animation */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <button
          onClick={() => navigate(navigateTo)}
          className="text-blue-500 hover:text-blue-600 transition-colors"
        >
          View All
        </button>
      </div>
      <div
        ref={scrollRef}
        className="relative h-64 overflow-y-auto"
        aria-live="polite"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className={`p-3 mb-2 rounded-lg blink-red-blue cursor-pointer`}
            style={{ animationDelay: `${index * 1}s` }} // Add staggered delay
            onClick={() => handleItemClick(item)}
          >
            <div className="font-semibold">{item.subject}</div>
            <div className="text-sm text-gray-600 line-clamp-3">
              {item.body}
            </div>
          </div>
        ))}
      </div>
      {modalContent && <Modal content={modalContent} onClose={closeModal} />}
    </div>
  );
};

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [events, setEvents] = useState([]);
  const bgColors = ["bg-red-100", "bg-blue-100"];

  // Fetch notices from the API
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch("https://dept-economics-motilal.onrender.com/notice/all");
        if (!response.ok) {
          throw new Error("Failed to fetch notices");
        }
        const data = await response.json();
        console.log("Fetched Notices:", data); // Log the entire response

        // Get the last 10 notices
        const lastTenNotices = data.notices.slice(-10);
        lastTenNotices.reverse();
        setNotices(lastTenNotices); // Set the last 10 notices
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };

    fetchNotices();
  }, []);

  // Fetch events from the API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("https://dept-economics-motilal.onrender.com/upcomingEvents/all");
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        console.log("Fetched Events:", data); // Log the entire response

        // Extract the `events` array from the response
        const eventsData = data.events;

        // Get the last 10 events
        const lastTenEvents = eventsData.slice(-10);
        setEvents(lastTenEvents); // Set the last 10 events
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="flex justify-center items-center bg-[rgb(249, 226, 228)] p-4 h-auto">
      <style>
        {`
          @media (max-width: 767px) {
            .notice-container {
              flex-direction: column;
              align-items: center;
            }
          }
        `}
      </style>
      <div className="notice-container flex flex-col md:flex-row w-full max-w-5xl gap-24 p-4">
        <ScrollableList
          items={notices}
          title="Notices"
          navigateTo="/notices"
          bgColors={bgColors}
        />
        <ScrollableList
          items={events}
          title="Upcoming Events"
          navigateTo="/upcoming-events"
          bgColors={bgColors}
        />
      </div>
    </div>
  );
};

export default Notice;