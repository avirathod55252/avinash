import { Plane } from "lucide-react";

export default function TirangaFlight() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Jet 1 */}
      <div className="fighter jet-1">
        <Plane
          size={90}
          className="rotate-[35deg] text-white dark:text-gray-900 drop-shadow-md dark:drop-shadow-[0_0_6px_rgba(0,0,0,0.6)]"
        />
        <span className="jet-light"></span>
        <Smoke />
      </div>

      {/* Jet 2 */}
      <div className="fighter jet-2">
        <Plane
          size={90}
          className="rotate-[35deg] text-white dark:text-gray-900 drop-shadow-md dark:drop-shadow-[0_0_6px_rgba(0,0,0,0.6)]"
        />
        <span className="jet-light"></span>
        <Smoke />
      </div>

      {/* Jet 3 */}
      <div className="fighter jet-3">
        <Plane
          size={90}
          className="rotate-[35deg] text-white dark:text-gray-900 drop-shadow-md dark:drop-shadow-[0_0_6px_rgba(0,0,0,0.6)]"
        />
        <span className="jet-light"></span>
        <Smoke />
      </div>
    </div>
  );
}

function Smoke() {
  return (
    <div className="smoke-trail">
      <span className="smoke saffron"></span>
      <span className="smoke white"></span>
      <span className="smoke green"></span>
    </div>
  );
}
