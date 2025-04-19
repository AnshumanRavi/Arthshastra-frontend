import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const CollegeNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCommunityHovered, setIsCommunityHovered] = useState(false);
  const [isCoursesHovered, setIsCoursesHovered] = useState(false); // State for Courses hover effect

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {!isMobile && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: isScrolled ? '2px 16px' : '20px 16px 20px 16px',
            height: isScrolled ? '40px' : '76px',
            position: 'sticky',
            top: 0,
            background: 'white',
            zIndex: 1000,
            opacity: isScrolled ? 0.9 : 1,
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <div style={{ paddingTop: isScrolled ? '2px' : '8px', paddingLeft: '9px', display: 'flex', alignItems: 'center' }}>
            <img src="/photos/department.png" alt="Department" style={{ height: isScrolled ? '30px' : '56px' }} />
          </div>
          <div style={{ paddingTop: isScrolled ? '2px' : '8px', display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
            <img src="/photos/Arthashastra.png" alt="Arthashastra" style={{ height: isScrolled ? '30px' : '56px' }} />
          </div>
          <div style={{ paddingTop: isScrolled ? '2px' : '8px', paddingRight: '9px', display: 'flex', alignItems: 'center' }}>
            <img src="/photos/CollegeName.png" alt="College Name" style={{ height: isScrolled ? '30px' : '56px' }} />
          </div>
        </div>
      )}

      {!isMobile && (
        <nav
          className="bg-[rgb(129,25,25)] w-[90%] mx-auto rounded-2xl fixed left-0 right-0 h-[52px] p-4 shadow-lg z-10 text-white"
          style={{ top: isScrolled ? '42px' : '75px', transition: 'top 0.3s ease-in-out' }}
        >
          <div className="flex items-center justify-center h-full">
            <div className="flex justify-evenly w-full">
              {["/", "/Faculty", "/Past-Events", "/Economic-Society"].map((path, index) => (
                <NavLink
                  key={index}
                  to={path}
                  className={({ isActive }) =>
                    `text-white px-4 py-2 rounded-lg transition-all duration-300 transform ${
                      isActive ? 'bg-black scale-105' : 'hover:bg-black hover:scale-105'
                    }`
                  }
                >
                  {path === "/" ? "Home" : path.replace("/", "").replace("-", " ")}
                </NavLink>
              ))}

              {/* Courses Dropdown */}
              <div
                onMouseEnter={() => setIsCoursesHovered(true)}
                onMouseLeave={() => setIsCoursesHovered(false)}
                style={{ position: 'relative' }}
              >
                <button
                  className="text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:bg-black hover:scale-105 flex items-center gap-1"
                >
                  Courses
                  <span>▼</span>
                </button>

                {/* Dropdown Menu */}
                {isCoursesHovered && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      background: 'white',
                      color: 'black',
                      borderRadius: '8px',
                      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                      zIndex: 1001,
                      width: '160px',
                      padding: '10px 0',
                    }}
                  >
                    <NavLink
                      to="/courses/course-details"
                      className="block px-4 py-2 hover:bg-gray-200 transition-all duration-300"
                    >
                      Course Details
                    </NavLink>
                    <NavLink
                      to="/courses/syllabus"
                      className="block px-4 py-2 hover:bg-gray-200 transition-all duration-300"
                    >
                      Syllabus
                    </NavLink>
                  </div>
                )}
              </div>

              {/* Community Dropdown */}
              <div
                onMouseEnter={() => setIsCommunityHovered(true)}
                onMouseLeave={() => setIsCommunityHovered(false)}
                style={{ position: 'relative' }}
              >
                <button
                  className="text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:bg-black hover:scale-105 flex items-center gap-1"
                >
                  Community
                  <span>▼</span>
                </button>

                {/* Dropdown Menu */}
                {isCommunityHovered && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      background: 'white',
                      color: 'black',
                      borderRadius: '8px',
                      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                      zIndex: 1001,
                      width: '160px',
                      padding: '10px 0',
                    }}
                  >
                    <NavLink
                      to="/alumni"
                      className="block px-4 py-2 hover:bg-gray-200 transition-all duration-300"
                    >
                      Alumni
                    </NavLink>
                    <NavLink
                      to="/committees"
                      className="block px-4 py-2 hover:bg-gray-200 transition-all duration-300"
                    >
                      Committees
                    </NavLink>
                    <NavLink
                      to="/office-bearers"
                      className="block px-4 py-2 hover:bg-gray-200 transition-all duration-300"
                    >
                      Office Bearers
                    </NavLink>
                  </div>
                )}
              </div>

            </div>
          </div>
        </nav>
      )}

      {isMobile && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 16px',
            height: '60px',
            position: 'sticky',
            top: 0,
            background: 'white',
            zIndex: 1000,
            opacity: 0.9,
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
            <img src="/photos/Arthashastra.png" alt="Arthashastra" style={{ height: '40px' }} />
            <img src="/photos/department.png" alt="Department" style={{ height: '40px' }} />
            <div style={{ cursor: 'pointer' }} onClick={() => setIsNavOpen(!isNavOpen)}>
              <img src="/photos/shortnavbar.png" alt="Menu" style={{ height: '40px' }} />
            </div>
          </div>
        </div>
      )}

      {isMobile && isNavOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: '220px',
            height: '100%',
            background: 'white',
            color: 'black',
            padding: '20px',
            zIndex: 1001,
            transition: 'all 0.3s ease-in-out',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          <button
            onClick={() => setIsNavOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              color: 'black',
              fontSize: '24px',
              cursor: 'pointer',
              alignSelf: 'flex-end',
            }}
            aria-label="Close menu"
          >
            ✖
          </button>
          {["/", "/Faculty", "/Past-Events", "/Economic-Society"].map((path, index) => (
            <NavLink
              key={index}
              to={path}
              onClick={() => setIsNavOpen(false)}
              className="text-white bg-red-800 px-4 py-2 rounded-lg text-center hover:bg-black hover:scale-105 transition-all duration-300"
            >
              {path === "/" ? "Home" : path.replace("/", "").replace("-", " ")}
            </NavLink>
          ))}
          {/* Mobile Dropdown for Courses */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <NavLink
              to="/courses/course-details"
              onClick={() => setIsNavOpen(false)}
              className="text-white bg-red-800 px-4 py-2 rounded-lg text-center hover:bg-black hover:scale-105 transition-all duration-300"
            >
              Course Details
            </NavLink>
            <NavLink
              to="/courses/syllabus"
              onClick={() => setIsNavOpen(false)}
              className="text-white bg-red-800 px-4 py-2 rounded-lg text-center hover:bg-black hover:scale-105 transition-all duration-300"
            >
              Syllabus
            </NavLink>
          </div>
          {/* Mobile Dropdown for Community */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <NavLink
              to="/alumni"
              onClick={() => setIsNavOpen(false)}
              className="text-white bg-red-800 px-4 py-2 rounded-lg text-center hover:bg-black hover:scale-105 transition-all duration-300"
            >
              Alumni
            </NavLink>
            <NavLink
              to="/committees"
              onClick={() => setIsNavOpen(false)}
              className="text-white bg-red-800 px-4 py-2 rounded-lg text-center hover:bg-black hover:scale-105 transition-all duration-300"
            >
              Committees
            </NavLink>
            <NavLink
              to="/office-bearers"
              onClick={() => setIsNavOpen(false)}
              className="text-white bg-red-800 px-4 py-2 rounded-lg text-center hover:bg-black hover:scale-105 transition-all duration-300"
            >
              Office Bearers
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default CollegeNavbar;