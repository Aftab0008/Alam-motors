"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"   // ✅ navigate hook
import { Wrench, Droplets, Sparkles, Settings, Battery, Gauge, Car, Shield } from "lucide-react"

const services = [
  {
    id: "detailing",
    name: "Car Detailing",
    description: "Professional interior and exterior cleaning, waxing, and protection for a showroom finish.",
    icon: <Sparkles className="w-3 h-3" />,
    position: { top: "52%", left: "39%" },
  },
  {
    id: "oil-filter",
    name: "Oil Filter Change",
    description: "Replace old oil filters to ensure clean oil circulation and protect your engine components.",
    icon: <Settings className="w-3 h-3" />,
    position: { top: "38%", left: "50%" },
  },
  {
    id: "battery",
    name: "Battery Service",
    description: "Battery testing, cleaning terminals, and replacement to keep your vehicle starting reliably.",
    icon: <Battery className="w-3 h-3" />,
    position: { top: "42%", left: "12%" },
  },
  {
    id: "brake-service",
    name: "Brake Service",
    description: "Complete brake inspection, pad replacement, and fluid service for your safety on the road.",
    icon: <Shield className="w-3 h-3" />,
    position: { top: "48%", left: "22%" },
  },
  {
    id: "diagnostics",
    name: "Engine Diagnostics",
    description: "Advanced computer diagnostics to identify and resolve engine performance issues quickly.",
    icon: <Gauge className="w-3 h-3" />,
    position: { top: "39%", left: "29%" },
  },
  {
    id: "maintenance",
    name: "General Maintenance",
    description: "Comprehensive vehicle inspection and maintenance to prevent costly repairs down the road.",
    icon: <Wrench className="w-3 h-3" />,
    position: { top: "42%", left: "68%" },
  },
  {
    id: "tire-service",
    name: "Tire Service",
    description: "Tire rotation, balancing, alignment, and replacement for optimal handling and safety.",
    icon: <Car className="w-3 h-3" />,
    position: { top: "62%", left: "54%" },
  },
]

export default function CarServicesSection() {
  const [hoveredService, setHoveredService] = useState(null)
  const [clickedService, setClickedService] = useState(null)
  const navigate = useNavigate()   // ✅ initialize

  const currentService = services.find((service) => service.id === (clickedService || hoveredService))

  const handleServiceClick = (serviceId) => {
    if (clickedService === serviceId) {
      setClickedService(null)
    } else {
      setClickedService(serviceId)
    }
  }

  const MovingStar = ({ delay = 0, duration = 20, size = 2 }) => (
    <motion.div
      className="absolute bg-white rounded-full opacity-60"
      style={{ width: `${size * 2}px`, height: `${size * 2}px` }}
      initial={{ x: -10, y: Math.random() * window.innerHeight }}
      animate={{
        x: typeof window !== "undefined" ? window.innerWidth + 10 : 1200,
        y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
      }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    />
  )

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-red-900 to-orange-800 overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <MovingStar key={i} delay={i * 2} duration={15 + Math.random() * 10} size={Math.random() > 0.7 ? 1 : 0.5} />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Premium Car Services</h1>
          <p className="text-base sm:text-xl text-blue-200 max-w-2xl mx-auto px-4">
            Hover or tap on the service points to discover our automotive care
          </p>
        </motion.div>

        {/* Car + Service Points + Details */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 lg:gap-8 items-center min-h-[400px] sm:min-h-[600px]">
          {/* Car */}
          <div className="w-full lg:col-span-2 flex justify-center items-center">
            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0], rotateY: [0, 2, 0, -2, 0] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <motion.img
                src="/black-isolated-car.png"
                alt="Car Services"
                className="w-[280px] xs:w-[320px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto drop-shadow-2xl relative z-10"
                whileHover={{ scale: 1.05 }}
              />

              {/* Service points */}
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  className="absolute z-20 cursor-pointer"
                  style={{ top: service.position.top, left: service.position.left }}
                  onHoverStart={() => setHoveredService(service.id)}
                  onHoverEnd={() => setHoveredService(null)}
                  onClick={() => handleServiceClick(service.id)}
                  whileHover={{ scale: 1.2 }}
                  animate={{ scale: hoveredService === service.id || clickedService === service.id ? 1.3 : 1 }}
                >
                  <motion.div
                    className="relative"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    {/* Service Point */}
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white/20">
                      {service.icon}
                    </div>

                    {/* Pulsing ring ✅ */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-red-400"
                      animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeOut" }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right panel */}
          <div className="w-full lg:col-span-1 flex justify-center lg:justify-start">
            <div className="w-full max-w-sm">
              <AnimatePresence mode="wait">
                {currentService ? (
                  <motion.div
                    key={currentService.id}
                    className="bg-red-100 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl border border-red-200"
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-red-800">{currentService.name}</h3>
                    <p className="text-red-600 mt-2">{currentService.description}</p>

                    <motion.button
                      className="mt-6 w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigate("/booking")}   // ✅
                    >
                      Book This Service
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <h3 className="text-lg sm:text-xl font-semibold text-white/80 mb-2">Explore Our Services</h3>
                    <p className="text-white/60 text-sm sm:text-base">
                      Hover or tap service points on the car to learn more
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/booking")}   // ✅
          >
            Book Your Service Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
