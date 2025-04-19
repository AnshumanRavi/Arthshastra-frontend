import React from 'react';
import { useNavigate } from 'react-router-dom';

const Placement = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center pt-40 mt-30 pb-40 mb-30 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon...</h1>
        <p className="text-gray-600 mb-6">We're working on something awesome! Stay tuned.</p>
        <button
          onClick={handleBack}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Placement;