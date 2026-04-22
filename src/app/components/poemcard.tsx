"use client";

import React, { useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";

export default function PoemCard({
  mood,
  poem,
}: {
  mood: string;
  poem: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  // reset typing when poem changes
  useEffect(() => {
    setDisplayed("");
    setIndex(0);
  }, [poem]);

  // typing effect INSIDE card
  useEffect(() => {
    if (index >= poem.length) return;

    const timeout = setTimeout(() => {
      setDisplayed((prev) => prev + poem[index]);
      setIndex((prev) => prev + 1);
    }, 40); // faster inside card

    return () => clearTimeout(timeout);
  }, [index, poem]);

  const downloadImage = async () => {
    if (!cardRef.current) return;

    const dataUrl = await toPng(cardRef.current);
    const link = document.createElement("a");
    link.download = `${mood}-poem.png`;
    link.href = dataUrl;
    link.click();
  };

  const getBg = () => {
    if (mood.includes("happy"))
      return "bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500";
    if (mood.includes("sad"))
      return "bg-gradient-to-br from-blue-950 via-indigo-900 to-black";
    if (mood.includes("Excited"))
      return "bg-gradient-to-br from-purple-600 via-pink-600 to-red-500";
    return "bg-gradient-to-br from-gray-900 via-black to-gray-800";
  };

  return (
    <div className="flex flex-col items-center gap-4">

      {/* CARD */}
      <div
        ref={cardRef}
        className={`
          w-[360px]
          p-6
          rounded-3xl
          text-white
          shadow-2xl
          border border-white/10
          ${getBg()}
        `}
      >
        {/* header */}
        <div className="flex items-center justify-center mb-4">
          

          <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-center">
            {mood}
          </span>
        </div>

        {/* ✍️ TYPEWRITER INSIDE CARD */}
        <p className="whitespace-pre-line text-sm leading-relaxed text-center">
          {displayed}
          {index < poem.length && (
            <span className="animate-pulse">|</span>
          )}
        </p>
      </div>

      {/* BUTTON */}
      <button
        onClick={downloadImage}
        className="px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800"
      >
        Download / Share
      </button>
    </div>
  );
}