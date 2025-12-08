// components/TypingText.tsx
"use client";
import React, { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
}

const TypingText: React.FC<TypingTextProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(text.slice(0, index + 1));
        setIndex(index + 1);
        if (index + 1 === text.length) setIsDeleting(true);
      } else {
        setDisplayedText(text.slice(0, index - 1));
        setIndex(index - 1);
        if (index - 1 === 0) setIsDeleting(false);
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, speed]);

  return (
    <span>
      {displayedText}
      <span className="inline-block w-[2px] bg-[#2c73d2] animate-blink ml-1">&nbsp;</span>
    </span>
  );
};

export default TypingText;