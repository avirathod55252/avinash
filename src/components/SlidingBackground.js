import { useEffect, useState } from "react";

const images = ["/in.png"];

export default function SlidingBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background Image */}
      <div
        key={index}
        className="
          w-full h-full
          bg-cover
          bg-center
          scale-70 sm:scale-70
          transition-transform duration-[2000ms]
          ease-out
        "
        style={{
          backgroundImage: `url(${images[index]})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
    </div>
  );
}
