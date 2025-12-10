import { useEffect, useState } from "react";

const images = ["/gi.png", "/mi.png"];

export default function SlidingBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="absolute inset-0 bg-cover bg-center transition-all duration-1000 scale-110"
      style={{ backgroundImage: `url(${images[index]})` }}
    ></div>
  );
}
