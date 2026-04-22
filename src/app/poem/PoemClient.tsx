"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import PoemCard from "../components/poemcard";
import { poems } from "../../../lib/poem";
import { getRandomPoem } from "../../../lib/getRandomPoem";
import { moodMap } from "../../../lib/moodMap";

export default function PoemPage() {
  const searchParams = useSearchParams();
 const rawMood = searchParams.get("mood") ?? "";
const mood = rawMood.trim();

  const router = useRouter();
  const [poem, setPoem] = useState("");

  useEffect(() => {
  const cleanMood = moodMap[mood] || mood;

  const selectedPoem = getRandomPoem(cleanMood, poems);
  setPoem(selectedPoem);
}, [mood]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative">
      
      {/* BACK BUTTON */}
      <button
        onClick={() => router.back()}
        className="fixed top-4 left-4 z-50 cursor-pointer text-white"
      >
        ⬅ back
      </button>

      <PoemCard mood={mood} poem={poem} />
    </div>
  );
}