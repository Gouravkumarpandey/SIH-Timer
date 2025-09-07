import { useState, useEffect } from 'react';

const TypewriterText = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <div className="text-lg md:text-xl text-white font-semibold text-shadow-lg">
      {displayedText}
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default TypewriterText;
