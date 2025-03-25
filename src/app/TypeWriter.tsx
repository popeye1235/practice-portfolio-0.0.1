"use client";

import React, { useEffect, useState } from "react";
import "./globals.css";

const Typewriter = () => {
  const [text, setText] = useState(""); // Current displayed text
  const [isDeleting, setIsDeleting] = useState(false); // Typing or deleting flag
  const [loop, setLoop] = useState(0); // Current phrase index
  const [speed, setSpeed] = useState(150); // Typing/Deleting speed

  const fixedText = "Hello! Myself Sudip Mishra,  "; // Fixed part
  const dynamicTexts = [
    "a passionate Frontend Developer.",
    "an AI and ChatGPT enthusiast.",
    "an Aspiring Photographer.",
    "a Historical Storyteller",
    "a Self made Astrologer",
    "a Mythologist"
  ]; // Dynamic phrases to cycle through

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = dynamicTexts[loop % dynamicTexts.length]; // Loop through phrases
      const fullText = isDeleting
        ? fixedText + currentPhrase.slice(0, text.length - fixedText.length - 1)
        : fixedText + currentPhrase.slice(0, text.length - fixedText.length + 1);

      setText(fullText);

      // Switch between typing and deleting
      if (!isDeleting && fullText === fixedText + currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && fullText === fixedText) {
        setIsDeleting(false);
        setLoop(loop + 1); // Move to the next phrase
      }

      setSpeed(isDeleting ? 100 : 150); // Adjust speed
    };

    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer); // Cleanup timer
  }, [text, isDeleting, loop, speed, dynamicTexts]);

  // Extract the dynamic text part for styling
  const dynamicText = text.replace(fixedText, "");

  return (
    <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 text-center">
      {fixedText} {' '}
      <span className="dynamic-text">{dynamicText}</span>
      <span className="blinking-cursor">|</span>
    </p>
  );
};

export default Typewriter;
