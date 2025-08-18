"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { VolumeX, Volume2 } from "lucide-react"
import { Menu } from "lucide-react"

const navItems = ["HOME", "SERVICE", "ABOUT US", "CONTACT US"]

const HeroSection = () => {
  const videoRef = useRef(null)
  const [isMuted, setIsMuted] = useState(true)
  const [hoverText, setHoverText] = useState("AUTO")
  const [isHovered, setIsHovered] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  const toggleMute = () => {
    const video = videoRef.current
    if (video) {
      video.muted = !video.muted
      setIsMuted(video.muted)
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    setHoverText("ALAM")
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setHoverText("AUTO")
  }

  const handleClick = () => {
    setHoverText(prev => (prev === "AUTO" ? "ALAM" : "AUTO"))
  }

  return (
  <div className="relative min-h-screen text-black overflow-hidden">
      {/* Background Video - Optimized scaling for all screen sizes */}
   <video
  ref={videoRef}
  autoPlay
  loop
  muted={isMuted}
  playsInline
  className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-[0.1px] opacity-40
    scale-[2.5]      /* default (1440px+) */
    xl:scale-[1.2]     /* ~1280px */
    lg:scale-[1.5]    /* ~1024px */
    md:scale-[1.5]     /* ~768px */
    sm:scale-[1.05]    /* ~640px */
    xs:scale-[1.8]    /* custom if using plugin or utility */
    min-[320px]:scale-[1.5]"  /* very small screens */
  style={{ pointerEvents: "none" }}
>
  <source src="https://ik.imagekit.io/wcuhazxr8/video.mp4?updatedAt=1755546936520" type="video/mp4" />
</video>

      <div className="absolute top-0 bottom-8 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-0 -left-6 sm:-left-8 md:-left-10 w-16 sm:w-24 md:w-32 h-[200px] sm:h-[300px] md:h-[400px] rotate-48 bg-gradient-to-br from-red-700 to-red-900 opacity-90" />
        <div className="absolute top-0 left-4 sm:left-6 md:left-10 w-16 sm:w-24 md:w-32 h-[200px] sm:h-[300px] md:h-[400px] rotate-48 bg-gradient-to-br from-red-600 to-red-800 opacity-80" />
      </div>

      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 lg:top-8 lg:left-10 z-50">
        <img
          src="/loGo001.jpg"
          alt="Logo"
          className="h-8 w-8 xs:h-10 xs:w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-full shadow-lg object-cover border border-white"
        />
      </div>

      <nav className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 lg:top-10 lg:right-20 z-50">
         {/* Mobile Navigation */}
        <div className="sm:hidden relative">
          <button
            onClick={() => setShowDropdown((prev) => !prev)}
            className="flex items-center gap-2 bg-black bg-opacity-60 text-white px-3 py-2 rounded-md backdrop-blur-sm"
          >
            <Menu className="w-4 h-4" />
            <span className="text-xs">Menu</span>
          </button>

          <AnimatePresence>
            {showDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-2 w-40 bg-black bg-opacity-80 backdrop-blur-md rounded-lg p-2 shadow-xl border border-white border-opacity-20"
              >
                {navItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="block cursor-pointer px-3 py-2 rounded text-white text-xs transition-all duration-300 hover:bg-red-600 hover:bg-opacity-80 whitespace-nowrap"
                    onClick={() => setShowDropdown(false)}
                  >
                    {item}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="hidden sm:flex flex-wrap justify-end gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-10">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href="#"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 60 }}
              className="cursor-pointer px-2 sm:px-3 py-1 rounded-md text-white text-xs sm:text-sm md:text-base transition-all duration-300 hover:bg-white hover:text-red-600 hover:shadow-md whitespace-nowrap"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </nav>

      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 py-8 sm:py-10 md:py-12 gap-6 sm:gap-8 md:gap-10 lg:gap-0">
        <div className="text-left space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 max-w-full lg:max-w-xl w-full order-2 lg:order-1">
          <h1 className="font-bold leading-tight">
            <div
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold cursor-pointer flex gap-2 transition-all duration-500"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={hoverText}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className={`${
                    isHovered ? "text-red-700" : "text-red-500"
                  } transition-colors duration-300`}
                >
                  {hoverText}
                </motion.span>
              </AnimatePresence>
              <span className="text-white">CAR</span>
            </div>
          </h1>

          <p className="text-red-300 tracking-wide font-semibold italic text-xs sm:text-sm md:text-base">
            BEST DEALER AND AUTOMOTIVE
          </p>

          <p className="text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg max-w-prose">
         At Alam Motors, we provide reliable car servicing to keep your vehicle running smoothly. From routine maintenance to complex repairs, our skilled technicians use advanced tools and genuine parts to ensure top-quality care.
         </p>

          <div className="pt-2 sm:pt-4">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 60 }}
              className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore Cars
            </motion.button>
          </div>
        </div>

        <motion.div
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl order-1 lg:order-2"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 12 }}
        >
          <motion.img
            src="/black-isolated-car.png"
            alt="Car"
            className="w-full h-auto object-contain drop-shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      <div className="absolute bottom-0 right-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-16 sm:-bottom-20 md:-bottom-24 right-12 sm:right-16 md:right-20 lg:right-28 w-16 sm:w-24 md:w-32 h-[120px] sm:h-[160px] md:h-[200px] -rotate-45 bg-gradient-to-br from-red-700 to-red-900 opacity-90" />
        <div className="absolute -bottom-16 sm:-bottom-20 md:-bottom-24 right-4 sm:right-6 md:right-8 lg:right-10 w-16 sm:w-24 md:w-32 h-[120px] sm:h-[160px] md:h-[200px] -rotate-45 bg-gradient-to-br from-red-600 to-red-800 opacity-80" />
      </div>

      <motion.button
        onClick={toggleMute}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 60 }}
        className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 lg:bottom-10 lg:left-10 z-50 text-white bg-black bg-opacity-50 rounded-full p-2 sm:p-3 hover:bg-opacity-70 transition-all duration-300 hover:scale-110"
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        ) : (
          <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        )}
      </motion.button>

      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 block sm:hidden">
        <div className="text-white text-xs bg-black bg-opacity-50 rounded-full px-3 py-1">Swipe for more</div>
      </div>
    </div>
  )
}

export default HeroSection