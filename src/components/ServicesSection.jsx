import { motion } from "framer-motion";
import { FaUserTie, FaOilCan, FaTools } from "react-icons/fa";
import { MdElectricalServices, MdOutlineCarRepair } from "react-icons/md";
import { GiSuspensionBridge } from "react-icons/gi";
import { BsFillDiscFill } from "react-icons/bs";

const services = [
  {
    title: "Dent & Paint",
    description:
      "AutoMechanica specializes in car dent repair and car painting services for a range of models.",
    icon: <FaUserTie className="text-white text-5xl mb-4" />,
  },
  {
    title: "Diagnostics",
    description:
      "If your car needs a mobile diagnostic check done at your home or office, let AutoMechanica come to you.",
    icon: <MdElectricalServices className="text-white text-5xl mb-4" />,
  },
  {
    title: "Oil / Lube / Filters",
    description:
      "AutoMechanica proudly serves the Lube, Oil & Filter change needs of customers' vehicle performance while extending the life of your vehicle.",
    icon: <FaOilCan className="text-white text-5xl mb-4" />,
  },
  {
    title: "Suspension",
    description:
      "The suspension system of your vehicle protects you from bouncing up and down due to the bad road conditions and bumps in the road.",
    icon: <GiSuspensionBridge className="text-white text-5xl mb-4" />,
  },
  {
    title: "Brake",
    description:
      "The brake system consists of different parts that can be fixed individually. A detailed quote is given to you after we perform our systematic brake evaluation.",
    icon: <BsFillDiscFill className="text-white text-5xl mb-4" />,
  },
  {
    title: "Detailing",
    description:
      "AutoMechanica offers professional car detail services at an affordable price. Our interior cleaning, detailing, and restoration services can help you recapture that new car look and smell.",
    icon: <FaTools className="text-white text-5xl mb-4" />,
  },
];

export default function ServicesSection() {
  return (
    <div className="bg-gradient-to-b from-black via-red-900 to-black py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {service.icon}
            <h3 className="text-lg font-semibold text-red-500 mb-2">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed text-white/90">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
