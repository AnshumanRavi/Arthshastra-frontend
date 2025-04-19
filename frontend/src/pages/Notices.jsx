import React, { useEffect, useState } from "react";

// Define CSS styles for animations and layout
const styles = `
  .notice-card {
    background: linear-gradient(145deg, #ffffff, #f9fafb);
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    word-wrap: break-word;
    overflow-wrap: break-word;
    word-break: break-word;
    white-space: normal;
  }

  .notice-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  .notice-card:nth-child(odd) {
    background: linear-gradient(145deg, #f9fafb, #e5e7eb);
  }

  .notice-card:nth-child(even) {
    background: linear-gradient(145deg, #f3f4f6, #d1d5db);
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
    max-width: 800px;
    width: 90%;
    position: relative;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-height: 80vh;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    word-wrap: break-word;
    overflow-wrap: break-word;
    word-break: break-word;
    white-space: normal;
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
    color: blue;
    cursor: pointer;
    text-decoration: underline;
  }

  .read-more:hover {
    color: darkblue;
  }

  .modal-body {
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-wrap: break-word;
    word-break: break-word;
  }
`;

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);

  // Fetch notices from the API
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch("https://dept-economics-motilal.onrender.com/notice/all");
        if (!response.ok) {
          throw new Error("Failed to fetch notices");
        }
        const data = await response.json();
        setNotices(data.notices); // Reverse to show latest first
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };

    fetchNotices();
  }, []);

  // Open modal with selected notice
  const openModal = (notice) => {
    setSelectedNotice(notice);
  };

  // Close modal
  const closeModal = () => {
    setSelectedNotice(null);
  };

  // Truncate text and add "Read More" link (Fixed)
  const truncateText = (text, maxLength = 100, notice) => {
    if (!text) return ""; // Prevents error if text is undefined
    if (text.length <= maxLength) return text;
    return (
      <>
        {text.slice(0, maxLength)}...
        <span className="read-more" onClick={() => openModal(notice)}>
          Read More
        </span>
      </>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-6 mt-10">
      <style>{styles}</style> {/* Inject custom CSS */}
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <h1 className="text-4xl font-bold text-white">Notice Board</h1>
          <p className="mt-2 text-lg text-blue-100">
            Stay updated with the latest announcements.
          </p>
        </div>
        <div className="h-[500px] overflow-y-auto p-6">
          {notices.map((notice) => (
            <div
              key={notice._id}
              className="notice-card p-6 mb-4 cursor-pointer"
              onClick={() => openModal(notice)}
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {notice.subject}
              </h2>
              <p className="mt-2 text-gray-600">
                {truncateText(notice.body, 100, notice)}
              </p>
              <div className="mt-4 text-sm text-gray-500">
                Published on:{" "}
                {new Date(notice.createdAt).toLocaleString("en-US", {
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
      {selectedNotice && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              X
            </button>
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedNotice.subject}
            </h2>
            <p className="mt-4 text-gray-600 modal-body">
              {selectedNotice.body}
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Published on:{" "}
              {new Date(selectedNotice.createdAt).toLocaleString("en-US", {
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

export default NoticeBoard;
