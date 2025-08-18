"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wrench,
  Car,
  Droplets,
  Wind,
  Battery,
  Sparkles,
  RotateCcw,
  Truck,
  Shield,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

/* Simple replacement for missing Button */
const Button = ({ children, className = "", ...props }) => (
  <button
    className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
    {...props}
  >
    {children}
  </button>
);

/* Simple replacement for missing Badge */
const Badge = ({ children, variant = "default", className = "" }) => {
  const baseStyles = "inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full";
  const variants = {
    default: "bg-gray-100 text-gray-800",
    secondary: "bg-red-100 text-red-800",
  };
  return (
    <span className={`${baseStyles} ${variants[variant] || ""} ${className}`}>
      {children}
    </span>
  );
};

const servicePoints = [
  {
    id: "engine",
    x: 45,
    y: 35,
    service: {
      icon: <Car className="h-6 w-6" />,
      title: "Engine Diagnostics",
      description: "Advanced computer diagnostics for engine issues",
      duration: "1-2 hours",
      price: "₹800+",
      details: ["ECU Scanning", "Error Code Reading", "Performance Analysis", "Emission Testing"],
    },
  },
  {
    id: "oil",
    x: 40,
    y: 45,
    service: {
      icon: <Droplets className="h-6 w-6" />,
      title: "Oil & Filter Change",
      description: "Premium quality oil and genuine filters",
      duration: "30-45 mins",
      price: "₹1,200+",
      details: ["Engine Oil Change", "Oil Filter Replacement", "Air Filter Check", "Fluid Top-up"],
    },
  },
  {
    id: "ac",
    x: 55,
    y: 25,
    service: {
      icon: <Wind className="h-6 w-6" />,
      title: "AC Repair & Refill",
      description: "Complete AC system check and gas refill",
      duration: "1-2 hours",
      price: "₹2,000+",
      details: ["Gas Refill", "Compressor Check", "Filter Cleaning", "Cooling Performance Test"],
    },
  },
  {
    id: "brakes",
    x: 25,
    y: 65,
    service: {
      icon: <Shield className="h-6 w-6" />,
      title: "Brake Inspection",
      description: "Safety-first brake system maintenance",
      duration: "2-3 hours",
      price: "₹1,800+",
      details: ["Brake Pad Check", "Disc Inspection", "Brake Fluid Change", "ABS Testing"],
    },
  },
  {
    id: "battery",
    x: 35,
    y: 30,
    service: {
      icon: <Battery className="h-6 w-6" />,
      title: "Battery Service",
      description: "Battery health check and replacement",
      duration: "30 mins",
      price: "₹3,500+",
      details: ["Voltage Testing", "Terminal Cleaning", "Load Testing", "Battery Replacement"],
    },
  },
  {
    id: "wheels",
    x: 75,
    y: 65,
    service: {
      icon: <RotateCcw className="h-6 w-6" />,
      title: "Wheel Alignment",
      description: "Precision wheel alignment for smooth drive",
      duration: "1-2 hours",
      price: "₹1,000+",
      details: ["Wheel Balancing", "Alignment Check", "Tire Pressure", "Suspension Inspection"],
    },
  },
  {
    id: "wash",
    x: 65,
    y: 40,
    service: {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Car Wash & Detailing",
      description: "Premium wash and interior detailing",
      duration: "2-4 hours",
      price: "₹800+",
      details: ["Exterior Wash", "Interior Cleaning", "Waxing", "Dashboard Polish"],
    },
  },
  {
    id: "general",
    x: 50,
    y: 50,
    service: {
      icon: <Wrench className="h-6 w-6" />,
      title: "General Service",
      description: "Complete vehicle inspection and maintenance",
      duration: "2-3 hours",
      price: "₹1,500+",
      details: ["Multi-point Inspection", "Fluid Checks", "Belt Inspection", "Safety Check"],
    },
  },
  {
    id: "pickup",
    x: 15,
    y: 45,
    service: {
      icon: <Truck className="h-6 w-6" />,
      title: "Pickup & Drop",
      description: "Free pickup and drop within city limits",
      duration: "Same day",
      price: "Free*",
      details: ["Doorstep Pickup", "Service Updates", "Quality Check", "Safe Delivery"],
    },
  },
];

const WaveAnimation = ({ delay = 0 }) => (
  <motion.div
    className="absolute inset-0 rounded-full border-2 border-red-400"
    initial={{ scale: 0, opacity: 1 }}
    animate={{ scale: 2, opacity: 0 }}
    transition={{
      duration: 2,
      repeat: Infinity,
      delay,
      ease: "easeOut",
    }}
  />
);

export default function InteractiveCarServices() {
  const [hoveredService, setHoveredService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const activeService = hoveredService || selectedService;

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Rest of your JSX remains exactly the same */}
    </div>
  );
}
