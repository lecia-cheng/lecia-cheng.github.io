'use client';

import { useState, useEffect } from 'react';

interface TypingTitleProps {
  text: string;
  className?: string;
}

export default function TypingTitle({ text, className = '' }: TypingTitleProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 50; // milliseconds per character

    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(typingInterval);
        // Hide cursor after a short delay
        setTimeout(() => {
          setShowCursor(false);
        }, 500);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [text]);

  return (
    <h1 className={className}>
      {displayedText}
      {showCursor && !isComplete && (
        <span className="animate-pulse">|</span>
      )}
    </h1>
  );
}