import { useEffect, useState } from "react";

const images = ["/gi.png", "/mi.png", "/redfort.png"];

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
        className="
          w-full h-full 
          bg-cover bg-center 
          transition-all duration-[1500ms] 
          ease-out 
          scale-110
        "
        style={{
          backgroundImage: `url(${images[index]})`,
        }}
      ></div>

      {/* Soft dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
    </div>
  );
}
