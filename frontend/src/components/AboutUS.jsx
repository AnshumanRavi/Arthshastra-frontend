import React, { useEffect, useRef } from 'react';

const AboutUS = () => {
  const firstDivRef = useRef(null);
  const secondDivRef = useRef(null);
  const thirdDivRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              entry.target.classList.add('slide-up');
              entry.target.style.opacity = '1'; // Set opacity to 1 when visible
            });
          } else {
            entry.target.classList.remove('slide-up');
              entry.target.style.opacity = '0.8'; // Reset opacity when not visible
          }
        });
      },
      {
        threshold: 0.2, // Increase threshold for better triggering
      }
    );

    const elements = [firstDivRef.current, secondDivRef.current, thirdDivRef.current];

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="my-5">
      <div
        style={{
          display: 'flex',
          flexDirection: 'row', // Default layout: horizontal
          backgroundImage: 'url(/photos/bg.jpg)',
          backgroundSize: 'cover', // Ensure the background covers the entire container
          backgroundPosition: 'left',
          padding: '20px',
          paddingLeft: '50px',
          paddingRight: '50px',
          gap: '20px',
          overflow: 'hidden', // Prevent content from overflowing
          flexWrap: 'wrap', // Allow wrapping of flex items
        }}
      >
        {/* First Cell */}
        <div
          ref={firstDivRef}
          style={{
            flex: 3,
            padding: '20px',
            backgroundColor: 'rgba(255, 255, 255)',
            borderRadius: '10px',
            minWidth: '250px',
            overflow: 'auto',
            paddingLeft: '40px',
            paddingRight: '40px',
            transform: 'translateY(100px)', // Start from bottom
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out', // Smooth transition for opacity and transform
            opacity: '0', // Start with opacity 0
          }}
        >
          <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>ABOUT US</h1>
    
          <p>
            Founded in 2017, Arthaveda is the Economics Department of Motilal Nehru College
            (Evening), University of Delhi. Over the years, it has carried forward a legacy of academic
            excellence and intellectual curiosity, driven by students deeply invested in understanding the
            intricacies of economics.
            <a href="/about" style={{ color: 'neutral' }}> Read More</a>
          </p>
          <br />
          <h2><b>Vision</b></h2>
          <p>
            Arthaveda envisions fostering an intellectually stimulating environment where students can
            explore the complexities of economics beyond classroom. <a href="/about" style={{ color: 'neutral' }}>Read More</a>
          </p>
          <br />
          <h2><b>Mission</b></h2>
          <p>
            Arthaveda is committed to promoting academic rigor, critical inquiry, and a deeper
            exploration of economic thought. Our mission is to encourage
            <a href="/about" style={{ color: 'neutral' }}> Read More</a>
          </p>
        </div>

        {/* Second Cell - Profile Card */}
        <div
          ref={secondDivRef}
          style={{
            flex: 2,
            padding: '20px',
            backgroundColor: 'rgba(255, 255, 255)',
            borderRadius: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: '250px',
            overflow: 'auto',
            border: '1px solid #e0e0e0', // Subtle border
            boxShadow: '0 4px 8px rgba(0, 0, 0)', // Shadow for depth
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out', // Smooth transition for opacity and transform
            opacity: '0', // Start with opacity 0
            transform: 'translateY(100px)', // Start from bottom
          }}
          className="profile-card" // Add a class for hover effect
        >
          <img
            src="/tic.jpg"
            alt="Dr. Bishnu Charan Nag"
            style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '15px', border: '3px solid #fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} // Circular image with border
          />
          <h3 style={{ fontWeight: 'bold', margin: '5px 0', fontSize: '1.5rem', color: '#333' }}>Dr. Bishnu Charan Nag</h3>
          <p style={{ margin: '5px 0', fontSize: '1rem', color: '#555' }}>Teacher in Charge</p>
          <p style={{ margin: '5px 0', color: 'blue', fontSize: '0.9rem' }}>demo@example.com</p>
        </div>

        {/* Third Cell */}
        <div
          ref={thirdDivRef}
          style={{
            flex: 3,
            padding: '20px',
            paddingLeft: '40px',
            paddingRight: '40px',
            backgroundColor: 'rgb(255, 255, 255)',
            borderRadius: '10px',
            minWidth: '250px',
            overflow: 'auto',
            transform: 'translateY(100px)', // Start from bottom
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out', // Smooth transition for opacity and transform
            opacity: '0', // Start with opacity 0
          }}
        >
          <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>KNOW US</h1>
          <p>
            --------------------
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <a href="/read-more" style={{ color: 'grey', textDecoration: 'underline' }}>Read More</a>
          </p>
          <h2>TIC's Message</h2>
          <p>
           --------------------
          </p>
        </div>

        {/* Media Query for Responsive Design */}
        <style>
          {`
            @media (max-width: 767px) {
              .flex-container {
                flex-direction: column; /* Stack items vertically */
                height: auto; /* Allow height to adjust based on content */
                padding: 10px; /* Reduce padding for smaller screens */
              }
              .flex-container > div {
                flex: 1 1 100%; /* Each div takes full width */
                margin-bottom: 20px; /* Add spacing between stacked items */
              }
            }

            /* Hover Effect for Profile Card */
            .profile-card:hover {
              transform: translateY(-10px); /* Lift the card slightly */
              box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Increase shadow on hover */
            }

            /* Slide-up Animation */
            .slide-up {
              transform: translateY(0) !important;
              opacity: 1 !important; /* Ensure opacity is 1 when sliding up */
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default AboutUS;
