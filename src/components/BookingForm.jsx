"use client"

import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-hot-toast"
import { motion } from "framer-motion"
import { User, Mail, Phone, Car, Calendar, Clock, FileText, ArrowLeft } from "lucide-react"

function BookingForm() {
  const navigate = useNavigate()
  const canvasRef = useRef(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    carModel: "",
    date: "",
    time: "",
    message: "",
  })

  // ⭐ Background Color Control
  const [bgColor, setBgColor] = useState("from-red-900 to-black")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success("Booking submitted successfully!")
    console.log(formData)
  }

  // ⭐ Background Star Shower Animation
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let stars = []

    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        speed: Math.random() * 1 + 0.5,
      })
    }

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "white"
      ctx.shadowBlur = 10
      ctx.shadowColor = "white"

      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    const updateStars = () => {
      stars.forEach((star) => {
        star.y += star.speed
        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
      })
    }

    const animate = () => {
      drawStars()
      updateStars()
      requestAnimationFrame(animate)
    }

    animate()

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={`relative min-h-screen flex items-center justify-center p-4 overflow-hidden bg-gradient-to-br ${bgColor}`}
    >
      {/* Star Shower Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Booking Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
       className="relative z-10 bg-red-600/10 backdrop-blur-lg rounded-xl shadow-md p-6 w-full max-w-xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Book Your Service</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="flex items-center border rounded-lg px-3 py-2 hover:border-blue-500 transition">
            <User className="text-gray-200 mr-2" />
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full outline-none bg-transparent text-white placeholder-gray-300"
            />
          </div>

          {/* Email */}
          <div className="flex items-center border rounded-lg px-3 py-2 hover:border-blue-500 transition">
            <Mail className="text-gray-200 mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full outline-none bg-transparent text-white placeholder-gray-300"
            />
          </div>

          {/* Phone */}
          <div className="flex items-center border rounded-lg px-3 py-2 hover:border-blue-500 transition">
            <Phone className="text-gray-200 mr-2" />
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full outline-none bg-transparent text-white placeholder-gray-300"
            />
          </div>

          {/* Car Model */}
          <div className="flex items-center border rounded-lg px-3 py-2 hover:border-blue-500 transition">
            <Car className="text-gray-200 mr-2" />
            <input
              type="text"
              name="carModel"
              placeholder="Enter your car model"
              value={formData.carModel}
              onChange={handleChange}
              required
              className="w-full outline-none bg-transparent text-white placeholder-gray-300"
            />
          </div>

          {/* Date */}
          <div className="flex items-center border rounded-lg px-3 py-2 hover:border-blue-500 transition">
            <Calendar className="text-gray-200 mr-2" />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full outline-none bg-transparent text-white"
            />
          </div>

          {/* Time */}
          <div className="flex items-center border rounded-lg px-3 py-2 hover:border-blue-500 transition">
            <Clock className="text-gray-200 mr-2" />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full outline-none bg-transparent text-white"
            />
          </div>

          {/* Message */}
          <div className="flex items-start border rounded-lg px-3 py-2 hover:border-blue-500 transition">
            <FileText className="text-gray-200 mr-2 mt-1" />
            <textarea
              name="message"
              placeholder="Enter any additional details..."
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full outline-none resize-none bg-transparent text-white placeholder-gray-300"
            />
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
          >
            Submit Booking
          </motion.button>
        </form>

        {/* Back Button */}
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#9ca3af" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="mt-4 w-full flex items-center justify-center gap-2 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          <ArrowLeft size={18} /> Back to Home
        </motion.button>

        {/* 🎨 Background Color Selector */}
        <div className="mt-6 flex gap-3 justify-center">
          <button
            onClick={() => setBgColor("from-red-900 to-black")}
            className="w-6 h-6 rounded-full bg-gradient-to-br from-red-900 to-black border-2 border-white"
          />
          <button
            onClick={() => setBgColor("from-purple-600 to-pink-600")}
            className="w-6 h-6 rounded-full bg-gradient-to-br from-red-600 to-red-600 border-2 border-white"
          />
          <button
            onClick={() => setBgColor("from-gray-900 to-black")}
            className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-900 to-black border-2 border-white"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default BookingForm
