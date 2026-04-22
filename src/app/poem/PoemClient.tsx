"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import PoemCard from "../components/poemcard";

export default function PoemClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const mood = searchParams.get("mood") ?? "";

  const [poem, setPoem] = useState("");

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

    if (mood) fetchPoem();
  }, [mood]);

  return (
    <>
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => router.back()}
          className="px-4 py-2 rounded-full bg-black text-white"
        >
          ⬅ Back
        </button>
      </div>

      <div className="min-h-screen flex items-center justify-center p-6">
        <PoemCard mood={mood} poem={poem} />
      </div>
    </>
  );
}