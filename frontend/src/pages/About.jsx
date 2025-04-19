import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <div 
        className="relative py-32 text-center text-white overflow-hidden"
        style={{ backgroundColor: 'rgb(129, 25, 25)' }}
      >
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-red-900/50 to-red-800/30"
          aria-hidden="true"
        ></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">About Arthaveda</h1>
          <p className="text-xl font-light">
            Economics Department of Motilal Nehru College (Evening), University of Delhi
          </p>
        </div>

        {/* Decorative Element */}
        <div 
          className="absolute -bottom-1 left-0 right-0 h-16 bg-white transform skew-y-2"
          aria-hidden="true"
        ></div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Legacy Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Our Legacy</h2>
          <p className="text-lg leading-relaxed">
            Founded in <strong>2017</strong>, Arthaveda has emerged as a beacon of academic excellence and intellectual curiosity within the University of Delhi. As the Economics Department of Motilal Nehru College (Evening), we are driven by a passion for understanding the intricacies of economics and its real-world implications.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Over the years, we have built a legacy of fostering <strong>critical thinking</strong>, <strong>collaborative learning</strong>, and <strong>research-driven discussions</strong>. Our department serves as a vibrant hub where students engage deeply with economic theories, challenge conventional perspectives, and explore innovative solutions to contemporary economic challenges.
          </p>
        </section>

        {/* Vision Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Vision</h2>
          <p className="text-lg leading-relaxed">
            Arthaveda envisions fostering an intellectually stimulating environment where students can explore the complexities of economics beyond the classroom. Our goal is to cultivate <strong>analytical thinking</strong>, <strong>research aptitude</strong>, and a profound understanding of economic principles, equipping students to navigate and contribute meaningfully to the ever-evolving global economy.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Mission</h2>
          <p className="text-lg leading-relaxed">
            Arthaveda is committed to promoting <strong>academic rigor</strong>, <strong>critical inquiry</strong>, and a deeper exploration of economic thought. Our mission is to encourage research, discussion, and engagement with economic theories and policies while providing students with opportunities to apply their knowledge in dynamic and challenging settings.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            By organizing <strong>competitions</strong>, <strong>seminars</strong>, and <strong>interactive sessions</strong>, we strive to challenge conventional thinking and inspire innovative approaches to economic issues. We are dedicated to bridging the gap between theory and practice, fostering analytical skills, and equipping students with a pragmatic understanding of real-world economic challenges.
          </p>
        </section>

        
      </div>
    </div>
  );
};

export default AboutUs;