"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

export default function ScrollButtons() {
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setShowTop(scrollTop > 250);

      setShowBottom(scrollTop + windowHeight < documentHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  const scrollToBottom = () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col gap-3">
      {showTop && (
        <button
          onClick={scrollToTop}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-black shadow-xl transition hover:scale-110 hover:bg-yellow-300"
        >
          <ArrowUp size={22} />
        </button>
      )}

      {showBottom && (
        <button
          onClick={scrollToBottom}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B0B0F] text-yellow-400 shadow-xl transition hover:scale-110 hover:bg-gray-900"
        >
          <ArrowDown size={22} />
        </button>
      )}
    </div>
  );
}
