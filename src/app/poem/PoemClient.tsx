"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import PoemCard from "../components/poemcard";
import { poems } from "../../../lib/poem";
import { getRandomPoem } from "../../../lib/getRandomPoem";

export default function PoemPage() {
  const searchParams = useSearchParams();
  const mood = searchParams.get("mood") ?? "";

  const [poem, setPoem] = useState("");

  useEffect(() => {
    const selectedPoem = getRandomPoem(mood, poems);
    setPoem(selectedPoem);
  }, [mood]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <PoemCard mood={mood} poem={poem} />
    </div>
  );
}