import { useEffect, useRef } from "react";

const logos = [
  { src: "/brands/car1.png", name: "Hyundai" },
  { src: "/brands/car2.png", name: "Honda" },
  { src: "/brands/car3.png", name: "Land Rover" },
  { src: "/brands/car4.png", name: "Mercedes" },
  { src: "/brands/car5.png", name: "Nissan" },
  { src: "/brands/car6.png", name: "Skoda" },
  { src: "/brands/car7.png", name: "Toyota" },
];

export default function BrandsWeServe() {
  const scrollRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        // Loop back
        if (
          scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black py-16 text-center text-white">
      <div className="flex justify-center mb-4">
        <div className="w-3 h-3 rotate-45 bg-red-600"></div>
      </div>
      <h2 className="text-3xl text-white md:text-4xl font-bold mb-8">Brands We Serve</h2>

      <div
        ref={scrollRef}
        className="overflow-hidden bg-gradient-to-r from-red-300 to-red-700 whitespace-nowrap px-4 md:px-16"
      >
        <div className="inline-flex items-center gap-12 animate-slide whitespace-nowrap">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center min-w-[150px]"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
          {/* Duplicate for seamless scroll */}
          {logos.map((logo, idx) => (
            <div
              key={`duplicate-${idx}`}
              className="flex flex-col items-center justify-center min-w-[150px]"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-20 w-auto object-contain opacity-50"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
