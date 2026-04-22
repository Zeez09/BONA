"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dropdown() {
  const [value, setValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState(false);

  const router = useRouter();
  const boxRef = useRef<HTMLDivElement>(null);

  const options: string[] = [
    "happy 😊",
    "sad 😢",
    "Excited 🤩",
    "Tired 😴",
    "Neutral 😐",
    "pregnant lizard 🤰",
    "pissed off 😡",
  ];

  const handleSelect = (item: string) => {
    setValue(item);
    setOpen(false);
    setShowMessage(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getResult = (value: string) => {
    switch (value) {
      case "happy 😊":
        return "You’re in a good mood. Keep that energy!";
      case "sad 😢":
        return "It’s okay to feel sad. Take your time.";
      case "Excited 🤩":
        return "Big energy! Something good is coming.";
      case "Tired 😴":
        return "Rest a bit. Your body needs it.";
      case "Neutral 😐":
        return "Balanced mood. Calm and steady.";
      case "pregnant lizard 🤰":
        return "bro… I don’t even know what to say lmao";
      case "pissed off 😡":
        return "Take a deep breath. You’ll be alright.";
      default:
        return "";
    }
  };

  // 🔥 FADE OUT
  const fadeOutAudio = () => {
    const audio = document.getElementById("bg-music") as HTMLAudioElement;
    if (!audio) return;

    let volume = audio.volume;

    const fade = setInterval(() => {
      if (volume > 0.05) {
        volume -= 0.05;
        audio.volume = volume;
      } else {
        audio.volume = 0;
        audio.pause();
        clearInterval(fade);
      }
    }, 100);
  };

  // 🔥 FADE IN
  const fadeInAudio = () => {
    const audio = document.getElementById("bg-music") as HTMLAudioElement;
    if (!audio) return;

    audio.volume = 0;
    audio.play();

    let volume = 0;

    const fade = setInterval(() => {
      if (volume < 0.95) {
        volume += 0.05;
        audio.volume = volume;
      } else {
        audio.volume = 1;
        clearInterval(fade);
      }
    }, 100);
  };

  return (
    <div className="w-64 relative" ref={boxRef}>
      
      {/* INPUT */}
      <div
        className="border p-2 rounded-md cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        {value || "How are you feeling?"}
      </div>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute w-full mt-1 border rounded-md shadow-md z-50 bg-black/40 backdrop-blur-md">
          {options.map((item) => (
            <div
              key={item}
              className="p-2 cursor-pointer hover:bg-gray-600"
              onClick={() => handleSelect(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}

      {/* RESULT */}
      <div className="mt-4 text-center">
        {value && (
          <div>

            {!showMessage && (
              <>
                <p>{getResult(value)}</p>
                <p className="mt-2">Want a poem to describe your mood?</p>

                <div className="flex justify-center gap-4 mt-4">
                  <button
                    onClick={() =>
                      router.push(`/poem?mood=${encodeURIComponent(value)}`)
                    }
                    className="cursor-pointer border px-6 py-2 rounded-full hover:bg-white hover:text-black"
                  >
                    yes
                  </button>

                  <button
                    onClick={() => setShowMessage(true)}
                    className="cursor-pointer border px-6 py-2 rounded-full hover:bg-white hover:text-black"
                  >
                    no
                  </button>
                </div>
              </>
            )}

            {/* 🎬 VIDEO */}
            {showMessage && (
              <div className="mt-4 flex flex-col items-center gap-3">

                <p>Here is something funny to watch 😊</p>

                <video
                  controls
                  className="w-full rounded-xl h-40 md:h-60 "
                  onPlay={fadeOutAudio}
                  onEnded={fadeInAudio}
                >
                  <source src="https://res.cloudinary.com/dflqplmaj/video/upload/q_auto,f_auto/v1776836282/Img_2146_yi7rvj.mp4" type="video/mp4" />
                </video>

                <button
                  onClick={() => setShowMessage(false)}
                  className="text-xs md:text-sm hover:text-black text-white px-4 py-2 rounded-full border cursor-pointer hover:bg-white"
                >
                  close
                </button>

              </div>
            )}

          </div>
        )}
      </div>
    </div>
  );
}