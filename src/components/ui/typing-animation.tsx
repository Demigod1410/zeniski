"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingAnimationProps {
  text: string;
  className?: string;
  speed?: number;
  showCursor?: boolean;
}

export function TypingAnimation({ 
  text, 
  className = "", 
  speed = 30,
  showCursor = true 
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    setDisplayedText("");
    setIsComplete(false);
    let index = 0;
    
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);
    
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && !isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block ml-[1px] w-[2px] h-[1em] bg-current"
        />
      )}
    </span>
  );
}