"use client";

import { useEffect, useState } from "react";

export default function Typewriter({
  text,
  speed = 100,
  onComplete,
}: {
  text: string;
  speed?: number;
  onComplete?: () => void;
}) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  // reset
  useEffect(() => {
    setDisplayed("");
    setIndex(0);
    setDone(false);
  }, [text]);

  // typing
  useEffect(() => {
    if (index >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayed((prev) => prev + text[index]);
      setIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, text, speed]);

  // ✅ PERFECT COMPLETION SYNC
  useEffect(() => {
    if (!done && index === text.length) {
      setDone(true);

      // 👇 wait one frame AFTER render
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          onComplete?.();
        });
      });
    }
  }, [index, text.length, done, onComplete]);

  return (
    <p className="whitespace-pre-line text-lg text-amber-50">
      {displayed}
      {index < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </p>
  );
}