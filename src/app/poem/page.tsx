"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import PoemCard from "../components/poemcard";

export default function PoemPage() {
  const searchParams = useSearchParams();
  const router = useRouter(); // 👈 add this

  const mood = searchParams.get("mood") ?? "";

  const [poem, setPoem] = useState("");
  const [showVideo, setShowVideo] = useState(false);

  
  useEffect(() => {
    const fetchPoem = async () => {
      const res = await fetch("/api/poem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mood }),
      });

      const data = await res.json();

      setPoem(data?.poem || "No poem generated.");
    };

    fetchPoem();
  }, [mood]);

  return (
    <>
      {/* BACK BUTTON */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => router.back()} // 👈 THIS IS THE MAGIC
          className="cursor-pointer px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800"
        >
          ⬅ Back
        </button>
      </div>

      {/* CARD */}
      <div className="min-h-screen flex items-center justify-center p-6">
        <PoemCard mood={mood} poem={poem} />
      </div>
    </>
  );
}