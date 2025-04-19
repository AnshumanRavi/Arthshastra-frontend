import { useEffect, useState } from "react";

const SplashScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [exit, setExit] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 25 : 100));
    }, 100);

    const timer = setTimeout(() => {
      setExit(true);
      setTimeout(() => {
        setVisible(false); // Hide the splash screen after animation
        onFinish(); // Call the onFinish callback
      }, 700); // Allow animation to complete
    }, 1350);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onFinish]);

  if (!visible) return null; // Don't render the splash screen if it's hidden

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className={`fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-red-600 to-red-900 text-white text-3xl sm:text-4xl md:text-5xl font-extrabold transition-transform duration-700 ${exit ? '-translate-x-full' : ''}`}>
        <img src="public/photos/Arthashastra.png" alt="Arthashastra Logo" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-6 animate-bounce" />
        <h1 className="mb-6 tracking-wide drop-shadow-lg text-center px-4">Welcome to Arthashastra</h1>
        <div className="w-48 sm:w-60 md:w-72 h-2 sm:h-3 bg-gray-300 rounded-full overflow-hidden shadow-md">
          <div
            className="h-full bg-white transition-all duration-100 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;