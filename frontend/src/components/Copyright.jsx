import React from 'react';

const Copyright = () => {
  return (
    <>
      {/* White Horizontal Rule (Decorative) */}
      <hr className="border-t border-white" aria-hidden="true" />

      {/* Copyright Component */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full bg-[#3a0e0a] text-white p-4 pt-[10px]">
        {/* First Cell: Copyright Text */}
        <div className="flex-1 text-sm text-center md:text-left mb-2 md:mb-0">
          Copyright © 2025 Department of Economics, Motilal Nehru College (E), University of Delhi. All Rights Reserved.
        </div>

        {/* Second Cell: Developed by Link */}
        <div className="flex-1 text-sm text-center md:text-right">
          <a
            href="/developers"
            className="hover:underline"
            aria-label="Developed by [Developer Name or Team]"
            title="Developed by [Developer Name or Team]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Developed by...
          </a>
        </div>
      </div>
    </>
  );
};

export default Copyright;